let express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("456")
})

app.listen(3000)