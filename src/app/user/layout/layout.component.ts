import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./includes/header/header.component";
import { FooterComponent } from "./includes/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class FrontLayoutComponent {

}
