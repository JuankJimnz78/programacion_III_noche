const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const mime = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.txt':  'text/plain'
};

http.createServer((req, res) => {
  // Evitar rutas peligrosas
  const safePath = path.normalize(decodeURI(req.url)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(process.cwd(), safePath);
  if (filePath.endsWith(path.sep)) filePath = path.join(filePath, 'index.html');

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(port, () => {
  console.log(`Static server running at http://localhost:${port}/`);
});
