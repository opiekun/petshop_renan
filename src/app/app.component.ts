import { Component } from '@angular/core';
import { petshop, WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petshop';

  data: petshop[] = [];
  columnsToDisplay = ['title']

  constructor(private web: WebService) {
    this.web.GetPets().subscribe(x => {
      this.data = x;
      console.log(this.data);
    })
  }
}
