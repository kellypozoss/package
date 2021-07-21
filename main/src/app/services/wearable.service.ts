import { Injectable } from '@angular/core';
import { Wearables } from '../apps/interfaces/wearables';

@Injectable({
  providedIn: 'root'
})
export class WearableService {

  listWearables: Wearables[] = [
    { id: 1, marca: 'Fitbit', modelo: 'Tracker Inspire 2' },
    { id: 2, marca: 'Fitbit', modelo: 'Tracker Inspire 2' },
    { id: 3, marca: 'Fitbit', modelo: 'Tracker Inspire 2' },
    { id: 4, marca: 'Fitbit', modelo: 'Tracker Inspire 2' },
    { id: 5, marca: 'Fitbit', modelo: 'Tracker Inspire 2' },
    { id: 6, marca: 'Fitbit', modelo: 'Tracker Inspire 2' }
  ];

  constructor() { }

  getWearable() {
    return this.listWearables.slice();
  }

  eliminarWearable(index: number) {
    this.listWearables.splice(index, 1);
  }
}
