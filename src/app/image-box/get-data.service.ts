import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getContracts() : any {
    return [
      {
          service: 'Programming',
          title: 'Software Engineer'
      },
      {
          service: 'IT',
          title: 'Network Engineer'
      },
      {
          service: 'Security',
          title: 'Security Engineer'
      }
    ];
  }
}
