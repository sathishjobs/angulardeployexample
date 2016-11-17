import { Component } from '@angular/core';
import { LogService } from './log.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent {
  id:string;
  title = 'dir works!';
  private switch = true;
  private value =100;
  private items = [1,2,3,4,5,6];
  onSwitch(){
    this.switch = !this.switch;
  }

  // Service
  private svalue="";

  constructor (private logService:LogService,private router:Router, private activatedRoute: ActivatedRoute){ 
       this.id = activatedRoute.snapshot.params['id'];
  }

  onLog(value:string){
    this.logService.writeToLog(value);
  }

  onNavigate(){
    this.router.navigate(['/'],{queryParams:{"analytics":100}});
  }

}
