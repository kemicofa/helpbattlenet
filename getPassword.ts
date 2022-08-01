import getRandomNumber from "./getRandomNumber.ts";

const passwords = Deno.readTextFileSync("./passwords.txt").split("\n").map(
  (password) => password.trim(),
);

const getPassword = () => {
  return passwords[getRandomNumber(passwords.length)];
};

export default getPassword;
