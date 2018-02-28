var sum = 0;

var before = 1;
var now = 2;
while (now < 4000000) {
    if (now % 2 === 0) {
        sum += now;
    }
    now += before;
    before = now - before;
}

console.log(sum);