# money-encoder [![build status](https://secure.travis-ci.org/thlorenz/money-encoder.png)](http://travis-ci.org/thlorenz/money-encoder)

Money encoder/decoder for [protocol buffers](https://developers.google.com/protocol-buffers/)

![money](assets/money.png)

Example using [mafintosh/protocoll-buffers](https://github.com/mafintosh/protocol-buffers)

```proto
// traveller.proto
syntax = "proto2";

/* 
 * money isn't a real protobuf type, but protocol-buffers
 * knows how to encode/decode it since we pass it the money-encoder
 */

message wallet {
  optional money dollars = 0;
  optional money pesos = 1;
}

message traveller {
  required wallet wallet;
}
```

```js
var protobuf = require('protocol-buffers')
var fs = require('fs')
var money = require('wallet-encoder')
var proto = fs.readFileSync(__dirname + '/wallet.proto')

// initialize protobuf and teach it how to encode/decode money
var messages = protobuf(proto, { encodings: { money: money } })

var traveller = {
  wallet: {
      dollars: 20.45
    , pesos: 235.67
  }
}

var buf = messages.entry.encode(traveller)
console.log(buf)

var w = messages.entry.decode(buf)
console.log(w)
```

## Output

```
<Buffer 02 0a 00 fd 07 00 00 00 10 5c 00 00>
{ wallet: { dollars: 235.68, pesos: 235.67 } }
```

## Installation

    npm install money-encoder

## API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="decode"><span class="type-signature"></span>decode<span class="signature">(buf, offset)</span><span class="type-signature"> &rarr; {number}</span></h4>
</dt>
<dd>
<div class="description">
<p>Decodes a money value from the given buffer starting at the given offset.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>buf</code></td>
<td class="type">
<span class="param-type">Buffer</span>
</td>
<td class="description last"><p>buffer that contains the value to be decoded</p></td>
</tr>
<tr>
<td class="name"><code>offset</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="description last"><p>offset at which to start reading the encoded value</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/money-encoder/blob/master/money-encoder.js">money-encoder.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/money-encoder/blob/master/money-encoder.js#L22">lineno 22</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the money value which as two decimal places</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">number</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="encode"><span class="type-signature"></span>encode<span class="signature">(val, <span class="optional">buf</span>, <span class="optional">offset</span>)</span><span class="type-signature"> &rarr; {Buffer}</span></h4>
</dt>
<dd>
<div class="description">
<p>Encodes the given money value into the provided buffer at the given offset.
If no buffer is provided one is created for you.
Encoding preserves exactly two decimal places of the value.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>val</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>the value to encode</p></td>
</tr>
<tr>
<td class="name"><code>buf</code></td>
<td class="type">
<span class="param-type">Buffer</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>buffer into which to save the result of the encoding</p></td>
</tr>
<tr>
<td class="name"><code>offset</code></td>
<td class="type">
<span class="param-type">number</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>offset at which to save encoded result into the buffer</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/money-encoder/blob/master/money-encoder.js">money-encoder.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/money-encoder/blob/master/money-encoder.js#L3">lineno 3</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the buffer that was passed in</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Buffer</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
