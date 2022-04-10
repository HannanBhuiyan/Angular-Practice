import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { BlogComponent } from './blog/blog.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ParantComponent,
    ChildComponent,
    BlogComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
