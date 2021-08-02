interface ISortStrategy {
  sort(dataset: Array<number>): Array<number>;
}

export class BubbleSortStrategy implements ISortStrategy {
  sort(dataset: Array<number>) {
    console.log('Sorting using bubble sort');
    return dataset;
  }
}

export class QuickSortStrategy implements ISortStrategy {
  sort(dataset: Array<number>) {
    console.log('Sorting using quick sort');
    return dataset;
  }
}

export class Sorter {
  protected sorter;
  constructor(sorter: ISortStrategy) {
    this.sorter = sorter;
  }
  sort(dataset: Array<number>) {
    return this.sorter.sort(dataset);
  }
}
