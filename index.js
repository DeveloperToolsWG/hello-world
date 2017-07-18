const app = require('express')()

app.get('/', (req, res) => {
  const greeting = process.env.GREETING;

  res.send(`${greeting || 'hello'} world!!333s33333!`);
})

app.listen(process.env.PORT || 3000)
