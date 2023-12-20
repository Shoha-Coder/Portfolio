import React, { Component } from "react";
import Snake from "./Snake";
import Food from "./Food";
import Menu from "./Menu";
import Style from "@/styles/Game.module.scss";
import Up from "@/images/Up Arrow.svg";
import Down from "@/images/Down Arrow.svg";
import Left from "@/images/Left Arrow.svg";
import Right from "@/images/Right Arrow.svg";
import FoodLeft from "./FoodLeft";
import GameOverImg from "@/images/GameOver.png";
import GmeWinImg from "@/images/GameWon.png";
import Image from "next/image";

const getRandomFood = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
};

const initialState = {
    food: getRandomFood(),
    direction: "RIGHT",
    speed: 110,
    route: "menu",
    snakeDots: [[0, 0], [0, 2]],
    foodCount: 0,
};

class Game extends Component {
    constructor() {
        super();
        this.state = initialState;
        this.gameOverCalled = false;
    }

    componentDidMount() {
        this.gameInterval = setInterval(this.moveSnake, this.state.speed);
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        clearInterval(this.gameInterval);
    }

    componentDidUpdate() {
        this.onSnakeOutOfBounds();
        this.onSnakeCollapsed();
        this.onSnakeEats();
    }

    onKeyDown = (e) => {
        e = e || window.event;
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
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        switch (this.state.direction) {
            case "RIGHT":
                head = [head[0] + 2, head[1]];
                break;
            case "LEFT":
                head = [head[0] - 2, head[1]];
                break;
            case "DOWN":
                head = [head[0], head[1] + 2];
                break;
            case "UP":
                head = [head[0], head[1] - 2];
                break;
        }

        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots,
        });
    };

    onSnakeOutOfBounds() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (this.state.route === "game") {
            if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
                this.gameOver();
            }
        }
    }

    onSnakeCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach((dot) => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                if (!this.gameOverCalled) {
                    this.gameOverCalled = true;
                    this.gameOver();
                }
            }
        });
    }

    onSnakeEats() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;

        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState(
                (prevState) => ({
                    food: getRandomFood(),
                }),
                () => {
                    if (this.state.snakeDots.length - 2 === 10) {
                        this.gameWin();
                    }
                }
            );

            this.increaseSnake();
            this.increaseSpeed();
        }
    }

    increaseSnake() {
        let newSnake = [...this.state.snakeDots];
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
            clearInterval(this.gameInterval);
            this.gameInterval = setInterval(this.moveSnake, this.state.speed);
        }
    }

    onRouteChange = () => {
        this.setState({
            route: "game",
        });
        document.body.style.overflow = "hidden";
    };

    gameOver() {
        this.setState({
            route: "gameOver",
        });
    }

    gameWin() {
        this.setState({
            route: "gameWin",
        });
    }

    onDown = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        head = [head[0], head[1] + 2];
        dots.push(head);
        dots.shift();
        this.setState({
            direction: "DOWN",
            snakeDots: dots
        });
    };

    onUp = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        head = [head[0], head[1] - 2];
        dots.push(head);
        dots.shift();
        this.setState({
            direction: "UP",
            snakeDots: dots
        });
    };

    onRight = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        head = [head[0] + 2, head[1]];
        dots.push(head);
        dots.shift();
        this.setState({
            direction: "RIGHT",
            snakeDots: dots
        });
    };

    onLeft = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        head = [head[0] - 2, head[1]];
        dots.push(head);
        dots.shift();
        this.setState({
            direction: "LEFT",
            snakeDots: dots
        });
    };

    render() {
        let foodsLeftStart = 3
        let foodCount = this.state.snakeDots.length - 2
        const { route, snakeDots, food } = this.state;
        return (
            <div>
                {route === "menu" ? (
                    // menu screen
                    <div className={Style.wrapper_}>
                        <Menu onRouteChange={this.onRouteChange} />
                        <div className={Style.ContainerRight}>
                            <div className={Style.buttons}>
                                <h3>// use keyboard</h3>
                                <h3>// arrows to play</h3>
                                <div className={Style.Buttons}>
                                    <Image src={Up} className={Style.Up} alt="" />
                                    <div className={Style.bottom}>
                                        <Image src={Left} alt="" />
                                        <Image src={Down} alt="" />
                                        <Image src={Right} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.FoodLeft}>
                                <h3>// food left</h3>
                                <FoodLeft foodLeft={foodsLeftStart} />
                            </div>
                        </div>
                    </div>
                ) : route == "game" ? (
                    // game screen
                    <div className={Style.wrapper}>
                        <div className={Style.game_area}>
                            <Snake snakeDots={snakeDots} />
                            <Food dot={food} />
                        </div>
                        <div className={Style.ContainerRight}>
                            <div className={Style.buttons}>
                                <h3>// use keyboard</h3>
                                <h3>// arrows to play</h3>
                                <div className={Style.Buttons}>
                                    <Image src={Up} className={Style.Up} alt="" />
                                    <div className={Style.bottom}>
                                        <Image src={Left} alt="" />
                                        <Image src={Down} alt="" />
                                        <Image src={Right} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.FoodLeft}>
                                <h3>// food left</h3>
                                <FoodLeft foodLeft={foodCount} />
                            </div>
                        </div>
                    </div>
                ) : route === "gameOver" ? (
                    // Game over screen
                    <div className={Style.wrapper_game_over}>
                        <div className={Style.game_area_game_over}>
                            <Image src={GameOverImg} alt="" />
                            <h1>GAME OVER!</h1>
                            <h4 onClick={() => window.location.replace("/")}>start-again</h4>
                        </div>
                        <div className={Style.ContainerRight}>
                            <div className={Style.buttons}>
                                <h3>// use keyboard</h3>
                                <h3>// arrows to play</h3>
                                <div className={Style.Buttons}>
                                    <Image src={Up} className={Style.Up} alt="" />
                                    <div className={Style.bottom}>
                                        <Image src={Left} alt="" />
                                        <Image src={Down} alt="" />
                                        <Image src={Right} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.FoodLeft}>
                                <h3>// food left</h3>
                                <FoodLeft foodLeft={foodsLeftStart} />
                            </div>
                        </div>
                    </div>
                ) : route === "gameWin" ? (
                    // Game win screen
                    <div className={Style.wrapper_game_over}>
                        <div className={Style.game_area_game_win}>
                            <Image src={GmeWinImg} alt="" />
                            <h1>WELL DONE!</h1>
                            <h4 onClick={() => window.location.replace("/")}>play-again</h4>
                        </div>
                        <div className={Style.ContainerRight}>
                            <div className={Style.buttons}>
                                <h3>// use keyboard</h3>
                                <h3>// arrows to play</h3>
                                <div className={Style.Buttons}>
                                    <Image src={Up} className={Style.Up} alt="" />
                                    <div className={Style.bottom}>
                                        <Image src={Left} alt="" />
                                        <Image src={Down} alt="" />
                                        <Image src={Right} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={Style.FoodLeft}>
                                <h3>// food left</h3>
                                <FoodLeft foodLeft={0} />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Game;