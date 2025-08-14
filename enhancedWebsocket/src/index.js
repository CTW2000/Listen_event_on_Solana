const WebSocket = require('ws');
const config = require('../config');

const HELIUS_API_KEY = config.HELIUS_API_KEY;
const HELIUS_RPC_URL = config.HELIUS_RPC_URL;

// Function to send a request to the WebSocket server
function sendRequest(ws) {
    const request = {
        jsonrpc: "2.0",
        id: 420,
        method: "transactionSubscribe",
        params: [{
                failed: false,
                accountInclude: ["675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"]
            },
            {
                commitment: "processed",
                encoding: "base64",
                transactionDetails: "full",
                showRewards: true,
                maxSupportedTransactionVersion: 0
            }
        ]
    };
    ws.send(JSON.stringify(request));
}

function websocketHandler() {
    // Create a WebSocket connection
    let ws = new WebSocket(`wss://atlas-mainnet.helius-rpc.com?api-key=${HELIUS_API_KEY}`);

    // Define WebSocket event handlers

    ws.on('open', function open() {
        console.log('WebSocket is open');
        sendRequest(ws); // Send a request once the WebSocket is open
    });

    ws.on('message', function incoming(data) {
        const messageStr = data.toString('utf8');
        console.log('Received:', messageStr);
    });

    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });

    ws.on('close', function close() {
        console.log('WebSocket is closed');
        // connection closed, discard old websocket and create a new one in 5s
        ws = null
        setTimeout(startWebsocket, 5000)
    });
}

websocketHandler();