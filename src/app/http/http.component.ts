import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { HttpService } from "./http.service";
@Component({
  selector: 'dir-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  items : any[] = [];
  asyncString = this.httpService.getData();
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  onSubmit(username: string,email:string){
      this.httpService.sendData({username: username,email:email}).subscribe(
        data => console.log(data),  
        error => console.log(error)
      );
  }

  onGetData(){
    this.httpService.getOwnData()
    .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    )
  }

}
