export class HTTPController {
  PORT = null
  #server = null

  constructor({ port, http }) {
    this.PORT = port
    this.#server = http.createServer(this.handlerRequest)
  }

  static initalize({ port, http }) {
    const httpInstance = new HTTPController({ port, http })

    httpInstance.#_init()
  }

  #_init() {
    this.start()
  }

  handlerRequest(request, response) {
    const result = { message: "I'm alive!", code: 200 }

    return response
      .writeHead(200, {
        'Content-Type': 'application/json'
      })
      .end(JSON.stringify(result))

  }
  start() {
    this.#server.listen(this.PORT, this.onListen.bind(this))
  }
  onListen() {
    console.log('Listening server on port', this.PORT)
  }
}

