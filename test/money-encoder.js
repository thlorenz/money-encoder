'use strict'

var test = require('tape')
var money = require('../')
var encode = money.encode
var decode = money.decode

test('\nencode/decode roundtrips', function(t) {
  [ 0, 1, 2, 5, 10, 57, 1E2, 1E3, 567890,
    0.01, 0.1, 1.01, 1.1, 2.1, 100.07, 545.23, 457382.22,
    0.500000000001, 0.10000000034 ]
  .forEach(check)

  function check(n) {
    var offset = 0
    var buf = new Buffer(money.encodingLength())
    var encoded = encode(n, buf, offset)
    var decoded = decode(encoded, offset)
    t.equal(
        decoded
      , Math.round(n * 100) / 100
      , offset + ' offset encode/decode ' + n + ' succeeds')

    offset = 10
    buf = new Buffer(money.encodingLength() + offset * 2)
    encoded = encode(n, buf, offset)
    decoded = decode(encoded, offset)
    t.equal(
        decoded
      , Math.round(n * 100) / 100
      , offset + ' offset encode/decode ' + n + ' succeeds')

    encoded = encode(n)
    decoded = decode(encoded)
    t.equal(
        decoded
      , Math.round(n * 100) / 100
      , 'not passing buffer or offset encode/decode ' + n + ' succeeds')
  }
  t.end()
})
