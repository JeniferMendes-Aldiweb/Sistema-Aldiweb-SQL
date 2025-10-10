import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user.component',
  imports: [CommonModule,RouterLink,RouterLinkActive,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
    showSidebar = false;

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

}
