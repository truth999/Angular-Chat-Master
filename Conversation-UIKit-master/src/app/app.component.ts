import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConversationUIKit';
  code = `
  export model = new Model({
    a:1,
    b:function(){}
  })
  `;
  isSidebarCollapsed: boolean = false;

  ngOnInit(): void {
    let check = localStorage.getItem('viewchecked');
    if (!check) {
      localStorage.setItem('viewchecked', JSON.stringify(true));
      location.reload();
    }
      
  }

  collapseSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
