import { secrets } from "./.secrets.js";

const snoowrap = require("snoowrap");
const ua = navigator.userAgent;

const otherRequester = new snoowrap({
  userAgent: ua,
  clientId: secrets.clientId,
  clientSecret: secrets.clientSecret,
  username: secrets.username,
  password: secrets.password,
});

export default otherRequester;
