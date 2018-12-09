import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id: string;
  root_url; post1={0:{id:'',post_id:'',name:''},comment:{}};
  comments;
  comentData;
  constructor(private ser:BlogService,private route: ActivatedRoute){ }

  ngOnInit() {
    this.comentData = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required])),
      //emailid : new FormControl(''),
      comment: new FormControl('',Validators.compose([Validators.required])),
    });
    this.root_url = this.ser.root_url;
    this.id = this.route.snapshot.paramMap.get('id');
    this.ser.getposts(this.id).subscribe(data=>(this.post1 = data, this.comments = data.comment.reverse()));
  }

  addComment(data){
    if(this.comentData.valid){
      this.comments.reverse();
      this.comments.push(data);
      this.comments.reverse();
      this.comentData.reset();
      this.ser.addComment(Object.assign(data,{post_id:this.post1[0].post_id})).subscribe();
    }else console.log('invalid data');
  }

}
