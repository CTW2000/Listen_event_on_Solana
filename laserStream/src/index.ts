import { subscribe, CommitmentLevel, LaserstreamConfig, SubscribeRequest } from 'helius-laserstream'

async function main() {
  const subscriptionRequest: SubscribeRequest = {
    transactions: {
      client: {
        accountInclude: ['TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'],
        accountExclude: [],
        accountRequired: [],
        vote: false,
        failed: false
      }
    },
    commitment: CommitmentLevel.CONFIRMED,
    accounts: {},
    slots: {},
    transactionsStatus: {},
    blocks: {},
    blocksMeta: {},
    entry: {},
    accountsDataSlice: [],
    // Optionally, you can replay missed data by specifying a fromSlot:
    // fromSlot: '224339000'
    // Note: Currently, you can only replay data from up to 3000 slots in the past.
  };

// Replace the values below with your actual LaserStream API key and endpoint
const config: LaserstreamConfig = {
  apiKey: '323bbf75-3d84-4395-8ba4-2a503c4c4909', // Replace with your key from https://dashboard.helius.dev/
  endpoint: 'https://laserstream-devnet-ewr.helius-rpc.com', // Choose your closest region
}

  await subscribe(config, subscriptionRequest, async (data) => {
    
    console.log(data);

  }, async (error) => {
    console.error(error);
  });
}

main().catch(console.error);