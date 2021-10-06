class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor (val){
        this.root = new Node(val);
    }
    insert = function (node, val) {
        if (node.value < val){
            if (node.right !== null){
                this.insert(node.right, val);
            }else {
                node.right = new Node(val);
            }
        }else {
            if (node.left !== null){
                this.insert(node.left, val);
            }else {
                node.left = new Node(val);
            }
        }
    }

    search = function (node, val) {
        if (node.value === val){
            return true;
        }else {
            if (node.value < val){
                if (node.right !== null){
                    return this.search(node.right, val);
                }else return false;
            }else {
                if (node.left !== null){
                    return this.search(node.left, val);
                }else return false;
            }
        }
    }
}


currRoot = new BST(10);
console.log(currRoot.root.value);
currRoot.insert(currRoot.root, 12);
currRoot.insert(currRoot.root, 22);
currRoot.insert(currRoot.root, 2);
currRoot.insert(currRoot.root, 132);
currRoot.insert(currRoot.root, 152);

console.log(currRoot.search(currRoot.root, 2));
console.log(currRoot.search(currRoot.root, 152));
console.log(currRoot.search(currRoot.root, 32));
console.log(currRoot.search(currRoot.root, 22));




