const express = require('express');
const app = express();
const port = 3000

app.get('/',(req,res)=>res.send("status: OK"))
app.listen(port, () => console.log(`Express server running at http:\/\/127.0.0.1:${port}`));
