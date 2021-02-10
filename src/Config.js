/* Config.js */
import OneGraphAuth from "onegraph-auth";

const APP_ID = "4c1c8469-89fa-4995-ab5a-b22db4587381";

export const auth = new OneGraphAuth({
  appId: APP_ID,
  oneGraphOrigin: "https://serve.onegraph.io/",
});
