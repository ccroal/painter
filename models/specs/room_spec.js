const assert = require('assert');
const Room = require('../room.js');

let room;

describe('Room', function(){

  beforeEach(function(){
    room = new Room(100, 'not painted')
  })

  it('should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 100)
  });

  it('should start not painted', function(){
    const actual = room.paintStatus;
    assert.strictEqual(actual, 'not painted')
  });

  // it('should be painted', function(){
  //   room.paintRoom()
  //   const acutal = room.paintStatus;
  //   assert.strictEqual(actual, 'painted')
  // });
})
