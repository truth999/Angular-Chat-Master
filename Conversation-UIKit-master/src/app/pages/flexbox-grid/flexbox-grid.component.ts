import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox-grid',
  templateUrl: './flexbox-grid.component.html',
  styleUrls: ['./flexbox-grid.component.scss']
})
export class FlexboxGridComponent implements OnInit {
 rows_and_cols_html  = `<div class="grid-row">
  <div class="grid-col">
  <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col">
  <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col">
  <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col">
  <div class="uikit-example__coldemo"></div>
  </div>
</div>`;
rows_and_cols_css = `.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}

.grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}`;

variable_width_content_html = `
<div class="grid-row">
  <div class="grid-col">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--auto">
    <div class="uikit-example__coldemo">auto</div>
  </div>
  <div class="grid-col">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

variable_width_content_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
  }
  
  .grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  }
  
  .grid-col--auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
  }`;

  vertical_alignment_html = `
  <div class="grid-row">
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 48px;"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 64px;"></div>
    </div>
  </div>`;

  vertical_alignment_css = `
  .grid-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
    }
    
  .grid-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }`;

  vertical_alignment2_html = `
  <div class="grid-row grid-row--aic">
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 48px;"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 64px;"></div>
    </div>
  </div>`;

  vertical_alignment2_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}

.grid-row--aic {
    align-items: center;
}

.grid-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
}`;

vertical_alignment3_html = `
<div class="grid-cont">
  <div class="grid-row grid-row--aib">
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 48px;"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo" style="height: 64px;"></div>
    </div>
  </div>
</div>`;

vertical_alignment3_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
  
.grid-row--aib {
  align-items: flex-end;
}
  
.grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}`;

horizontal_alignment_html = `
<div class="grid-row">
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

horizontal_alignment_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
  
.grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}
  
.grid-col--3 {
  flex: 0 0 25%;
  max-width: 25%;
}`;

horizontal_alignment2_html = `
<div class="grid-row grid-row--jcc">
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

horizontal_alignment2_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
  
.grid-row--jcc {
  justify-content: center;
}
  
.grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}
  
.grid-col--3 {
  flex: 0 0 25%;
  max-width: 25%;
}`;

horizontal_alignment3_html = `
<div class="grid-row grid-row--jce">
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

horizontal_alignment3_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
  
.grid-row--jce {
  justify-content: flex-end;
}
  
.grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
}
  
.grid-col--3 {
  flex: 0 0 25%;
  max-width: 25%;
}`;

horizontal_alignment4_html = `
<div class="grid-row grid-row--jca">
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

horizontal_alignment4_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
}
  
.grid-row--jca {
  justify-content: space-around;
}
  
.grid-col--3 {
  flex: 0 0 25%;
  max-width: 25%;
}`;

horizontal_alignment5_html = `
<div class="grid-row grid-row--jcb">
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
  <div class="grid-col grid-col--3">
    <div class="uikit-example__coldemo"></div>
  </div>
</div>`;

horizontal_alignment5_css = `
.grid-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
  }
  
  .grid-row--jcb {
  justify-content: space-between;
  }
  
  .grid-col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  }
  
  .grid-col--3 {
  flex: 0 0 25%;
  max-width: 25%;
  }`;

  disabled_and_small_gutters_html = `
  <div class="grid-row grid-row--nog">
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
  </div>`;

  disabled_and_small_gutters_css = `
  .grid-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
  }
    
  .grid-row--nog {
    margin-right: 0;
    margin-left: 0;
    
    & > .grid-col {
    padding-right: 0;
    padding-left: 0;
    }
  }
    
  .grid-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }`;

  gutters_between_columns_html = `
  <div class="grid-row grid-row--smg">
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
    <div class="grid-col">
      <div class="uikit-example__coldemo"></div>
    </div>
  </div>`;
  gutters_between_columns_css = `
  .grid-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;
    }
    
    .grid-row--smg {
    margin-right: -4px;
    margin-left: -4px;
    
    .grid-col {
    padding-right: 4px;
    padding-left: 4px;
    }
    }
    
    .grid-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    }`;
  constructor() { }
 
  ngOnInit(): void {
  }

}
