import { Component } from '@angular/core';
import { BlogService } from './blog.service';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tech And Gedgets';
  config = {};
  root_url; setting={}; category; searchRes;
  constructor(private ser:BlogService){}
  ngOnInit(){
    this.root_url = this.ser.root_url;
    this.ser.getSetting().subscribe(data=>console.log(this.setting = data,this.category = data.category));
  }
  getSearchResult(data){
    return this.ser.getSearchResult(data).subscribe(data=>console.log(this.searchRes = data));
  }
}
