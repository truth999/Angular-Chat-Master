import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-translate-action-bar',
  templateUrl: './translate-action-bar.component.html',
  styleUrls: ['./translate-action-bar.component.scss']
})
export class TranslateActionBarComponent implements OnInit {

  hover_select_language_form: boolean = false;
  hover_select_language_button: boolean = false;
  show_select_language: boolean = false;
  translate_language = "Spanish";

  @Output() callbackFunction: EventEmitter<any> = new EventEmitter();
  @Input() for: any;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.hover_select_language_button == false && this.hover_select_language_form == false) {
            this.show_select_language = false;
        }
    });
   }

  ngOnInit(): void {
  }

  hoverInSelectLanguageForm() {
    this.hover_select_language_form = true;
  }
  hoverOutSelectLanguageForm() {
      this.hover_select_language_form = false;
  }
  hoverInSelectLanguageButton() {
    this.hover_select_language_button = true;
  }
  hoverOutSelectLanguageButton() {
    this.hover_select_language_button = false;
  }
  changeTranslateLanguage(language) {
    this.translate_language = language;
    this.show_select_language = false;
    let data = {
        action: 'Translate',
        language: language
    }
    this.callbackFunction.emit(data);
  }
  viewOriginalMessage() {
    // this.is_translate_mode = false;
    let data = {
        action: 'View Original Message',
        for: this.for,
        language: '',
    }
    console.log(this.for);
    this.callbackFunction.emit(data);
  }
  selectLanguage() {
    this.show_select_language = !this.show_select_language;
  }
}
