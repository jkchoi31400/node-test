const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
})

// app.get('/dog', function (req, res) {
//    // res.send("<a href='https://www.google.co.kr/'> test</a>")
//    res.send({'sound': '멍멍'})
// })

// app.get('/cat', function (req, res) {
//     res.json({'sound': '야옹'})
// })
// //app.listen(3000)

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if(name=="dog"){
        res.json({'sound':'멍멍'})
    }
    else if (name=="cat"){
        res.json({'sound':'야옹'})
    }
    else {
        res.json({'sound':'몰라몰라'})
    }

})




app.get('/user/:id', function (req, res) {
    
    // const q = req.params
    // console.log(q.id)

    const qq = req.query
    console.log(qq)


    res.json({'userid': qq.name})
    
})


app.listen(port, () => {
    console.log(`waiting ${port} ` )
})