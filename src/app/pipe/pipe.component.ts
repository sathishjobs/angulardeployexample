import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dir-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  value="lowercase";
  date= new Date(2016,5,14);
  ngOnInit() {
  }

}
