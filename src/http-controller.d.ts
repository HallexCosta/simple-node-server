declare interface HttpControllerMethods {
  start(): void
  onListen(): void
  handlerRequest(): void
}
