import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { ReplacePipe } from './replace.pipe';
import { SearchReasultComponent } from './search-reasult/search-reasult.component';
var route = [
  { 
    path: '',
    component:HomeComponent
  },
  {
    path: 'contact-us',
    component:ContactUsComponent
  },
  {
    path: 'about-us',
    component:AboutUsComponent
  },
  {
    path: 'post/:id',
    component:PostComponent
  },
  {
    path: 'profile/:id',
    component:ProfileComponent
  },
  {
    path: 'category/:id',
    component:CategoryComponent 
  },
]; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    PostComponent,
    ProfileComponent,
    CategoryComponent,
    ReplacePipe,
    SearchReasultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
