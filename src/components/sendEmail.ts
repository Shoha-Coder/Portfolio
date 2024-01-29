import emailjs from "@emailjs/browser";

const SendEmail: Function = (templateParams: Record<string, unknown>): void => {
  emailjs
    .send(
      "Shoha_Coder",
      "template_4ec5d65",
      templateParams,
      "HWGjo8dOHRH3vCR_9"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

export default SendEmail;
