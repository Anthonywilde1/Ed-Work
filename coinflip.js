const express = require("express")

const app = express()
const port = 3000


app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/coinflip", (req, res) => { 
    let num = Math.round(Math.random())
    if (num == 1) {
        res.send("heads")
    } else {
        res.send("false")
    }

})

app.get(`/coinflip/:number`, (req, res) => {
    let number = req.params.number
    let i = 0
    let flip = {
        heads: 0,
        tails: 0,
    }
    while (i < number){
    let num = Math.round(Math.random())
    if (num == 1) {
        flip.heads += 1
        i++
    } else {
        flip.tails += 1
        i++
    }}
    res.send(flip)
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))