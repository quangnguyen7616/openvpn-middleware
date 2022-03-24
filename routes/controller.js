const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;

router.use(express.json({ limit: "5000mb", extended: true }));

router.get("/", async (req, res) => {
    exec('pm2 restart middleware;');
    res.send("OK");
});
module.exports = router;