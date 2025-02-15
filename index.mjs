import localtunnel from 'localtunnel';

// Function to start LocalTunnel
export async function startTunnel(port, subdomain) {
  const tunnel = await localtunnel({
    port,
    subdomain,
  });

  console.log(`Tunnel is running at ${tunnel.url}`);

  tunnel.on('close', () => {
    console.log('Tunnel closed, restarting...');
    startTunnel();
  });
}

// Start the tunnel
// change it to your own subdomain and local app port
startTunnel(3000, 'u3XGy6aDuRtVvb2coQA1hh');
