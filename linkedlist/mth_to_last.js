var Node = function(val) {
    this.val = val;
    this.next = null;
};

var List = function() {

    var head = null;

    this.__defineGetter__('head', function() { return head; });

    this.prepend = function(node) {
        node.next = head;
        head = node;
    };

    this.mth_to_last = function(m) {
        var cur = head,
            mth = null;
        while (cur) {
            if (m-- == 0) {
                mth = head;
            }
            cur = cur.next;
            if (mth && cur) {
                mth = mth.next;
            }
        }
        return mth;
    };
};

assert = require('assert');

var list;

list = new List;
list.prepend(new Node(0));
list.prepend(new Node(9));
list.prepend(new Node(8));
list.prepend(new Node(7));
list.prepend(new Node(6));
list.prepend(new Node(5));
list.prepend(new Node(4));
list.prepend(new Node(3));
list.prepend(new Node(2));
list.prepend(new Node(1));
assert.equal(list.mth_to_last(0).val, 0);
assert.equal(list.mth_to_last(1).val, 9);
assert.equal(list.mth_to_last(2).val, 8);
assert.equal(list.mth_to_last(3).val, 7);
assert.equal(list.mth_to_last(4).val, 6);
assert.equal(list.mth_to_last(5).val, 5);
assert.equal(list.mth_to_last(6).val, 4);
assert.equal(list.mth_to_last(7).val, 3);
assert.equal(list.mth_to_last(8).val, 2);
assert.equal(list.mth_to_last(9).val, 1);
assert.equal(list.mth_to_last(10), null);
assert.equal(list.mth_to_last(11), null);
assert.equal(list.mth_to_last(12), null);

list = new List;
assert.equal(list.mth_to_last(0), null);
assert.equal(list.mth_to_last(1), null);
