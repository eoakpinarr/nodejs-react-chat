const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "f9b1c6d7-f634-4318-9f99-f31e95780771" } }
        )
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);