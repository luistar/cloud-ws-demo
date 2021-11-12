const express = require('express')
const app = express()
const port = 3000

app.get('/greet', (req, res) => {
  res.send('Hello World!')
})

app.get('/fortune', (req, res) => {
  var fortune;
  min = 1;
  max = 4;
  random = Math.floor(Math.random() * (max - min) + min);
  switch(random){
      case 1:
          fortune = "Great fortune! :)"
          break;
      case 2:
          fortune = "Meh, average fortune today :/"
          break;
      case 3:
          fortune = "Awful fortune today! Be careful! :("
          break;
  }
  res.send(fortune)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})