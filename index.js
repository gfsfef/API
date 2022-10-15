const { application } = require('express');

const express = require('express');
const app = express();
const PORT = 8080

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`porta definida para: http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.send("Hello from Home Page")
})

app.post('/teste/:id', (req, res) => {
    const { id } = req.params
    const { palavra } = req.body

    res.send({
        palavra: palavra,
        id: id
    })
    
})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'camisa',
        size: 'largo'
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params
    const { logo } = req.body

    if(!logo){
        res.status(404).send({ message: 'Eh preciso um logo!'})
    }

    res.send({ 
        tshirt: `Camiseta com o nome ${logo} e id ${id}`
    })
})