import express from 'express';
import path from 'path';

const app = express()
const port = process.env.port || 5001

app.get('/Weather', (req, res) => {
  console.log(`${req.ip} is asking for weather`)
  res.send('Here is your Weather')
})

const __dirname = path.resolve();

app.get('/', express.static(path.join(__dirname,"/web")))
app.use('*', express.static(path.join(__dirname,"/web")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})