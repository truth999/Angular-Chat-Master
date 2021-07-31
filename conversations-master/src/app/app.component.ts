import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'CoverageOne';
    constructor(private translate: TranslateService, private router: Router ) {
        translate.setDefaultLang('en');
    }
    ngOnInit() : void {
      this.router.navigate(['']);
    }
}
