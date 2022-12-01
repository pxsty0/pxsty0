const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3000 });
  console.log(`Tünel Başarıyla Oluşturuldu : `+tunnel.url)

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();
