const fs = require("fs");
let input = fs.readFileSync(__dirname + "\\input.txt").toString();
// let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split("\n");

var first_line = input[0].split(" ").map((item) => +item);

console.log(first_line);
var n = +first_line[0];
var m = +first_line[1];
var order = input[1].split(" ").map((item) => +item);
//var order = [1,2, 3]

var queue = [];

for (var i = 1; i <= n; i++) {
  queue.push(i);
}

var i = 0;
var target = order[i++];
var cnt = 0;

while (i <= order.length) {
  var cur = queue[0];

  if (cur == target) {
    queue.shift();
    target = order[i++];
    continue;
  }

  var j;
  for (j = 1; j < queue.length; j++) {
    if (queue[j] == target) break;
  }

  var cha = queue.length / 2 - j;
  if (cha > 0) {
    turn_left(queue);
    cnt++;
  } else {
    turn_right(queue);
    cnt++;
  }
}
console.log(cnt);

function turn_right(queue) {
  var last = queue.pop();
  queue.unshift(last);
}

function turn_left(queue) {
  var first = queue.shift();
  queue.push(first);
}
