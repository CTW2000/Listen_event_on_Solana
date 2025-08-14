# Listen_event_on_Solana

1.Wbhook_cloudFlare

This is a listen programm use Helius webhook and CouldFalre,to know the build progress of it,you can reference this article:https://www.helius.dev/blog/how-to-monitor-a-raydium-liquidity-pool#set-up-a-cloudflare-worker.


How to run it:
First,turn into the directory.

cd webhook_cloudFlare/helius-webhook

Then, custome your own config in config.js,you can reference the config-example.js


Important: If you first run this DEMO,write HELIUS_RPC_URL directly in the worker.js file,and then you can change it back to the config.

Make sure the cloudFare worker and Hlius webhook have been estbliash.And you can see the log info on CloudFlare website.

2.enhancedWebsocket

This is a listen function use the geyser-enhanced transactionSubscribe method.

It is alse reference the article above.

To run it ,you need custome the config too and a Helius Business or Professional plans.

Finally,  please run  :  
 npm install && npm start   