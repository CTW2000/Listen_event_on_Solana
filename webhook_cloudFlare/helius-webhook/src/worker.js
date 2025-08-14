const config = require('../config');

const HELIUS_API_KEY = config.HELIUS_API_KEY;
const HELIUS_RPC_URL = config.HELIUS_RPC_URL;

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    if (request.method === 'POST') {
        const requestBody = await request.json();
        console.log(requestBody[0].description);

        return new Response('Logged POST request body.', { status: 200 });
    } else {
        return new Response('Method not allowed.', { status: 405 });
    }
}