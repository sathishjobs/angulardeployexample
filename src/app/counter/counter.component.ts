import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dir-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count: number = 0;
  @Output() result: EventEmitter<any> = new EventEmitter();
  @Input() main:string ="sathish";
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.count++;
    this.result.emit(this.count);
  }

}
