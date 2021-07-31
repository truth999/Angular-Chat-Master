import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typology',
  templateUrl: './typology.component.html',
  styleUrls: ['./typology.component.scss']
})
export class TypologyComponent implements OnInit {

  dm_sans_html = `
  <p class="f-dm-sans">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
  <p class="f-dm-sans">1234567890!@#$%^&*()</p>
  `;
  dm_sans_css = `
  .f-dm-sans {
    font-family: 'DM Sans';
  }`;

  roboto_mono_html = `
  <p class="f-roboto-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p> 
  <p class="f-roboto-mono">1234567890!@#$%^&*()</p>`;

  roboto_mono_css = `
  .f-roboto-mono {
    font-family: 'Roboto Mono';
  }`;

  headings_html = `
  <h1>H1 - DM Sans heading</h1>
  <h2>H2 - DM Sans heading</h2>
  <h3>H3 - DM Sans heading</h3>
  <h4>H4 - DM Sans heading</h4>`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
