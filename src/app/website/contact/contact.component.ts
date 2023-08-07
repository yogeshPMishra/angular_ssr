import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone:true,
})
export class ContactComponent {
  constructor(private meta : Meta, private title : Title){

  }
  ngOnInit(): void {
    const Title = 'Angular | Contact Us';
    const Description = 'The contact us page facilitates easy communication. It provides means to connect, inquire, or seek assistance, fostering seamless interaction between visitors and the entity.';
    this.title.setTitle("Angular | Contact Us");
    this.meta.updateTag({ name: 'title', content: Title });
    this.meta.updateTag({ name: 'description', content: Description });
  }
}
