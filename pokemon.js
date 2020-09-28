const express = require("express")

const app = express()
const port = 3000
const fetch = require("node-fetch")



// team builder / some number / names , types , image aka 6 = 6 differ pokemon with names types nd images
app.get(`/teambuilder/:size`, (req, res) => {
    
    let size = req.params.size

    let i = 0
    let data = []
    while (i < size){
        let apinum = Math.round(Math.random() * 386)
        data.push(fetch(`https://pokeapi.co/api/v2/pokemon/${apinum}`));
        i++   
        
} 
Promise.all(data).then(res.send)
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

