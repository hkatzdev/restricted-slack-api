import {
  encode,
} from "./deps.ts";

export const jsonHeader = new Headers({
  "Content-Type": "application/json",
});

export const slackResponse = encode(
  `{
  	"response_type": "ephemeral",
  	"text": "Sorry, it appears you tried to enter restricted text. <@UM1L1C38X> is getting angry... Please try again!."
  }`,
);

export const slackHook = Deno.env.get("DENO_ALERT_HOOK");

export const restrictedRegex = new RegExp(
  Deno.env.get("RESTRICTED_REGEX") || ".",
  "i",
);

export const replacementRegex = new RegExp(
  Deno.env.get("REPLACEMENT_REGEX") || ".",
  "g",
);

export const safeString = Deno.env.get("SAFE_STRING") || "";
