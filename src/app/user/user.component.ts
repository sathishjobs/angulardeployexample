import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'dir-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  private subscription:Subscription;
  id:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    // this.id = activatedRoute.snapshot.params['id'];
    this.subscription=activatedRoute.params.subscribe(
      (param:any) => this.id = param['id']
    );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("user view is destried");
    this.subscription.unsubscribe();
  }

}
