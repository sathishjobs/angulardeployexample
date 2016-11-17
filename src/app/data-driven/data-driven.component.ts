import { Component, OnInit } from '@angular/core';
import { FormGroup,
         FormControl,
         Validators,
         FormBuilder,
         FormArray } from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'dir-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder) { 
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username' : new FormControl('Steve',Validators.required),
    //     'email': new FormControl('',[Validators.required]),
    //   }),
    //   'password': new FormControl('',[Validators.required]),
    //   'hobbies' : new FormArray([
    //     new FormControl('Cooking',Validators.required)
    //   ]),
    //   'gender' : new FormControl('male'),
    // });
 
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username' : ['Steve',Validators.required],
        'email': ['',[Validators.required]],
      }),
      'password': ['',[Validators.required]],
      'hobbies' : formBuilder.array([
        ['Cooking',Validators.required,this.asyncExampleValidator]
      ]),
      'gender' : ['male'],
    });

    // Value changes
    this.myForm.valueChanges.subscribe(
      (data:any) => console.log(data)
    );

    // Status changes 
    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );

 }


  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm);
  }

  onAddHobby(){
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('',Validators.required));
  }

  asyncExampleValidator(control:FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve,reject) =>{
        setTimeout(()=>{
          if(control.value === 'Example'){
            resolve({'invalid':true});
          } else {
            resolve(null);
          }
        },1500);
      }
    )
    return promise;
  }

}
