import { Component, OnInit } from '@angular/core';
import { ImageBoxService } from './image-box.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  contractInComponent;
  constructor(service: ImageBoxService) {
    this.contractInComponent = service.getContracts();
  }

  ngOnInit() {}
}
