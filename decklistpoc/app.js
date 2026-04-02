
import express from 'express.js';
const app = express()
const port = 4000 

app.use(express.static(path.join(__dirname, '../../dist')));

// Catch-all: send index.html for client-side routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
