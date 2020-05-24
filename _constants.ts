import {
  encode,
} from "./deps.ts";

export const jsonHeader = new Headers({
  "Content-Type": "application/json",
});

export const slackResponse = encode(
  `{
  	"response_type": "ephemeral",
  	"text": "Sorry, it appears that you tried to submit restricted commands. Please remove these commands and try again."
  }`,
);

export const slackHook = Deno.env.get("DENO_ALERT_HOOK");

export const restrictedRegex = new RegExp(
  Deno.env.get("RESTRICTED_REGEX") || ".",
  "i",
);

export const replacementRegex = new RegExp(
  Deno.env.get("REPLACEMENT_REGEX") || ".",
  "gi",
);

export const safeString = Deno.env.get("SAFE_STRING") || "";
