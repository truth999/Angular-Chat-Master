import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-icon-dropdown',
  templateUrl: './icon-dropdown.component.html',
  styleUrls: ['./icon-dropdown.component.scss']
})
export class IconDropdownComponent implements OnInit {

  hoverMenu: boolean = false;
  isMenuShow: boolean = false;
  hoverUserButton: boolean = false;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.hoverMenu == false && this.hoverUserButton == false) {
            this.isMenuShow = false;
        }
    });
  }

  ngOnInit(): void {
  }

  showMenu() {
      this.isMenuShow = !this.isMenuShow;
  }
  
  hoverInMenu() {
    this.hoverMenu = true;
  }

  hoverOutMenu() {
      this.hoverMenu = false;
  }
  hoverInButton() {
      this.hoverUserButton = true;
  }

  hoverOutButton() {
      this.hoverUserButton = false;
  }
}
