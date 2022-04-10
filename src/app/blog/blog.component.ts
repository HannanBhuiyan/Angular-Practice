import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showText = false
  
  toggleText(event:any): void {
    this.showText = !this.showText
    console.log(event)
  }



  @Input() title : string | undefined



  showHeading = false


  toggleClick(){

    this.showHeading = !this.showHeading
   
  }




}
