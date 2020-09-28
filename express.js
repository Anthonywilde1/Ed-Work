const express = require("express")

const app = express()
const port = 3000


app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/greeter", (req, res) => {
    res.send("Hello World")
})

app.get(`/greeter/:placeholder`, (req, res) => {
    let name = req.params.placeholder
    res.send(`Hello ${name}`)
}) 
                    



app.listen(port, () => console.log(`Example app listening on port ${port}!`))