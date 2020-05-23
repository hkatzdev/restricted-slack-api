"use strict";

import { serve } from "https://deno.land/std@0.52.0/http/server.ts";

export const server = serve({ port: 8080 });

export const decoder = new TextDecoder();

export const jsonHeader = new Headers({
  "Content-Type": "application/json",
});

export const slackResponse = `
  {
    "response_type": "ephemeral",
    "text": "Sorry, it appears that you tried to submit restricted commands. Please remove these commands and try again."
  }
`;

export const restrictedRegex = new RegExp(
  Deno.env.get("RESTRICTED_REGEX")!,
  "i",
);
