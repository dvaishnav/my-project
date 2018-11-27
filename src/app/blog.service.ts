import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  root_url = 'http://localhost:4200/';
  constructor(private http:Http) { }

  getposts(){
    return this.http.get('http://localhost/api/blog/get_blog.php').
    map((response) ⇒ response.json());
  }

}
