import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() signuptext : string | undefined
  @Input() color : string | undefined
  @Input() addText : string | undefined
  @Input() minusText : string | undefined
  

  constructor() { }

  ngOnInit(): void {
  }


  getName(){
     alert(this.count)
  }

  count : number = 0
  max : number = 10
  min : number = 1
  isDisabled : boolean = false
  isDisabledDecrement: boolean= false

  increment(){
    if(this.count == this.max){
      this.isDisabled = true
       
    }else {
      this.count++
      this.isDisabledDecrement = false
    }
  }
  decrement(){

    if(this.count == this.min){
      this.isDisabledDecrement = true
      
    }else {
      this.count--
      this.isDisabled = false
    }

  }


  myEvent(event:any){
    console.log(event)
  }



  // @ViewChild('myage') myage : ElementRef | undefined
  // @ViewChild('mynane') mynane : ElementRef | undefined

  

  // currentVal : number = 0
  // currentName : string = ""
 
 
  // getValue( ){
  //   this.currentVal = this.myage?.nativeElement.value
  //   this.currentName = this.mynane?.nativeElement.value
  // }
 

  colorVariable = false
  para = false
 
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (document.body.scrollTop > 10 ||     
  //   document.documentElement.scrollTop > 10) {
  //     this.colorVariable = true
  //     this.para = true
  //   }else {
  //     this.colorVariable = false
  //     this.para = false
  //   }
  // }


  ngOneImage : any = "../../assets/images/nf1.jpg"
  ngTwoImage : any = "../../assets/images/nf2.jpg"
  ngThreeImage : any = "../../assets/images/nf3.jpg"
  ngFourImage : any = "../../assets/images/nf4.jpg"


  show = "blue"


  colorr="golden"


  items = [1,2,3,4,5,6,7,9]


}
