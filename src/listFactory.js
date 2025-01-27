import { Node } from './nodeFactory.js';

function LinkedList() {
  let headNode = null;

  const append = (value) => {
    const findLastNode = (node) => {
      if (node === null) {
        headNode = Node(value);
      } else if (node.nextNode === null) {
        node.nextNode = Node(value);
      } else {
        findLastNode(node.nextNode);
      }
    };

    findLastNode(headNode);
  };

  const prepend = (value) => {
    let headCopy = headNode;

    headNode = Node(value);
    headNode.nextNode = headCopy;
  };

  const size = () => {
    const findLastNode = (node) => {
      if (node === null) {
        return 0;
      } else if (node.nextNode === null) {
        return 1;
      } else {
        return 1 + findLastNode(node.nextNode);
      }
    };

    return findLastNode(headNode);
  };

  const head = () => headNode;

  const tail = () => {
    const findLastNode = (node) => {
      if (node === null || node.nextNode === null) {
        return node;
      }
      return findLastNode(node.nextNode);
    };

    return findLastNode(headNode);
  };

  const atIndex = (index) => {
    const findIndex = (node, targetIndex, currentIndex = 0) => {
      if (targetIndex === currentIndex) {
        return node;
      } else if (node === null) {
        return null;
      }

      return findIndex(node.nextNode, targetIndex, ++currentIndex);
    };

    return findIndex(headNode, index);
  };

  const pop = () => {
    const findLastNode = (node) => {
      if (node.nextNode === null) {
        headNode = null;
      } else if (node.nextNode.nextNode === null) {
        node.nextNode = null;
      } else {
        findLastNode(node.nextNode);
      }
    };

    findLastNode(headNode);
  };

  const contains = (value) => {
    const findValue = (node, value) => {
      if (node === null) {
        return false;
      } else if (node.value === value) {
        return true;
      }

      return findValue(node.nextNode, value);
    };

    return findValue(headNode, value);
  };

  const find = (value) => {
    const findValue = (node, value, index = 0) => {
      if (node === null) {
        return null;
      } else if (node.value === value) {
        return index;
      }

      return findValue(node.nextNode, value, ++index);
    };

    return findValue(headNode, value);
  };

  const toString = () => {
    const iteration = (node) => {
      if (node === null) {
        return 'null';
      }
      return `( ${node.value} ) -> ` + iteration(node.nextNode);
    };

    return iteration(headNode);
  };

  const insertAt = (value, index) => {
    const newNode = Node(value);

    const findIndex = (node, targetIndex, currentIndex = 0) => {
      if (targetIndex - 1 === currentIndex) {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
      } else {
        findIndex(node.nextNode, targetIndex, ++currentIndex);
      }
    };

    findIndex(headNode, index);
  };

  const removeAt = (index) => {
    const findIndex = (node, targetIndex, currentIndex = 0) => {
      if (targetIndex - 1 === currentIndex) {
        node.nextNode = node.nextNode.nextNode;
      } else {
        findIndex(node.nextNode, targetIndex, ++currentIndex);
      }
    };

    findIndex(headNode, index);
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export { LinkedList };
