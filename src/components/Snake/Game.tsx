import React, { Component, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";
import Menu from "./Menu";
import Style from "@/styles/Game.module.scss";
import Up from "@/assets/images/Up Arrow.svg";
import Down from "@/assets/images/Down Arrow.svg";
import Left from "@/assets/images/Left Arrow.svg";
import Right from "@/assets/images/Right Arrow.svg";
import FoodLeft from "./FoodLeft";
import GameOverImg from "@/assets/images/GameOver.png";
import GmeWinImg from "@/assets/images/GameWon.png";
import Image from "next/image";
import { GameState } from "@/assets/interface";

const getRandomFood = (): number[] => {
  const min = 1;
  const max = 98;
  const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: getRandomFood(),
  direction: "RIGHT",
  speed: 110,
  route: "menu",
  snakeDots: [
    [0, 0],
    [0, 2],
  ],
  foodCount: 2,
};

class Game extends Component<{}, GameState> {
  private gameInterval: NodeJS.Timeout | null = null;
  private gameOverCalled = false;
  constructor(props: {}) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    if (this.state) {
      this.gameInterval = setInterval(this.moveSnake, this.state.speed);
      document.addEventListener("keydown", this.onKeyDown as any);
    }
  }

  componentWillUnmount() {
    clearInterval(this.gameInterval as NodeJS.Timeout);
  }

  componentDidUpdate() {
    this.onSnakeOutOfBounds();
    this.onSnakeCollapsed();
    this.onSnakeEats();
  }

  onKeyDown = (e: React.KeyboardEvent): void => {
    e = e || (window.event as any);
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
    }
  };

  moveSnake = () => {
    const dots = [...this.state.snakeDots];
    const head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        dots.push([head[0] + 2, head[1]]);
        break;
      case "LEFT":
        dots.push([head[0] - 2, head[1]]);
        break;
      case "DOWN":
        dots.push([head[0], head[1] + 2]);
        break;
      case "UP":
        dots.push([head[0], head[1] - 2]);
        break;
    }

    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  onSnakeOutOfBounds() {
    const snakeDots = this.state.snakeDots ?? [];
    const head = snakeDots[snakeDots.length - 1];

    if (
      this.state.route === "game" &&
      (head?.[0] >= 100 || head?.[1] >= 100 || head?.[0] < 0 || head?.[1] < 0)
    ) {
      this.gameOver();
    }
  }

  onSnakeCollapsed() {
    const snake = [...(this.state.snakeDots ?? [])];
    const head = snake[snake.length - 1];

    snake.pop();

    snake.forEach((dot) => {
      if (head && head[0] === dot[0] && head[1] === dot[1]) {
        if (!this.gameOverCalled) {
          this.gameOverCalled = true;
          this.gameOver();
        }
      }
    });
  }

  onSnakeEats() {
    const head = (this.state.snakeDots ?? [])[this.state.snakeDots?.length - 1];
    const food = this.state.food ?? [];

    if (head && head[0] === food[0] && head[1] === food[1]) {
      this.setState(
        (prevState) => ({
          food: getRandomFood(),
        }),
        () => {
          if ((this.state.snakeDots?.length ?? 0) - 2 === 10) {
            this.gameWin();
          }
        }
      );

      this.increaseSnake();
      this.increaseSpeed();
    }
  }

  increaseSnake() {
    const newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
      clearInterval(this.gameInterval as NodeJS.Timeout);
      this.gameInterval = setInterval(this.moveSnake, this.state.speed);
    }
  }

  onRouteChange = (): void => {
    this.setState({
      route: "game",
    });
    document.body.style.overflow = "hidden";
  };

  gameOver(): void {
    this.setState({
      route: "gameOver",
    });
  }

  gameWin(): void {
    this.setState({
      route: "gameWin",
    });
  }

  onDown = (): void => this.updateDirection("DOWN");
  onUp = (): void => this.updateDirection("UP");
  onRight = (): void => this.updateDirection("RIGHT");
  onLeft = (): void => this.updateDirection("LEFT");

  updateDirection(direction: string): void {
    const dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
    }

    dots.push(head);
    dots.shift();
    this.setState({
      direction,
      snakeDots: dots,
    });
  }

  render() {
    const { route, snakeDots, food } = this.state || {};
    const foodCount = snakeDots ? snakeDots.length - 2 : 0;

    return <div>{this.renderScreen(route, foodCount)}</div>;
  }

  renderScreen(route: string, foodCount: number): JSX.Element {
    const { snakeDots, food } = this.state || {};

    switch (route) {
      case "menu":
        return this.renderMenuScreen(foodCount);
      case "game":
        return this.renderGameScreen(snakeDots ?? [], food ?? [], foodCount);
      case "gameOver":
        return this.renderGameOverScreen();
      case "gameWin":
        return this.renderGameWinScreen();
      default:
        return this.renderMenuScreen(foodCount);
    }
  }

  renderMenuScreen(foodCount: number): JSX.Element {
    return (
      <div className={Style.wrapper_}>
        <Menu onRouteChange={this.onRouteChange} />
        {this.renderButtonsAndFoodLeft(foodCount)}
      </div>
    );
  }

  renderGameScreen(
    snakeDots: number[][],
    food: number[],
    foodCount: number
  ): JSX.Element {
    return (
      <div className={Style.wrapper}>
        <div className={Style.game_area}>
          {snakeDots.map((dot, index) => (
            <Snake key={index} dot={dot} />
          ))}
          <Food dot={food} />
        </div>
        {this.renderButtonsAndFoodLeft(foodCount)}
      </div>
    );
  }

  renderGameOverScreen(): JSX.Element {
    return (
      <div className={Style.wrapper_game_over}>
        <div className={Style.game_area_game_over}>
          <Image draggable={false} src={GameOverImg} alt="" />
          <h1>GAME OVER!</h1>
          <h4 onClick={() => window.location.replace("/")}>start-again</h4>
        </div>
        {this.renderButtonsAndFoodLeft()}
      </div>
    );
  }

  renderGameWinScreen(): JSX.Element {
    return (
      <div className={Style.wrapper_game_over}>
        <div className={Style.game_area_game_win}>
          <Image draggable={false} src={GmeWinImg} alt="" />
          <h1>WELL DONE!</h1>
          <h4 onClick={() => window.location.replace("/")}>play-again</h4>
        </div>
        {this.renderButtonsAndFoodLeft(0)}
      </div>
    );
  }

  renderButtonsAndFoodLeft(foodCount?: number): JSX.Element {
    return (
      <div className={Style.ContainerRight}>
        <div className={Style.buttons}>
          <h3>// use keyboard</h3>
          <h3>// arrows to play</h3>
          <div className={Style.Buttons}>
            <Image draggable={false} src={Up} className={Style.Up} alt="" onClick={this.onUp} />
            <div className={Style.bottom}>
              <Image draggable={false} src={Left} alt="" onClick={this.onLeft} />
              <Image draggable={false} src={Down} alt="" onClick={this.onDown} />
              <Image draggable={false} src={Right} alt="" onClick={this.onRight} />
            </div>
          </div>
        </div>
        <div className={Style.FoodLeft}>
          <h3>// food left</h3>
          <FoodLeft foodLeft={foodCount ?? 3} />
        </div>
      </div>
    );
  }
}

export default Game;
