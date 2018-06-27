import { AppErrorHandler } from './common/app-error-handler';
import { PostsService } from './sevices/posts/posts.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PostsComponent } from './posts/posts.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', component: PostsComponent }
    ])
  ],
  providers: [
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
