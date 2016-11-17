import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'dir-s1',
  templateUrl: './s1.component.html',
  styles: [],
})
export class S1Component implements OnInit {
  value = '';
  items:string[] = [];
  constructor (private logService:LogService, private dataService:DataService){ }

  onLog(value:string){
    this.logService.writeToLog(value);
  }

  onStore(value:string){
    this.dataService.addData(value);
  }

  onGet(){
    this.items = this.dataService.getData();
  }

  ngOnInit() {
  }

  onSend(value:string){
    this.dataService.pushData(value);
  }

}
