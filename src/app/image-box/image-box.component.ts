import { Component, OnInit } from '@angular/core';
//import { ImageBoxService } from './image-box.service';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  contractInComponent;
  testingBoxInComponent = false;
  coverUrlInComponent = 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  constructor(service: 
    //ImageBoxService,
    GetDataService) {
    this.contractInComponent = service.getContracts();
  }
  showBox() {
    this.testingBoxInComponent = !this.testingBoxInComponent;
  }

  ngOnInit() {}
}
