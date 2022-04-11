import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { BlogComponent } from './blog/blog.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { AppSwiperExampleComponent } from './app-swiper-example/app-swiper-example.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppFormExampleComponent } from './app-form-example/app-form-example.component';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    ParantComponent,
    ChildComponent,
    BlogComponent,
    TestComponent,
    MenuComponent,
    AppSwiperExampleComponent,
    AppFormExampleComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    CarouselModule,
    FormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
