const ex = require('express')
const app = ex()
const port = 3000

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(port, () => {
    console.log(`서버가 실행된다. ${port}`)
})