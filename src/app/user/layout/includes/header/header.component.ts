import {Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  /* Function to show collapse of header */
  showCollapse() {
    if (window.innerWidth < 991) {
      const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
      if (!navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.add('show');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' } );
  }

  /* Function to remove ( show ) collapse of header */
  hideCollapse() {
    if (window.innerWidth < 991) {
      const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' } );
  }



}
