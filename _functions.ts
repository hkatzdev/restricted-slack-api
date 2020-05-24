import {
  serve,
} from "./deps.ts";

import {
  slackHook,
  jsonHeader,
} from "./_constants.ts";

export const server = serve({ port: 8080 });

export const decoder = new TextDecoder();

const _slackHook = slackHook;

export const logToSlack = _slackHook
  ? (offendingText: string) =>
    fetch(_slackHook, {
      headers: jsonHeader,
      method: "POST",
      body: offendingText,
    })
  : () => {};
