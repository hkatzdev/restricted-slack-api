import {
  serve,
} from "./deps.ts";

import {
  slackHook,
  jsonHeader,
  safeString,
  replacementRegex,
} from "./_constants.ts";

export const server = serve({
  port: 8080,
});

const _slackHook = slackHook;

export const logToSlack = _slackHook
  ? async (offendingText: string) =>
    fetch(_slackHook, {
      headers: jsonHeader,
      method: "POST",
      body: `{"text": ${
        JSON.stringify(offendingText.replace(replacementRegex, safeString))
      }}`,
    })
  : () => {};
