import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'dir-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private subscription: Subscription;

  param:string;
  
  constructor(private router: Router) {
    this.subscription = router.routerState.root.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
