export class RadioStation {
  protected frequency: number;
  constructor(frequency: number) {
    this.frequency = frequency;
  }
  getFrequency() {
    return this.frequency;
  }
}

export class StationList implements Iterable<RadioStation> {
  protected stations = Array<RadioStation>();
  protected counter = 0;

  addStation(station: RadioStation) {
    this.stations.push(station);
  }
  removeStation(toRemove: RadioStation) {
    let toRemoveFrequency = toRemove.getFrequency();
    this.stations = this.stations.filter(
      (station) => station.getFrequency() !== toRemoveFrequency
    );
  }
  next(): IteratorResult<RadioStation> {
    return {
      done: this.counter >= this.stations.length,
      value: this.stations[this.counter++],
    };
  }

  [Symbol.iterator](): IterableIterator<RadioStation> {
    return this;
  }
}