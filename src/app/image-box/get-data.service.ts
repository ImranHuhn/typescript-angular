import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getContracts() {
    return [
        {
            service: 'Programming',
            title: 'Software Engineer'
        },
        {
            service: 'Administrator',
            title: 'Network Engineer'
        },
        {
            service: 'Security',
            title: 'Security Engineer'
        }
    ];
}
}
