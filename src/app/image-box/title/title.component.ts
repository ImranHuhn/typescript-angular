import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title = 'A Technologies';
  constructor() {}
  ngOnInit() {}
  printTitle() {
    return `${ this.title } is a startup that provides services for those who are breaking into tech`;
  }
}
