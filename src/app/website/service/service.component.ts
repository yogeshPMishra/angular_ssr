import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  standalone:true,
  imports:[

  ]
})
export class ServiceComponent {
    constructor(private meta : Meta, private title : Title){

    }
    ngOnInit(): void {
      const Title = 'Angular | Service';
      const Description = 'A service page provides specialized assistance, solutions, or resources to meet specific needs. It offers targeted expertise, guidance, and support, enhancing user experiences and achieving distinct objectives efficiently.';
      this.title.setTitle("Angular | Service");
      this.meta.updateTag({ name: 'title', content: Title });
      this.meta.updateTag({ name: 'description', content: Description });
    }

}
