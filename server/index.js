const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) =>{
    console.log("Got api call");
    res.json( {message: "Hello from server!"} );
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})