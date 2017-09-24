import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('About Page');
    meta.addTags([
      { name: 'keywords', content: 'Angular 4 Universal' }
    ]);
  }

  ngOnInit() {
  }

}
