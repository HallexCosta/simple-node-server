import http from 'http'
import { HTTPController } from './core/http-controller.mjs'

HTTPController.initalize({
  http,
  port: 3333
})

