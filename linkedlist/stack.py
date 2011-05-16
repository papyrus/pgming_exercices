class Stack(object):
    class Node(object):
        def __init__(self, val):
            self.val = val

    def __init__(self):
        self.head = None

    def push(self, val):
        node = self.Node(val)
        node.next = self.head
        self.head = node

    def pop(self):
        if not self.head:
            return None
        val = self.head.val
        self.head = self.head.next
        return val

    def traverse(self, fn):
        cur = self.head
        while cur is not None:
            fn(cur.val)
            cur = cur.next

    def empty(self, fn):
        while self.head is not None:
            fn(self.head.val)
            self.head = self.head.next

if __name__ == '__main__':

    log = None
    def visitor(val):
        log.append(val)

    stack = Stack()
    assert stack.pop() is None

    stack.push(1)
    stack.push(dict(foo='bar'))

    log = []
    stack.traverse(visitor)
    assert log == [{'foo': 'bar'}, 1]

    assert stack.pop() == dict(foo='bar')
    assert stack.pop() == 1

    stack.push(1)
    stack.push(dict(foo='bar'))


    log = []
    stack.empty(visitor)
    assert log == [{'foo': 'bar'}, 1]
    assert stack.pop() is None
