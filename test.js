var inside = require('./')
var test = require('tape').test

var triangle = [[350,300], [450,450], [350, 450]]
var reversed = triangle.slice().reverse()

test('test whether point is inside triangle', function(t) {
    function run(tri) {
        t.equal(inside([336, 464], tri), false, 'outside')
        t.equal(inside([396, 455], tri), false, 'edge0')
        t.equal(inside([346, 408], tri), false, 'edge1')
        t.equal(inside([386, 414], tri), true, 'enclosed')
        t.equal(inside([300, 405], tri), false, 'outside')
    }

    run(triangle)
    run(reversed)
    t.end()
})