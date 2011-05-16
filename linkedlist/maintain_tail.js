var Node = function(val) {
    this.val = val;
    this.next = null;
};

var List = function() {

    var head = null, tail = null;

    this.__defineGetter__('head', function() { return head; });
    this.__defineGetter__('tail', function() { return tail; });

    this.prepend = function(node) {
        if (!tail) {
            tail = node;
        }
        node.next = head;
        head = node;
    };

    this.append = function(node) {
        if (!head) {
            head = node;
        }
        if (tail) {
            tail.next = node;
        }
        tail = node;
    };

    this.remove = function(node) {
        if (!node) {
            return false;
        }
        if (node === head) {
            head = node.next;
            if (node === tail) {
                tail = head;
            }
            return true;
        }
        var cur = head;
        while (cur) {
            if (cur.next === node) {
                cur.next = node.next;
                if (tail === node) {
                    tail = cur;
                }
                return true;
            }
            cur = cur.next;
        }
        return false;
    };

    this.insertAfter = function(node, val) {
        var toInsert = new Node(val);
        if (node === null) {
            this.prepend(toInsert);
            return true;
        }
        var cur = head;
        while (cur) {
            if (cur === node) {
                toInsert.next = node.next;
                node.next = toInsert;
                if (tail === node) {
                    tail = toInsert;
                }
                return true;
            }
            cur = cur.next;
        }
        return false;
    };
};

assert = require('assert');

var list, n1, n2, n3;

list = new List;
list.prepend(new Node(1));
assert.equal(list.head.val, 1);
assert.equal(list.tail.val, 1);
list.prepend(new Node(2));
assert.equal(list.head.val, 2);
assert.equal(list.tail.val, 1);
list.prepend(new Node(3));
assert.equal(list.head.val, 3);
assert.equal(list.tail.val, 1);

list = new List;
list.append(new Node(1));
assert.equal(list.head.val, 1);
assert.equal(list.tail.val, 1);
list.append(new Node(2));
assert.equal(list.head.val, 1);
assert.equal(list.tail.val, 2);
list.append(new Node(3));
assert.equal(list.head.val, 1);
assert.equal(list.tail.val, 3);

/*
 * remove tests
 */

list = new List;
assert.equal(list.remove(), false);
assert.equal(list.head, null);
assert.equal(list.tail, null);

list = new List;
assert.equal(list.remove(null), false);
assert.equal(list.head, null);
assert.equal(list.tail, null);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.remove(new Node), false);
assert.equal(list.head, n1);
assert.equal(list.tail, n3);

list = new List;
assert.equal(list.head, null);
assert.equal(list.tail, null);
n1 = new Node(1);
list.append(n1);
assert.equal(list.remove(n1), true);
assert.equal(list.head, null);
assert.equal(list.tail, null);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
list.append(n1);
list.append(n2);
assert.equal(list.remove(n2), true);
assert.equal(list.head, n1);
assert.equal(list.tail, n1);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.remove(n3), true);
assert.equal(list.head, n1);
assert.equal(list.tail, n2);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
list.append(n1);
list.append(n2);
assert.equal(list.remove(n1), true);
assert.equal(list.head, n2);
assert.equal(list.tail, n2);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.remove(n1), true);
assert.equal(list.head, n2);
assert.equal(list.tail, n3);

list = new List;
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.remove(n2), true);
assert.equal(list.head, n1);
assert.equal(list.tail, n3);

/*
 * insertAfter tests
 */

list = new List
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.insertAfter(null, 4), true);
assert.equal(list.head.val, 4);
assert.equal(list.tail, n3);

list = new List
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.insertAfter(n2, 4), true);
assert.equal(list.head, n1);
assert.equal(list.tail, n3);

list = new List
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.insertAfter(n1, 4), true);
assert.equal(list.head, n1);
assert.equal(list.tail, n3);

list = new List
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.insertAfter(n3, 4), true);
assert.equal(list.head, n1);
assert.equal(list.tail.val, 4);

list = new List
n1 = new Node(1);
n2 = new Node(2);
n3 = new Node(3);
list.append(n1);
list.append(n2);
list.append(n3);
assert.equal(list.insertAfter(new Node, 4), false);
assert.equal(list.head, n1);
assert.equal(list.tail, n3);
