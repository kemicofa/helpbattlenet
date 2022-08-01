import getEmail from "./getEmail.ts";
import getPassword from "./getPassword.ts";
import getSecretQuestionAndAnswer from "./getSecretQuestionAndAnswer.ts";

const BASE_URL = "http://www.helpbattle.net";

let counter = 1;

setInterval(async () => {
  try {
    const formdataLogin = new FormData();

    const email = getEmail();
    const password = getPassword();

    formdataLogin.append("accountName", email);
    formdataLogin.append("password", password);

    const resLogin = await fetch(BASE_URL + "/login.asp?a=ok", {
      method: "POST",
      body: formdataLogin,
    });

    if(resLogin.status !== 200) {
        console.log('Uh oh! An issue occurred when trying to login');
    }

    const sessionTokenCookie =
      resLogin.headers.get("set-cookie")?.split(";")[0] ?? "";

    const secretQuestionAndAnswer = getSecretQuestionAndAnswer();

    const formdataSecretQuestion = new FormData();

    formdataSecretQuestion.append("srpEnabled", "true");
    formdataSecretQuestion.append("upgradeVerifier", "");
    formdataSecretQuestion.append("useSrp", "false");
    formdataSecretQuestion.append("publicA", "");
    formdataSecretQuestion.append("clientEvidenceM1", "");
    formdataSecretQuestion.append("persistLogin", "checked");
    formdataSecretQuestion.append("captchaInput", "");
    formdataSecretQuestion.append("captchaType", "ARKOSE_LABS_CAPTCHA");
    formdataSecretQuestion.append(
      "csrftoken",
      "42c6d05c-07b9-41f7-9573-6a121e800814",
    );
    formdataSecretQuestion.append("question1", secretQuestionAndAnswer[0]);
    formdataSecretQuestion.append("Answer", secretQuestionAndAnswer[1]);
    const resSecretQuestion = await fetch(BASE_URL + "/login.asp?w=1", {
      method: "POST",
      headers: {
        Cookie: sessionTokenCookie,
      },
      body: formdataSecretQuestion,
    });

    console.log(`${resSecretQuestion.status} / ${counter++} / ${email} ${password}`);
  } catch (err) {
    console.log("Failed to send request", err);
  }
}, 50);
