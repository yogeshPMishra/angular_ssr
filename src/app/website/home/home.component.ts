import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true
})
export class HomeComponent {
  constructor(private meta : Meta, private title : Title){

  }
  ngOnInit(): void {
    const Title = 'Angular | Contact Us';
    const Description = 'The home page welcomes visitors, showcasing key offerings and guiding navigation. It conveys the essence of the entity, enticing engagement and providing a central starting point for exploration.';
    this.title.setTitle("Angular | Contact Us");
    this.meta.updateTag({ name: 'title', content: Title });
    this.meta.updateTag({ name: 'description', content: Description });
  }
}
