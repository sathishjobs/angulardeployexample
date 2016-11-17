import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'dir-ngtut',
  templateUrl: './ngtut.component.html',
  styleUrls: ['./ngtut.component.css']
})
export class NgtutComponent implements OnInit {

  num:number;
  parentCount:number;

  constructor() { 
    this.num = 5;
    this.parentCount =0;
  }

  onChange(val:number){
    this.parentCount = val;
  }

  ngOnInit() {
  }

}
