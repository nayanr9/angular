import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private customeData : any[];
  constructor(private data:any[]) { 
    this.customeData = [
      {"id": 123, "Name": "Raj", "address": "Bangalore"},
      {"id": 124, "Name": "Nayan", "address": "Ooty"},
    ];
  }

  getRecords() {
    // return new Observable<any>(this.customeData);
  }
}
