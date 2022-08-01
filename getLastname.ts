import getRandomNumber from "./getRandomNumber.ts";

const lastnames = JSON.parse(Deno.readTextFileSync("./lastnames.json"));

const getLastname = () => {
  return lastnames[getRandomNumber(lastnames.length)];
};

export default getLastname;
