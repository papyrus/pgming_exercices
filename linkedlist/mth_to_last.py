class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None

class List(object):
    def __init__(self):
        self._head = None

    @property
    def head(self):
        return self._head

    def prepend(self, node):
        node.next = self._head
        self._head = node

    def mth_to_last(self, m):
        cur = self._head
        mth = None
        while cur:
            if m == 0:
                mth = self._head
            m = m - 1
            cur = cur.next
            if mth and cur:
                mth = mth.next
        return mth

if __name__ == '__main__':

    list = List()
    list.prepend(Node(0));
    list.prepend(Node(9));
    list.prepend(Node(8));
    list.prepend(Node(7));
    list.prepend(Node(6));
    list.prepend(Node(5));
    list.prepend(Node(4));
    list.prepend(Node(3));
    list.prepend(Node(2));
    list.prepend(Node(1));
    assert list.mth_to_last(0).val is 0
    assert list.mth_to_last(1).val is 9
    assert list.mth_to_last(2).val is 8
    assert list.mth_to_last(3).val is 7
    assert list.mth_to_last(4).val is 6
    assert list.mth_to_last(5).val is 5
    assert list.mth_to_last(6).val is 4
    assert list.mth_to_last(7).val is 3
    assert list.mth_to_last(8).val is 2
    assert list.mth_to_last(9).val is 1
    assert list.mth_to_last(10) is None
    assert list.mth_to_last(11) is None
    assert list.mth_to_last(12) is None

    list = List();
    assert list.mth_to_last(0) is None
    assert list.mth_to_last(1) is None
