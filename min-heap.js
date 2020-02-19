class MinHeap {
    constructor(){
        this.heap = [null];
    }
    add(node){
        this.heap.push(node);
        if (this.size >= 2)
            this.heapUp();
        return true;
    }
    pop(){
        const node = this.root;
        if (this.size >= 2){
            this.heap[1] = this.heap.pop();
            this.heapDown();
        } else if (this.size === 1){
            this.heap.pop(); }
        // console.log(this.heap);
        return (Number.isInteger(node)) ? node : null;
    }
    swap(a, b){
        var tmp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = tmp;
        return true;
    }
    heapUp(childIdx = this.size){
        const child = this.heap[childIdx],
            parentIdx = this.parent(childIdx),
            parent = this.heap[parentIdx];
        // console.log(`heaping up from child ${child} pos: ${childIdx} to parent ${parent} pos: ${parentIdx}`);
        if (parent > child){
            this.swap(parentIdx, childIdx);
            if (parentIdx > 1)
                this.heapUp(parentIdx); 
        }
        return true;
    }
    heapDown(parentIdx = 1){
        const parent = this.heap[parentIdx],
              leftIdx = this.left(parentIdx),
              rightIdx = this.right(parentIdx),
              left = this.heap[leftIdx],
              right = this.heap[rightIdx];
        if (left < parent && (!Number.isInteger(right) || left <= right)){
            this.swap(parentIdx, leftIdx);
            this.heapDown(leftIdx);
        } else if (right < parent && right < left){
            this.swap(parentIdx, rightIdx);
            this.heapDown(rightIdx); }
        return true;
    }
    get root(){ return this.heap[1]; }
    get size(){ return this.heap.length - 1; }
    parent(i){ return parseInt(i/2); }
    left(i){ return 2*i; }
    right(i){ return 2*i+1; }
}
export.modules = MinHeap;
