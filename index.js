const express = require('express')
const app = express()
const port = 5092

app.get('/', (req, res) =>
  res.send('Greetings from millizen & JingJing...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
