import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';


const app = express()
const port = 4000 

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, '../../dist')));

// Catch-all: send index.html for client-side routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
