/* Interface iterator<T> {
    getNext(): T;
    hasMore(): boolean;
}

interface IterableCollection<T> {
    createIterator(): iterator<T>;
}

class MyIterator implements iterator<number> {
  private items: number[];
  private index: number = 0;

  constructor(items: number[]) {
    this.items = items;
  }

  getNext(): number {
    return this.items[this.index++];
  }

  hasMore(): boolean {
    return this.index < this.items.length;
  }
}

class MyCollection implements IterableCollection<number> {
  private items: number[];
  private iterator: iterator<number>;

  constructor(items: number[]) {
    this.iterator = new MyIterator(this.items);
  }

  createIterator(): iterator<number> {
    return this.iterator;
  }
}

const items = [1, 2, 3, 4, 5];

const newCollection = new MyCollection(items);

console.log(newCollection.createIterator().getNext()); */

