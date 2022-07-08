const net = require('net')

const socket = net.createServer((connection) => {
  connection.on('data', (data) => {
    console.log({data})
    connection.end()
  })
})

socket.listen(13370 , '127.0.0.1', () => {
  console.log({
    action: 'started',
    address: socket.address().address,
    port: socket.address().port
  })
})
