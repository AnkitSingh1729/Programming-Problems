// This file contains a class for Binary Search Tree. We can create and object of BST and use the insert and search methords of BST

class BST {
    static root;
    constructor (val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
    // This function insert the input value in the bst with root-node = node
    insert = function (node, val) {
        if (node.value < val){
            if (node.right !== null){
                this.insert(node.right, val);
            }else {
                node.right = new BST(val);
            }
        }else {
            if (node.left !== null){
                this.insert(node.left, val);
            }else {
                node.left = new BST(val);
            }
        }
    }

    // This function returns true if val is present in BST with root-node = node, else returns false
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



// Initializing BST root
root = new BST(10);
console.log(root.value);

// Inserting multiple elements in BST
root.insert(root, 12);
root.insert(root, 22);
root.insert(root, 2);
root.insert(root, 132);
root.insert(root, 152);

// Check if given number is present in BST or not
console.log(root.search(root, 2));
console.log(root.search(root, 152));
console.log(root.search(root, 32));
console.log(root.search(root, 22));
console.log(root.search(root, 1));




