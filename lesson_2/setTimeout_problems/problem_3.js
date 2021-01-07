function q() { console.log('q') }
function d() { console.log('d') }
function n() { console.log('n') }
function z() { console.log('z') }
function s() { console.log('s') }
function f() { console.log('f') }
function g() { console.log('g') }

setTimeout(() => {      // 1
  setTimeout(() => {    // 6
    q();                // 12
  }, 15);

  d();                  // 7

  setTimeout(() => {    // 8
    n();                // 10
  }, 5);

  z();                  // 9
}, 10);

setTimeout(() => {      // 2
  s();                  // 11
}, 20);

setTimeout(() => {      // 3
  f();                  // 4
});

g();                    // 5


// g, f, d, z, n, s, q
/*
g comes before f because while the function can execute immediately 
already, it isn't until the next event cycle that it will execute
*/