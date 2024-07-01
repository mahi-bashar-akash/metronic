import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FrontLayoutComponent } from "./user/layout/layout.component";
import { AdminLayoutComponent } from "./admin/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterModule, RouterOutlet, FrontLayoutComponent, AdminLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
}
