'use strict'

/**
 * Encodes the given money value into the provided buffer at the given offset.
 * If no buffer is provided one is created for you.
 * Encoding preserves exactly two decimal places of the value.
 *
 * @name encode
 * @function
 * @param {number} val the value to encode
 * @param {Buffer=} buf buffer into which to save the result of the encoding
 * @param {number=} offset offset at which to save encoded result into the buffer
 * @return {Buffer} the buffer that was passed in
 */
exports.encode = function moneyEncode(val, buf, offset) {
  if (buf == null) buf = new Buffer(exports.encode.bytes)
  offset = offset || 0
  buf.writeUInt32LE((val * 100) | 0, offset)
  return buf
}

/**
 * Decodes a money value from the given buffer starting at the given offset.
 *
 * @name decode
 * @function
 * @param {Buffer} buf buffer that contains the value to be decoded
 * @param {number} offset offset at which to start reading the encoded value
 * @return {number} the money value which as two decimal places
 */
exports.decode = function moneyDecode(buf, offset) {
  offset = offset || 0
  return buf.readUInt32LE(offset) / 100
}

exports.encodingLength = function encodingLength() { return 4 }
exports.encode.bytes = 4
exports.decode.bytes = 4
