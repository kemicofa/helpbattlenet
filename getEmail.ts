import getFirstname from "./getFirstname.ts";
import getLastname from "./getLastname.ts";
import getRandomNumber from "./getRandomNumber.ts";

const domains = JSON.parse(Deno.readTextFileSync("./domains.json"));

const getNumberSuffix = () => {
  const favoriteNumber = "" + getRandomNumber(10000);
  const keep = getRandomNumber(favoriteNumber.length);
  return favoriteNumber.slice(keep);
};

const shouldIncludeDot = () => {
  return Boolean(getRandomNumber(2));
};

const shouldIncludeSuffix = () => {
  return Boolean(getRandomNumber(2));
};

const shouldOnlyHaveLastname = () => {
  return Boolean(getRandomNumber(2));
};

const getEmail = () => {
  const firstname = getFirstname();
  const lastname = getLastname();
  const domain = domains[getRandomNumber(domains.length)];
  const numberSuffix = getNumberSuffix();
  const hasDot = shouldIncludeDot();
  const onlyLastname = !hasDot && shouldOnlyHaveLastname();
  return `${onlyLastname ? "" : firstname}${hasDot ? "." : ""}${lastname}${
    shouldIncludeSuffix() ? numberSuffix : ""
  }@${domain}`.toLowerCase();
};

export default getEmail;
