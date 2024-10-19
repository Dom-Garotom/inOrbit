import Fastify from "fastify"

const fastify = Fastify()

fastify.get("/", (req, res) => {
    res.status(200).send({ mensage: "deu bom" })
})

fastify.listen({ port: 3000 })