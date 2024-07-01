import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  getInTouchEmail: string = 'support@appie.com';
  getInTouchPhone: string = '+(642) 342 762 44';
  getInTouchAddress: string = '442 Belle Terre St Floor 7, San Francisco, AV 4206';

}
