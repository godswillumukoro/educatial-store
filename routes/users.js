const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('All Users')
})

router.get('/new', (req, res) => {
    res.send('Create New User')
})

module.exports = router