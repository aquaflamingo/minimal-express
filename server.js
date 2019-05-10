require('express')()
    .get('/', (req, res) => res.status(200).send('Howdie Ho!'))
    .listen(3000, function() {
        console.log(`Express server running at http:\/\/127.0.0.1:${this.address().port}`)
    })
