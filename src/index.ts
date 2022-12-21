import http from 'http'
import { HTTPController } from './core/http-controller'

HTTPController.initalize({
  createServer: http.createServer.bind(http),
  port: 3333
})

