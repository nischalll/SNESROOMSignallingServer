const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
// Default to 9000 for local testing, or use hosting provider's PORT
const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log(`[NESROOM] Custom PeerServer running on port ${PORT}`);
});

// Initialize PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  // You can add rate limiting or authentication here in the future if needed!
});

// Serve the PeerJS endpoint
app.use('/', peerServer);

// Simple health check endpoint for your hosting provider
app.get('/health', (req, res) => res.send('OK'));
