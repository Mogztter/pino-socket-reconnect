const pino = require('pino')

let socketStream = pino.transport({
  level: "info",
  target: "pino-socket",
  options: {
    address: "localhost",
    port: "13370",
    mode: "tcp",
    reconnect: true
  }
})

socketStream.on('error', () => { /* ignore */ })
const pinoStreams = [
  {
    level: "debug",
    stream: pino.transport({
      target: "pino/file"
    })
  },
  {
    stream: socketStream
  }
]

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
}, pino.multistream(pinoStreams))

let count = 0
setInterval(function () {
  count++
  logger.info({ count }, "Keep alive!")
}, 1000)


