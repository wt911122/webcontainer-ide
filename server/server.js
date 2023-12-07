const express = require('express');
const app = express();

// Setting up the public directory
app.use(express.static('public', {
  setHeaders: (res) => {
    res.set('Cross-Origin-Opener-Policy', 'same-origin');
    res.set('Cross-Origin-Embedder-Policy', 'require-corp');
  }
}));

app.listen(5173, () => console.log('listening on port 3000!'));