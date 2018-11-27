import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(private ser:BlogService){}

  ngOnInit() {
    this.getPosts()
  }
  getPosts(){
    this.posts = this.ser.getposts()
  }
}
