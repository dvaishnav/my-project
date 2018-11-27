import { Component } from '@angular/core';
import { BlogService } from './blog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tech And Gedgets';
  config = {};
  root_url;
  constructor(private ser:BlogService){}
  ngOnInit(){
    this.root_url = this.ser.root_url;
  }

}
