import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-form-example',
  templateUrl: './app-form-example.component.html',
  styleUrls: ['./app-form-example.component.css']
})
export class AppFormExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  getVlues(val: any){
    
    console.log(val)
  }


  color = "red"

  err = false

  redcolor = "red"
  greencolor = "green"

  changeColor(){
     this.err = !this.err
  }



}
