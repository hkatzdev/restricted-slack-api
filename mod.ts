import {
  jsonHeader,
  safeString,
  slackResponse,
  restrictedRegex,
  replacementRegex,
} from "./_constants.ts";

import {
  server,
  logToSlack,
} from "./_functions.ts";

import {
  decode,
} from "./deps.ts";

console.log("Booting api!");

for await (const req of server) {
  const recievedText = decode(await Deno.readAll(req.body));
  if (recievedText.search(restrictedRegex) === -1) {
    req.respond({ status: 204 });
  } else {
    logToSlack(
      `{"text": ${
        JSON.stringify(recievedText.replace(replacementRegex, safeString))
      }}`,
    );
    req.respond({ status: 422, body: slackResponse, headers: jsonHeader });
  }
}
