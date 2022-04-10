import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  receaveMessage(msg:string){
    alert(msg);
  } 
 

  recevMINUS(msg: any){
    alert(msg)
  }

  // @ViewChild(ChildComponent) child: any;

  // ngAfterViewInit(){
  //   alert(this.child.message)
  // }
 





}
