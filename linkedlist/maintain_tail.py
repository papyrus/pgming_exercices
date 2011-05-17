class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None

class List(object):
    def __init__(self):
        self._head, self._tail = None, None

    @property
    def head(self):
        return self._head

    @property
    def tail(self):
        return self._tail

    def prepend(self, node):
        if (not self._tail):
            self._tail = node
        node.next = self._head
        self._head = node

    def append(self, node):
        if (not self._head):
            self._head = node
        if (self._tail):
            self._tail.next = node
        self._tail = node

    def remove(self, node=None):
        if not node:
            return False
        if node is self._head:
            self._head = self._head.next
            if node is self._tail:
                self._tail = self._head
            return True
        cur = self._head
        while (cur):
            if cur.next is node:
                cur.next = node.next
                if self._tail is node:
                    self._tail = cur
                return True
            cur = cur.next
        return False

    def insert_after(self, node, val):
        to_insert = Node(val)
        if not node:
            self.prepend(to_insert)
            return True
        cur = self._head
        while (cur):
            if cur is node:
                to_insert.next = cur.next
                cur.next = to_insert
                if self._tail is node:
                    self._tail = to_insert
                return True
            cur = cur.next
        return False


if __name__ == '__main__':

    list = List()
    list.prepend(Node(1))
    assert list.head.val == 1
    assert list.tail.val == 1
    list.prepend(Node(2))
    assert list.head.val == 2
    assert list.tail.val == 1
    list.prepend(Node(3))
    assert list.head.val == 3
    assert list.tail.val == 1

    list = List()
    list.append(Node(1))
    assert list.head.val == 1
    assert list.tail.val == 1
    list.append(Node(2))
    assert list.head.val == 1
    assert list.tail.val == 2
    list.append(Node(3))
    assert list.head.val == 1
    assert list.tail.val == 3

    #
    # remove tests
    #

    list = List();
    assert list.remove() is False
    assert list.head is None
    assert list.tail is None

    list = List();
    assert list.remove(None) is False
    assert list.head is None
    assert list.tail is None

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1)
    list.append(n2)
    list.append(n3)
    assert list.remove(Node) is False
    assert list.head is n1
    assert list.tail is n3

    list = List();
    assert list.head is None
    assert list.tail is None
    n1 = Node(1);
    list.append(n1)
    assert list.remove(n1) is True
    assert list.head is None
    assert list.tail is None

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    list.append(n1)
    list.append(n2)
    assert list.remove(n2) is True
    assert list.head is n1
    assert list.tail is n1

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1)
    list.append(n2)
    list.append(n3)
    assert list.remove(n3) is True
    assert list.head is n1
    assert list.tail is n2

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    list.append(n1)
    list.append(n2)
    assert list.remove(n1) is True
    assert list.head is n2
    assert list.tail is n2

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1)
    list.append(n2)
    list.append(n3)
    assert list.remove(n1) is True
    assert list.head is n2
    assert list.tail is n3

    list = List();
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1)
    list.append(n2)
    list.append(n3)
    assert list.remove(n2) is True
    assert list.head is n1
    assert list.tail is n3

    # 
    # insert_after tests
    #

    list = List()
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1);
    list.append(n2);
    list.append(n3);
    assert list.insert_after(None, 4) is True
    assert list.head.val is 4
    assert list.tail is n3

    list = List()
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1);
    list.append(n2);
    list.append(n3);
    assert list.insert_after(n2, 4) is True
    assert list.head is n1
    assert list.tail is n3

    list = List()
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1);
    list.append(n2);
    list.append(n3);
    assert list.insert_after(n1, 4) is True
    assert list.head is n1
    assert list.tail is n3

    list = List()
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1);
    list.append(n2);
    list.append(n3);
    assert list.insert_after(n3, 4) is True
    assert list.head is n1
    assert list.tail.val is 4

    list = List()
    n1 = Node(1);
    n2 = Node(2);
    n3 = Node(3);
    list.append(n1);
    list.append(n2);
    list.append(n3);
    assert list.insert_after(Node, 4) is False
    assert list.head is n1
    assert list.tail is n3
