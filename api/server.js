const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('../users/users-router')
const postsRouter = require('../posts/post-router')


const server = express()



server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/users', userRouter)
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.json({ api: 'running' })
})

module.exports = server