import { Component, OnInit, Input, HostListener } from '@angular/core';
 
import { Menu } from '../Menu';
import { MENUITEM } from '../menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menus : Menu[] = MENUITEM

  @Input() logo : string | undefined



  logoShow  = true
  
 


  constructor() { }

  ngOnInit(): void {
  }

  menuScrollColor = false

  @HostListener('window:scroll', [])
  onWindowScroll(){
    if(document.body.scrollTop > 10 || 
      document.documentElement.scrollTop > 10){
       this.menuScrollColor = true
    }else {
      this.menuScrollColor = false
    }
  }
 

 

}
