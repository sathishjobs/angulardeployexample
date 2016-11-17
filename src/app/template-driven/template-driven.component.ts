import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'dir-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user = {
    username: 'satis',
    email: 'Kumar@gmail.com',
    password:'sathish',
    gender:'male'
  };

  constructor() { }

  ngOnInit() {
  }

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
