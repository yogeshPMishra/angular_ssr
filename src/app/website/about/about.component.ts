import { Component,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone:true,
  imports:[

  ]
})
export class AboutComponent {
  constructor(private meta : Meta, private title: Title){}
  ngOnInit(): void{
    const Title = 'Angular | About';
    const Description = 'The about page succinctly introduces the entity, sharing its purpose, values, and history. It offers a concise glimpse into the organizations essence, fostering connection and understanding with visitors.';
    this.title.setTitle("Angular | About");
    this.meta.updateTag({ name: 'title', content: Title });
    this.meta.updateTag({ name: 'description', content: Description });
  }
}
