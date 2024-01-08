import emailjs from "emailjs-com";

const SendEmail = (templateParams) => {
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
export default SendEmail