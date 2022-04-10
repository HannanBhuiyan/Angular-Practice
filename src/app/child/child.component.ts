import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // encapsulation: ViewEncapsulation.None // css name class
 })
export class ChildComponent implements OnInit {


  @Input() getName:string | undefined;

  @Input() getAge: string | undefined;

  @Input() getAddress: string | undefined

  @Input() getlon: string | undefined

  @Input() getDepartment: string | undefined

  @Output() messageEvent = new EventEmitter<string>();

  @Output() notificationEvent = new EventEmitter<string>();


  constructor() { }

  sendMessage(){
    this.messageEvent.emit("hello i am from child")
  }

 

  mainus(){
    this.messageEvent.emit(`${2-1}`)
  }

  ngOnInit(): void {
  }

  // message = "view child for message"


}
