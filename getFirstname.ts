import getRandomNumber from "./getRandomNumber.ts";

const firstnames = JSON.parse(Deno.readTextFileSync("./firstnames.json"));

const getFirstname = () => {
  return firstnames[getRandomNumber(firstnames.length)];
};

export default getFirstname;
