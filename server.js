const express = require('express');
const app = express()
const port = 9000


const router = express.Router()

/*router.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.use('/asset', router)
app.listen(9000, () => { 
    console.log(`Example app listening on port ${port}!`)
})*/

router.get('/',(req,res) => {
    res.sendFile(__dirname + '/index2.html')
})

app.use('/', router)

app.listen(9000, () => { 
    console.log(`Example app listening on port ${port}!`)
})