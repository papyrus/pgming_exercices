var Stack = function() {
    var Node = function(val) {
        this.val = val;
        this.next = null;
    };

    var head = null;

    this.push = function(val) {
        var node = new Node(val);
        node.next = head;
        head = node;
    };

    this.pop = function() {
        if (!head) {
            return;
        }
        var val = head.val;
        head = head.next;
        return val;
    };

    this.traverse = function(fn) {
        var cur = head;
        while (cur) {
            fn(cur.val);
            cur = cur.next;
        }
    };

    this.empty = function(fn) {
        while (head) {
            fn(head.val);
            head = head.next;
        }
    };
};

assert = require('assert');

var log;
var visitor = function(val) {
    log.push(val);
};

var stack = new Stack;
assert.equal(stack.pop(), undefined);

stack.push(1);
stack.push({foo: 'bar'});

log = [];
stack.traverse(visitor);
assert.deepEqual(log, [{foo: 'bar'}, 1]);

assert.deepEqual(stack.pop(), {foo: 'bar'});
assert.equal(stack.pop(), 1);

stack.push(1);
stack.push({foo: 'bar'});

log = [];
stack.empty(visitor);
assert.deepEqual(log, [{foo: 'bar'}, 1]);
assert.equal(stack.pop(), undefined);
