const fastify = require('fastify')({
  logger: true,
})

fastify.get('/fatal', { logLevel: "fatal" }, function (_request, reply) {
  reply.send("Log fatal here")
})

fastify.get('/error', { logLevel: "error" }, function (_request, reply) {
  reply.send("Log error here")
})

fastify.get('/warn', { logLevel: "warn" }, function (request, reply) {
  reply.send("Log warn here")
})

fastify.get('/', function (_request, reply) {
  reply.send("No logLevel specified here")
})

fastify.get('/debug', { logLevel: "debug" }, function (_request, reply) {
  reply.send("Log debug here")
})

fastify.get('/trace', { logLevel: "trace" }, function (_request, reply) {
  reply.send("Log trace here")
})

fastify.listen(3000, function (err, address) {
  console.log(`server listening on ${address}`)
})