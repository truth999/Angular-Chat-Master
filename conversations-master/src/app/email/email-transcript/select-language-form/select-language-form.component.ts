import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-language-form',
  templateUrl: './select-language-form.component.html',
  styleUrls: ['./select-language-form.component.scss']
})
export class SelectLanguageFormComponent implements OnInit {

  languages = ['Spanish', 'English', 'Franch', 'Hindi', 'German', 'Japanese', 'Russian', 'Chinese', 'Portuguese', 'Sudanese', 'Swalish', 'Swedish',];

  @Input() selectedLanguage: any;
  @Output() changeLanguage: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectLaguage(language) {
    this.changeLanguage.emit(language);
  }
}
