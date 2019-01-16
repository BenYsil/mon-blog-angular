import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PostListComponent]
})
export class AppModule { }
