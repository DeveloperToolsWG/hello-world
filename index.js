const app = require('express')()

app.get('/', (req, res) => {
  const greeting = process.env.GREETING;

  res.send(`${greeting || 'hello'} world!!csbb\dcaa! and this`);
})

app.listen(process.env.PORT || 3000)
