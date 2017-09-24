import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Home Page');
    meta.addTags([
      { name: 'keywords', content: 'Angular 4 Universal' }
    ]);
  }

  ngOnInit() {
  }

}
