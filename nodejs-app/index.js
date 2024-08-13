const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // HTML without inline CSS
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>akshay.node.app</title>
    </head>
    <body>
      <h1>Everything works!!, hello from argocd !! </h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
