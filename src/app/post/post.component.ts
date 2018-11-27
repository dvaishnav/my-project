import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  root_url;
  constructor(private ser:BlogService) { }

  ngOnInit() {
    this.root_url = this.ser.root_url;
  }

}
