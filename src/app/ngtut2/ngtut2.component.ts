import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'dir-ngtut2',
  templateUrl: './ngtut2.component.html',
  styleUrls: ['./ngtut2.component.css']
})
export class Ngtut2Component implements OnInit {

  @Input() name : string;
  constructor() { }

  ngOnInit() {
  }

}
