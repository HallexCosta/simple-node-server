import { IncomingMessage, Server, ServerResponse } from 'node:http'

export interface HandleRequestParams {
  request: IncomingMessage
  response: ServerResponse
}
export interface HttpControllerProps {
  port: number
  createServer: any
}

export class HTTPController {
  public readonly PORT: number
  private readonly server: Server

  constructor({ port, createServer }: HttpControllerProps) {
    this.PORT = port
    this.server = createServer((request: IncomingMessage, response: ServerResponse) => this.handlerRequest({request, response}))
  }

  static initalize({ port, createServer }: HttpControllerProps) {
    const httpInstance = new HTTPController({ port, createServer})

    httpInstance.init()
  }

  private init() {
    this.start()
  }

  public handlerRequest({ request, response }: HandleRequestParams) {
    const result = { message: "I'm alive! Typescript Build", code: 200 }

    return response
      .writeHead(200, {
        'Content-Type': 'application/json'
      })
      .end(JSON.stringify(result))

  }
  public start() {
    this.server.listen(this.PORT, this.onListen.bind(this))
  }
  public onListen() {
    console.log('Listening server on port', this.PORT)
  }
}

