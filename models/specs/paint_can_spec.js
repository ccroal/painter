const assert = require('assert');
const PaintCan = require('../paint_can.js')

let paintCan;

describe('Paint Can', function(){
  beforeEach(function(){
    paintCan = new PaintCan(10)
  })

  it('should have paint', function(){
    const actual = paintCan.volume;
    assert.strictEqual(actual, 10)
  });
});
