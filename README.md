# Listen_event_on_Solana

## Webhook_cloudFlare

This program listens for events using the **Helius webhook** and **Cloudflare**.  
For details on how to set it up, you can reference this article:  
[How to Monitor a Raydium Liquidity Pool](https://www.helius.dev/blog/how-to-monitor-a-raydium-liquidity-pool#set-up-a-cloudflare-worker)


How to run it:

1. Navigate to the project directory:

`cd webhook_cloudFlare/helius-webhook`


2. Custome your own config in config.js ,you can reference the [config-example.js](/webhook_cloudFlare/config-example.js)

> ⚠️ **Important**: If you first run this DEMO,write `HELIUS_RPC_URL` directly in the `worker.js` file. Once it works, you can switch it back to use the config file.


Make sure both the **cloudFare worker** and **Hlius webhook** are properly set up.
You should be able to view the log output on the Cloudflare dashboard.

## EnhancedWebsocket

This is a listen function use the geyser-enhanced transactionSubscribe method.

It also references the article mentioned above.

> ⚠️ **Important**: To run this, you need to customize the config and have a Helius Business or Professional plan！


Finally,  please run :  

 `npm install && npm start  ` 