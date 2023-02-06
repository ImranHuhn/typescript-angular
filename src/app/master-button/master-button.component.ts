import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.scss']
})
export class MasterButtonComponent implements OnInit {
  @Input() type!: string;
  @Input() title!: string;
  constructor() {}
  ngOnInit() {}
}
