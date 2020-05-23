"use strict";

import {
  server,
  decoder,
  jsonHeader,
  slackResponse,
  restrictedRegex,
} from "./deps.ts";

console.log('Booting api!');

for await (const req of server) {
  const recievedText = decoder.decode(await Deno.readAll(req.body));
  if (recievedText.search(restrictedRegex) === -1) {
    req.respond({ status: 204 });
  } else {
    console.log(recievedText);
    req.respond({ status: 422, body: slackResponse, headers: jsonHeader });
  }
}
