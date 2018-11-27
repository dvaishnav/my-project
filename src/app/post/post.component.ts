import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id: string;
  root_url; post1;
  constructor(private ser:BlogService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.root_url = this.ser.root_url;
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.ser.getposts(this.id).subscribe(data=>console.log(this.post1 = data));
  }

}
