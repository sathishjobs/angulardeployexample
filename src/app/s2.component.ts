import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'dir-s2',
  templateUrl: './s2.component.html',
  styles: []
})
export class S2Component implements OnInit {
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
    this.dataService.pushedData.subscribe(
        data => this.value=data
    );
  }

}
