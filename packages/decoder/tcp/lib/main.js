export default class TCP {
  activate() {
    dripcap.session.on('created', (session) => {
      session.addDecoder(`${__dirname}/tcp`)
    })
  }

  deactivate() {}
}
