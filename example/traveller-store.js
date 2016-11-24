'use strict'

var protobuf = require('protocol-buffers')
var fs = require('fs')
var money = require('../')
var proto = fs.readFileSync(__dirname + '/traveller.proto')

// initialize protobuf and teach it how to encode/decode money
var messages = protobuf(proto, { encodings: { money: money } })

var traveller = {
  wallet: {
      dollars: 20.45
    , pesos: 235.67
  }
}

var buf = messages.traveller.encode(traveller)
console.log(buf)

var t = messages.traveller.decode(buf)
console.log(t)
