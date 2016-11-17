import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ComponentCanDeactivate } from "./user-edit.guard";
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'dir-user-edit',
  template: `
    <p>
      user-edit Works!
    </p>
    <button (click) ="done = true">Done</button>
    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserEditComponent implements ComponentCanDeactivate {

  done = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(){
    this.router.navigate(['/']);
  }

  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm('Do you want to leave? ');
    }
    return true;
  }


}
