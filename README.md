# [Go Go Power Rangers API](https://i.imgur.com/pZMohi6.png)

There is a new bot policy which is to ~~prove deno is superior to node~~ send user requests to an API. Instructions are below, feel free to dm me or luke for help.

1. When you receive any sort of user input, send the whole payload over to slack.hosted.hackclub.com. Doesn't matter what headers you send or protocol or even method as long as it has a body.

2. If you get a 204 response: great, carry on with whatever your bot normally does.

3. If you get a 422 response: oof. If it's not a slash command, just ignore whatever the user told you to do. This usually means just returning nothing.

4. If you get a 422 and its a slash command, you gotta send something back to slack before returning. Luckily, our API will send you some JSON that you can directly return to slack, and you can exit the function.

Once you do this, [log your bot into the airtable here](https://airtable.com/shrjcu0ORYzTmCmhi)
