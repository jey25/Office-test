import express from "express";

const PORT = 4000;
const app = express();

const handlehome = (req, res) => {
    return res.end()
}

const handleLogin = (req, res) => {
    return res.send("Login Here")
}

app.get("/", handlehome);
app.get("/login", handleLogin)

const handleListening = () => console.log(`Server ${PORT}`);

app.listen(PORT, handleListening);

