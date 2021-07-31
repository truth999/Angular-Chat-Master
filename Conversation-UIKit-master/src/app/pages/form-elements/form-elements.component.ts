import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  default_text_input_html = `
  <div
    class="floating-label"
  >
      <input
          class="floating-input--normal"
          placeholder=" "
      >
      <label class="float-label">Default</label>
  </div>`;

  default_text_input_css = `
  .floating-label {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
        position: absolute;
        right: 10px;
        top: 9px;
    }
}

.floating-input--normal {
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(109, 135, 144, 0.3);
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    &:hover {
        border: 1px solid #6d8790;
        label {
            color: #203b4c;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid #219fcf;
        label {
            top: -9px;
            left: 12px;
            font-size: 13px;
            color: #219fcf;
        }
    }
}`;

readonly_state_html = `
<div
  class="floating-label disabled"
>
    <input
        class="floating-input--normal non-cursor disabled"
        placeholder=" "
        disabled="true"
    >
    <label class="float-label--normal">Readonly</label>
</div>`;

readonly_state_css = `.floating-label {
  position: relative;
  margin-bottom: 15px;
  .arrow-icon {
  position: absolute;
  right: 10px;
  top: 9px;
  }
  }
  
  .floating-input--normal {
  cursor: pointer;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  border: 1px solid rgba(109, 135, 144, 0.3);
  border-radius: 3px;
  background-color: #ffffff;
  padding-left: 12px;
  color: #1c323f;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  &:hover {
  border: 1px solid #6d8790;
  label {
      color: #203b4c;
  }
  }
  &:focus {
  outline: none;
  border: 1px solid #219fcf;
  label {
      top: -9px;
      left: 12px;
      font-size: 13px;
      color: #219fcf;
  }
  }
  }
  
  .disabled {
  color: #6d8790;
  &:hover {
  input {
      border: 1px solid rgba(109, 135, 144, 0.3);
  }
  label {
      color: #6d8790;
  }
  }
  }
  
  .non-cursor {
  cursor: default !important;
  }`;

  placeholder_html = `
  <div
      class="floating-label"
  >
      <input
          class="floating-input--normal"
          placeholder=" "
      >
      <label class="float-label">Placeholder</label>
  </div>`;

  placeholder_css = `
  .floating-label {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
    position: absolute;
    right: 10px;
    top: 9px;
    }
    }
    
    .floating-input--normal {
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(109, 135, 144, 0.3);
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    &:hover {
    border: 1px solid #6d8790;
    label {
        color: #203b4c;
    }
    }
    &:focus {
    outline: none;
    border: 1px solid #219fcf;
    label {
        top: -9px;
        left: 12px;
        font-size: 13px;
        color: #219fcf;
    }
    }
    }`;

  search_field_html = `
  <div class="search-input">
    <div class="search-input__content">
          <input type="text" placeholder="Search"/>
          <img src="assets/img/search_gray.svg">
      </div>
  </div>`;
  search_field_css = `
  .search-input{

    // position: absolute;
    width: 215px;
    background: white;
    height: 32px;
    display: flex;
    border: 1px solid rgba(109,135,144,0.2);
    border-radius: 5px;
    
    
    .search-input__content{
    display: inline-flex;
    height: 29px;
    margin-left: 3px;
    // width: calc(100% - 72px);
    background-color: white;
    
    
    & > img{
        height: 22px;
        width: 15px;
        display: inline-block;
        padding-top: 8px;
    }
    
    & > input{
        box-sizing: border-box;
        color: black;
        font-family: "DM Sans";
        font-size: 14px;
        letter-spacing: 0;
        line-height: 18px;
        background: transparent;
        border: none;
        width: 186px;
        padding-top : 6px;
        padding-left: 11px;
        
        &:focus {
            outline: none;
        }
    }
    }
    ::placeholder {
    opacity: 0.4;
    color: #1C323F; /* Firefox */
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: 0.4;
    // padding-left: 11px;
    padding-top: 17px;
    color: #1C323F;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
    opacity: 0.4;
    color: #1C323F;
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
    }
    }`;

  invalid_state_html = `
  <div
      class="floating-label"
  >
      <input
          class="floating-input--error"
          placeholder=" "
      >
      <label class="float-label--error">Invalid State</label>
  </div>`;
  invalid_state_css = `
  .floating-label {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
    position: absolute;
    right: 10px;
    top: 9px;
    }
    }
    
    .floating-input--error {
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid #dd5050;
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    z-index: 1;
    
    &:focus {
    outline: none;
    border: 1px solid #dd5050;
    
    label {
        top: -9px;
        left: 12px;
        font-size: 13px;
        color: #dd5050;
    }
    }
    }`;

  time_input_html =`
  <div
      class="floating-label"
  >
      <input
          class="floating-input--normal"
          placeholder=" "
          type="time"
      >
      <label class="float-label--normal">Time Input</label>
  </div>`;
  time_input_css = `
  .floating-label {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
        position: absolute;
        right: 10px;
        top: 9px;
    }
}

.floating-input--normal {
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(109, 135, 144, 0.3);
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    &:hover {
        border: 1px solid #6d8790;
        label {
            color: #203b4c;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid #219fcf;
        label {
            top: -9px;
            left: 12px;
            font-size: 13px;
            color: #219fcf;
        }
    }
}`;

date_input_html = `
<div
    class="floating-label"
>
    <input
        class="floating-input--normal"
        placeholder=" "
        type="date"
    >
    <label class="float-label--normal">Date Input</label>
</div>`;

date_input_css = `
.floating-label {
  position: relative;
  margin-bottom: 15px;
  .arrow-icon {
      position: absolute;
      right: 10px;
      top: 9px;
  }
}

.floating-input--normal {
  cursor: pointer;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  border: 1px solid rgba(109, 135, 144, 0.3);
  border-radius: 3px;
  background-color: #ffffff;
  padding-left: 12px;
  color: #1c323f;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
  &:hover {
      border: 1px solid #6d8790;
      label {
          color: #203b4c;
      }
  }
  &:focus {
      outline: none;
      border: 1px solid #219fcf;
      label {
          top: -9px;
          left: 12px;
          font-size: 13px;
          color: #219fcf;
      }
  }
}`;

dropdown_button_html = `
<div #footer="" class="footer-actions">
    <div class="left">
        <ul class="popover DropMenuCo" id="co-browse__dropdown">
            <li class="">
                <img class="normal" src="assets/img/footer-menu-agent-cobrowse-icon.svg">
                <img class="active" src="assets/img/footer-menu-agent-cobrowse-hover-icon.svg">
                <span>Agent CoBrowse</span>
            </li>
            <li class="">
                <img class="normal" src="assets/img/footer-menu-customer-cobrowse-icon.svg">
                <img class="active" src="assets/img/footer-menu-customer-cobrowse-hover-icon.svg">
                <span>Customer CoBrowse</span>
            </li>
        </ul>
        <button data-popover-open="#co-browse__dropdown" class="co-browse_button">
            <img src="assets/img/footer-cobrowse-icon.svg">
            <span>CoBrowse</span>

            <img class="up-icon" style="margin-left: 34px" src="assets/img/up-arrow-icon.svg">
            <img class="down-icon" style="margin-left: 34px" src="assets/img/down-arrow-icon.svg">
        </button>
    </div>
</div>`;

dropdown_button_css = `
.footer-actions {
  font-family: 'DM Sans';
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 40px;
  display: flex;
  // background: var(--body-background);
      
  & .left, & .center, & .right{
      
      // display: inline-block;
      // background: black;
      // width: 33.333333%;
      flex-basis: 100%;
      position: relative;
      // background:#F0F5F7;
      &.two_cols {
          width: 50%;
      }

      & > button {
          width: 100%;
          height: 40px;
          border: 0;
          font-size: 14px;
          line-height: 14px;
          cursor: pointer;
      }
      
      & .co-browse_button {
          border-bottom-left-radius: 12px;
          background-color: #F0F5F7;
          color: #517785;
          font-family: 'DM Sans';
          box-sizing: border-box;
          vertical-align: middle;
          display: flex;
          justify-content: center;
          align-items: center;
          
          &:hover {
              background-color: #BDCCD2;
              opacity: 1;
              color: #517785;
          }
          &.active {
              background-color: red;
          }
          span {
              margin-left: 5px;
          }
          &.clicked {
              background-color: #BDCCD2;
          }
      }
      
      .DropMenuCo {
          position: absolute; 
          list-style: none;
          margin:0px;            
          bottom: 43px;
          padding:0px;   
          z-index: 100;        
          box-sizing: border-box;
          font-family: 'DM Sans';
          height: 72px;
          flex-basis: 100%;
          // width: 33.333333%;
          width: 100%;
          
          border: 1px solid rgba(109,135,144,0.15);
          border-radius: 10px 10px 10px 0;
          background-color: #FFFFFF;
          box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
          // &.two_cols_menu {
          //     width: calc(50%);
          // }
          li {
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 13px;
              font-weight: 500;
              letter-spacing: 0;
              line-height: 17px;
              font-family: 'DM Sans';
              height: 35px;
              background-color: white;
              padding-left: 12px;            
              border-bottom: 1px solid #6D879015;            
              display: flex;
              align-items: center;
              vertical-align: middle;
              cursor: pointer;  
              span {
                  margin-left: 9.98px;
              }
              .normal { display: block; }
              .active { display: none; }
          }
          li:hover {
              // background-color: yellow;
              color: #219FCF;
              svg {
                  path{
                      fill: #219fcf;
                  }
              }
              .normal { display: none; }
              .active { display: block; }
          }
      }
  }
}`;

contacts_dropdown_html = `
<div class="dialpad-form">
<div
    class="contacts"
    data-popover-open="#contacts-search-form"
>
    <div class="contacts__image">
        <img src="assets/img/contact-icon.svg" />
    </div>
    Contacts
    <div class="contacts__collapse">
        <img src="assets/img/arrow-down-icon.svg" />
    </div>
    <div
        class='contactSearchForm popover'
        id="contacts-search-form"
    >
        <!-- <app-dial-search-modal
            (callbackFunction)="phoneNumberAutoComplete($event)"
            (mouseleave)="contactsFormleave()"
            (mouseenter)="contactsFromenter()"
            *ngIf="search_modal_show"
        ></app-dial-search-modal> -->
        <div class="contacts-modal">
            <div class="contacts__header">
                <div class="search-bar">
                    <div class="search-bar__left">
                        <input type="text" id="_search" placeholder="Search"/>
                        <img src="assets/img/search gray.svg">
                    </div>
                </div>
                <!--<div class="assistButton"> 
                    <img src="assets/svg/button-assist.svg" />
                </div>-->
                <div class="plusButton">
                    <img src="assets/img/button-plus-icon.svg" />
        
                </div>
            </div>
            <div class="contacts__body">
                <div class="contact-content">
                    <div class="contentTotal">
                        <div >
                            Calvin Hogan
                        </div>
                        <div  class="content__body">
                            <p>Supervisor</p>
                            <h1>Work: 1-402-541-7564</h1>
                            <h1>Home: 2-940-994-1081</h1>
                            <h1>Mobile: 0-390-492-3892</h1> 
                        </div>
                    </div>
                </div>
                <div class="contact-content">
                    <div class="contentTotal">
                        <div >
                            Genda Ginda
                        </div>
                        <div  class="content__body">
                            <p>Supervisor</p>
                            <h1>Work: 1-402-541-7564</h1>
                            <h1>Home: 2-940-994-1081</h1>
                            <h1>Mobile: 0-390-492-3892</h1>
                        </div>
                    </div>
                </div>
                <div class="contact-content">
                    <div class="contentTotal">
                        <div >
                            Nona Buma
                        </div>
                        <div  class="content__body">
                            <p>Supervisor, Marketing</p>
                            <h1>Work: 1-402-541-7564</h1>
                            <h1>Home: 2-940-994-1081</h1>
                            <h1>Mobile: 0-390-492-3892</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

contacs_dropdown_css = `
.contacts {
  cursor: pointer;
  margin-top: 0px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  height: 32px;
  width: 172px;
  border: 1px solid rgba(109, 135, 144, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
  padding-left: 44px;
  padding-top: 5.49px;
  padding-bottom: 7.51px;
  padding-right: 53px;
  display: flex;
  font-family: 'DM Sans';
  font-size: 14px;
  color: #517785;
  .contacts__collapse {
      // width: 172px;
      margin-left: 30px;
      float: right;
      padding-top: 7px;
  }
  .contacts__image {
      margin-right: 5px;
      width: 70px;
      height: 70px;
      margin-top: 2px;
  }
  &.clicked {
      background-color: rgba(33, 159, 207, 0.2);
  }
  &.active {
      background-color: rgba(33, 159, 207, 0.2);
  }
  .contactSearchForm {
      // position: absolute;
      position: relative;
      // top: 178px;
      left: calc(50% - 253px);
      top: 26px;
      z-index: 1;
      width: 278px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      // height: calc(100vh - 356px);
      height: 307px;
      display: none;
      &.active {
          display: block;
      }
      
      .contacts-modal {
          
          width: 278px;
          max-height: 312px;
          height: 100%;
          z-index: 200;
          border-radius: 10px;
          border: 1px solid rgba(109,135,144,0.15);
          -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
          -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
          box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
          background-color: #FFFFFF;
          
          .contacts__header {
              padding-top: 10px;
              padding-left: 7px;
              display: flex;
              .search-bar{
                      
                  // position: absolute;
                  width: 215px;
                  background: white;
                  height: 32px;
                  display: flex;
                  border: 1px solid rgba(109,135,144,0.2);
                  border-radius: 5px;
                  
              
                  .search-bar__left{
                      display: inline-flex;
                      height: 29px;
                      margin-left: 3px;
                      // width: calc(100% - 72px);
                      background-color: white;
          
              
                      & > img{
                          height: 24px;
                          width: 15px;
                          display: inline-block;
                          padding-top: 6px;
                      }
              
                      & > input{
                          box-sizing: border-box;
                          color: black;
                          font-family: "DM Sans";
                          font-size: 14px;
                          letter-spacing: 0;
                          line-height: 18px;
                          background: transparent;
                          border: none;
                          width: 186px;
                          padding-top : 6px;
                          padding-left: 11px;
                          
                          &:focus {
                              outline: none;
                          }
                      }
                  }
              }

              .assistButton {
                  margin-left: 10px;
                  padding-top: 8px;
                  padding-right: 9px;
                  padding-left: 12px;
                  box-sizing: border-box;
                  width: 34px;
                  height: 34px;
                  border: 1px solid rgba(109,135,144,0.2);
                  border-radius: 5px;
                  background-color: #FFFFFF;
                  box-shadow: 0 4px 4px 0 rgba(109,135,144,0.1);
                  cursor: pointer;
                  &:hover {
                      background-color: rgb(223, 246, 251);
                  }
              }
              .plusButton {
                  margin-left: 10px;
                  padding-top: 8px;
                  padding-right: 9px;
                  padding-left: 11px;
                  box-sizing: border-box;
                  width: 34px;
                  height: 34px;
                  border: 1px solid rgba(109,135,144,0.2);
                  border-radius: 5px;
                  background-color: #FFFFFF;
                  box-shadow: 0 4px 4px 0 rgba(109,135,144,0.1);
                  cursor: pointer;
                  &:hover {
                      background-color: rgb(223, 246, 251);
                  }
              }
          }
          .contacts__body {
              margin-top: 10px;
              overflow-y: auto;
              max-height: 250px;
              height: calc(100% - 62px);
              
              .contact-content {
                  .contentTotal {
                      padding-left: 15px;
                      background-color: white;
                      padding-top: 8px;
                      padding-bottom:15px;
                      cursor: pointer;
                      .content__header {
                          color: #1C323F !important;
                          font-family: "DM Sans";
                          font-size: 14px;
                          font-weight: bold;
                          letter-spacing: 0;
                      }
                      .content__edit {
                          position: relative;
                          visibility: hidden;
                          float: right;
                          right: 11px;
                          top: -90px;
                          padding-left: 7px;
                          padding-top: 3px;
                          box-sizing: border-box;
                          height: 26px;
                          width: 26px;
                          border: 1px solid rgba(109,135,144,1);
                          border-radius: 12px;
                          background-color: #FFFFFF;
                          box-shadow: 0 4px 4px 0 rgba(109,135,144,0.1);
                      }
                      .content__body {
                          p{
                              margin-top: 0px;
                              opacity: 0.7;
                              color: #1C323F;
                              font-family: "DM Sans";
                              font-size: 12px;
                              letter-spacing: 0;
                              height: 8px;
                          }
                          h1 {

                              width: 147px;
                              opacity: 0.7;
                              color: #1C323F;
                              font-family: "DM Sans";
                              font-size: 12px;
                              font-weight: bold;
                              letter-spacing: 0;
                              height: 10px;
                              margin-top: 6px;
                          }
                          h1:hover {
                              text-decoration: underline;
                          }
                      }
                      &:hover {
                          background-color:rgb(238, 247, 250);
                      }
                  }
                  
                  
              }
              .content:hover {
                  background-color:rgba(33,159,207,0.2);
                  .content__edit{
                      visibility: visible;
                  }
              }
          }
          
      }
  }
}
.contacts:hover {
  background-color: rgba(33, 159, 207, 0.2);
}`;

checkbox_html = `
<div class="setting_checkbox"  (click) = "toggleInput()">
    <div class="icon__unselected"  *ngIf = "setting_status == false">
        <img src="assets/img/checkbox-icon-unselected.svg" />
    </div>
    <div class="icon__selected"  *ngIf = "setting_status == true">
        <img src="assets/img/checkbox-icon-selected.svg" />
    </div>
    <div class="content--blue">
        Set my status to Not Ready after this wrap up
    </div>
</div>`;
checkbox_css = `
.setting_checkbox {
  display: flex;
  cursor: pointer;
  .icon__unselected {
      margin-right: 10px;
  }
  .icon__selected {
      margin-right: 10px;
  }
  .content--blue {
      height: 18px;
      width: 301px;
      color: #219FCF;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 18px;
  }
  .content--normal {
      width: 300px;
      color: #1C323F;
      font-family: "DM Sans";
      font-size: 14px;
      letter-spacing: 0;
  }
}`;

checkbox_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  setting_status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleInput () {
    this.setting_status = !this.setting_status;
  }
}
`

radio_button_html = `
<div class="radio-group">
    <div class="radio-group__item">
        <input type="radio" id="today" name="byTimeRange" value="today" [(ngModel)]="filterValues.time.value"> <label for="today">Today</label>
    </div>
    <div class="radio-group__item">
        <input type="radio" id="previousday" name="byTimeRange" value="previousday" [(ngModel)]="filterValues.time.value"> <label for="previousday">Previous Day</label><br>
    </div>
    <div class="radio-group__item">
        <input type="radio" id="thisweek" name="byTimeRange" value="thisweek" [(ngModel)]="filterValues.time.value"> <label for="thisweek">This Week</label><br>
    </div>
</div>`;
radio_button_css = `
.radio-group {
  .radio-group__item {
      display: flex;
      // cursor: pointer;
      margin-bottom: 6px;
      label {
          cursor: pointer;
          width: 160px;
          color: #07090a;
          font-family: "DM Sans";
          font-size: 12px;
          letter-spacing: 0;
          
          margin-left: 8px;
      }
      input {
          cursor: pointer;
      }
  }
}`;

buttons_html = `
<div class="btns">
    <div class="btns__cancel">
        <img src="assets/img/cancel-icon.svg" />
        <span>Cancel</span>
    </div>
    <div  class="btns__confirm">
        <img src="assets/img/confirm-icon.svg" />
        <span>Add New Intent </span>
    </div>
</div>`;

buttons_css = `
.btns {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  bottom: 0;
  width: calc(100% - 8px);
  .btns__cancel {
  box-sizing: border-box;
  height: 40px;
  width: 50%;
  cursor: pointer;
  // border: 1px solid #E3E5E5;
  border-radius: 0 0 0 10px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
      margin-left: 5px;
      opacity: 0.7;
      color: #1C323F;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 18px;
  }
  &:hover {
      background-color: #BDCCD2;
  }
  }
  
  .btns__confirm {
  height: 40px;
  width: 50%;
  // border-radius: 0 0 10px 0;
  background-color: #219FCF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 0px;
  cursor: pointer;
  span {
      margin-left: 5px;
      color: #FFFFFF;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 18px;
      
  }
  &:hover {
      background-color: #03729e;
  }
  }
  }`;

  cobrowse_button_html = `
  <div
          #footer
          class="footer-actions"
      >
          <div
              class="left"
          >
              <ul
                  class="popover DropMenuCo"
                  id="co-browse__dropdown"
              >
                  <li class="">
                      <img
                          class="normal"
                          src="assets/img/footer-menu-agent-cobrowse-icon.svg"
                      />
                      <img
                          class="active"
                          src="assets/img/footer-menu-agent-cobrowse-hover-icon.svg"
                      />
                      <span>Agent CoBrowse</span>
                  </li>
                  <li
                      class=""
                  >
                      <img
                          class="normal"
                          src="assets/img/footer-menu-customer-cobrowse-icon.svg"
                      />
                      <img
                          class="active"
                          src="assets/img/footer-menu-customer-cobrowse-hover-icon.svg"
                      />
                      <span>Customer CoBrowse</span>
                  </li>
              </ul>
              <button
                  data-popover-open="#co-browse__dropdown"
                  class="co-browse_button"
              >
                  <img src="assets/img/footer-cobrowse-icon.svg" />
                  <span>CoBrowse</span>

                  <img
                      class="up-icon"
                      style="margin-left: 34px"
                      src="assets/img/up-arrow-icon.svg"
                  />
                  <img
                      class="down-icon"
                      style="margin-left: 34px"
                      src="assets/img/down-arrow-icon.svg"
                  />
              </button>
          </div>
          <div class="center">
              <ul
                  class="DropMenuEs popover"
                  #DropMenuEs
                  id="es__dropdown"
              >
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  class="normal"
                                  src="assets/img/esmenu-call-customer-icon.svg"
                              />
                              <img
                                  class="hover"
                                  src="assets/img/esmenu-call-customer-hover-icon.svg"
                              />
                          </span>

                          <span>Call Customer</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  style="margin-top: 2px;"
                                  class="normal"
                                  src="assets/img/esmenu-email-customer-icon.svg"
                              />
                              <img
                                  style="margin-top: 2px;"
                                  class="hover"
                                  src="assets/img/esmenu-email-customer-hover-icon.svg"
                              />
                          </span>
                          <span>Email Customer</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  class="normal"
                                  src="assets/img/esmenu-manually-link-icon.svg"
                              />
                              <img
                                  class="hover"
                                  src="assets/img/esmenu-manually-link-hover-icon.svg"
                              />
                          </span>
                          <span>Manually Link</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line subnav"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  style="margin-top: 2px;"
                                  class="normal"
                                  src="assets/img/esmenu-transfer-chat-icon.svg"
                              />
                              <img
                                  style="margin-top: 2px;"
                                  class="hover"
                                  src="assets/img/esmenu-transfer-chat-hover-icon.svg"
                              />
                          </span>
                          <span>Transfer Chat</span>
                          <span class="subicon">
                              <img src="assets/img/right-direction-icon.svg" />
                          </span>
                      </a>

                      <ul
                          class="DropMenuEs__line__submenu"
                          #DropMenuEs__line__submenu
                      >
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-queue.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-queue-hover.svg"
                              />
                              <span>To Queue</span>
                          </li>
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-supervisor.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-supervisor-hover.svg"
                              />
                              <span>To Supervisor</span>
                          </li>
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-agent.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-agent-hover.svg"
                              />
                              <span>To Agent</span>
                          </li>
                      </ul>
                  </li>
              </ul>
              <button
                  class="escalate_button"
                  data-popover-open="#es__dropdown"
              >
                  <img src="assets/img/escalate-button-icon.svg" />
                  <span>Escalate</span>
                  <img
                      class="up-icon"
                      style="margin-left: 34px"
                      src="assets/img/up-arrow-icon.svg"
                  />
                  <img
                      class="down-icon"
                      style="margin-left: 34px"
                      src="assets/img/down-arrow-icon.svg"
                  />
              </button>
          </div>
          <div
              class="right"
          >
              <button class="wrap-up-chat_button active">
                  <img src="assets/img/endinteraction-button-icon.svg" />
                  <b>End Interaction</b>
              </button>
          </div>
      </div>`;

  cobrowse_button_css = `
  .footer-actions {
    font-family: 'DM Sans';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    display: flex;
    // background: var(--body-background);
    
    & .left, & .center, & .right{
    
    // display: inline-block;
    // background: black;
    // width: 33.333333%;
    flex-basis: 100%;
    position: relative;
    // background:#F0F5F7;
    &.two_cols {
        width: 50%;
    }
    
    & > button {
        width: 100%;
        height: 40px;
        border: 0;
        font-size: 14px;
        line-height: 14px;
        cursor: pointer;
    }
    
    & .co-browse_button {
        border-bottom-left-radius: 12px;
        background-color: #F0F5F7;
        color: #517785;
        font-family: 'DM Sans';
        box-sizing: border-box;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover {
            background-color: #BDCCD2;
            opacity: 1;
            color: #517785;
        }
        &.active {
            background-color: red;
        }
        span {
            margin-left: 5px;
        }
        &.clicked {
            background-color: #BDCCD2;
        }
    }
    
    .DropMenuCo {
        position: absolute; 
        list-style: none;
        margin:0px;            
        bottom: 43px;
        padding:0px;   
        z-index: 100;        
        box-sizing: border-box;
        font-family: 'DM Sans';
        height: 72px;
        flex-basis: 100%;
        // width: 33.333333%;
        width: 100%;
        
        border: 1px solid rgba(109,135,144,0.15);
        border-radius: 10px 10px 10px 0;
        background-color: #FFFFFF;
        box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
        // &.two_cols_menu {
        //     width: calc(50%);
        // }
        li {
            color: #1C323F;
            font-family: "DM Sans";
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 17px;
            font-family: 'DM Sans';
            height: 35px;
            background-color: white;
            padding-left: 12px;            
            border-bottom: 1px solid #6D879015;            
            display: flex;
            align-items: center;
            vertical-align: middle;
            cursor: pointer;  
            span {
                margin-left: 9.98px;
            }
            .normal { display: block; }
            .active { display: none; }
        }
        li:hover {
            // background-color: yellow;
            color: #219FCF;
            svg {
                path{
                    fill: #219fcf;
                }
            }
            .normal { display: none; }
            .active { display: block; }
        }
    }
    }
    }`;

    footer_actions_button_html = `
    <div
          #footer
          class="footer-actions"
      >
          <div class="left">
              <ul
                  class="DropMenuEs popover"
                  #DropMenuEs
                  id="es__dropdown1"
              >
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  class="normal"
                                  src="assets/img/esmenu-call-customer-icon.svg"
                              />
                              <img
                                  class="hover"
                                  src="assets/img/esmenu-call-customer-hover-icon.svg"
                              />
                          </span>

                          <span>Call Customer</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  style="margin-top: 2px;"
                                  class="normal"
                                  src="assets/img/esmenu-email-customer-icon.svg"
                              />
                              <img
                                  style="margin-top: 2px;"
                                  class="hover"
                                  src="assets/img/esmenu-email-customer-hover-icon.svg"
                              />
                          </span>
                          <span>Email Customer</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  class="normal"
                                  src="assets/img/esmenu-manually-link-icon.svg"
                              />
                              <img
                                  class="hover"
                                  src="assets/img/esmenu-manually-link-hover-icon.svg"
                              />
                          </span>
                          <span>Manually Link</span>
                      </a>
                  </li>
                  <li
                      class="DropMenuEs__line subnav"
                  >
                      <a>
                          <span class="mainicon">
                              <img
                                  style="margin-top: 2px;"
                                  class="normal"
                                  src="assets/img/esmenu-transfer-chat-icon.svg"
                              />
                              <img
                                  style="margin-top: 2px;"
                                  class="hover"
                                  src="assets/img/esmenu-transfer-chat-hover-icon.svg"
                              />
                          </span>
                          <span>Transfer Chat</span>
                          <span class="subicon">
                              <img src="assets/img/right-direction-icon.svg" />
                          </span>
                      </a>

                      <ul
                          class="DropMenuEs__line__submenu"
                          #DropMenuEs__line__submenu
                      >
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-queue.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-queue-hover.svg"
                              />
                              <span>To Queue</span>
                          </li>
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-supervisor.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-supervisor-hover.svg"
                              />
                              <span>To Supervisor</span>
                          </li>
                          <li
                              class="submenu__item"
                          >
                              <img
                                  style=" margin-right: 11px"
                                  class="normal"
                                  src="assets/img/essubmenu-to-agent.svg"
                              />
                              <img
                                  style=" margin-right: 11px"
                                  class="hover"
                                  src="assets/img/essubmenu-to-agent-hover.svg"
                              />
                              <span>To Agent</span>
                          </li>
                      </ul>
                  </li>
              </ul>
              <button
                  class="escalate_button"
                  data-popover-open="#es__dropdown1"
              >
                  <img src="assets/img/escalate-button-icon.svg" />
                  <span>Escalate</span>
                  <img
                      class="up-icon"
                      style="margin-left: 34px"
                      src="assets/img/up-arrow-icon.svg"
                  />
                  <img
                      class="down-icon"
                      style="margin-left: 34px"
                      src="assets/img/down-arrow-icon.svg"
                  />
              </button>
          </div>
          <div class="center">
            <button class="hold_button" data-popover-open="#retrieve-button">
                <img  src="assets/img/call-hold-icon.svg" />
                <span>Hold</span>
            </button>
            <button class="retreive_button"  id="retrieve-button" data-popover-close="#retrieve-button">
                <img  src="assets/img/call-retrieve-icon.svg" />
                <span>Retrieve</span>
            </button>
          </div>
          <div
              class="right"
          >
              <button class="wrap-up-chat_button active">
                  <img src="assets/img/endinteraction-button-icon.svg" />
                  <b>End Interaction</b>
              </button>
          </div>
      </div>`;

  footer_actions_css = `
  .footer-actions {
    font-family: 'DM Sans';
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    display: flex;
    // background: var(--body-background);
    
    & .left, & .center, & .right{
    
    // display: inline-block;
    // background: black;
    // width: 33.333333%;
    flex-basis: 100%;
    position: relative;
    // background:#F0F5F7;
    &.two_cols {
        width: 50%;
    }
    
    & > button {
        width: 100%;
        height: 40px;
        border: 0;
        font-size: 14px;
        line-height: 14px;
        cursor: pointer;
    }
    
    & .co-browse_button {
        border-bottom-left-radius: 12px;
        background-color: #F0F5F7;
        color: #517785;
        font-family: 'DM Sans';
        box-sizing: border-box;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover {
            background-color: #BDCCD2;
            opacity: 1;
            color: #517785;
        }
        &.active {
            background-color: red;
        }
        span {
            margin-left: 5px;
        }
        &.clicked {
            background-color: #BDCCD2;
        }
    }
    
    .DropMenuCo {
        position: absolute; 
        list-style: none;
        margin:0px;            
        bottom: 43px;
        padding:0px;   
        z-index: 100;        
        box-sizing: border-box;
        font-family: 'DM Sans';
        height: 72px;
        flex-basis: 100%;
        // width: 33.333333%;
        width: 100%;
        
        border: 1px solid rgba(109,135,144,0.15);
        border-radius: 10px 10px 10px 0;
        background-color: #FFFFFF;
        box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
        // &.two_cols_menu {
        //     width: calc(50%);
        // }
        li {
            color: #1C323F;
            font-family: "DM Sans";
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 17px;
            font-family: 'DM Sans';
            height: 35px;
            background-color: white;
            padding-left: 12px;            
            border-bottom: 1px solid #6D879015;            
            display: flex;
            align-items: center;
            vertical-align: middle;
            cursor: pointer;  
            span {
                margin-left: 9.98px;
            }
            .normal { display: block; }
            .active { display: none; }
        }
        li:hover {
            // background-color: yellow;
            color: #219FCF;
            svg {
                path{
                    fill: #219fcf;
                }
            }
            .normal { display: none; }
            .active { display: block; }
        }
    }
    }
    }`;

  filter_button_html = `
  <div class="filterbutton" data-popover-open="#filter-menu">
          <!--<div class="filterbutton__content">-->
              <img  src="assets/img/filterbutton-icon.svg" class="normal-status"/>
              <span class="normal-status" class="normal-statuss">Filter</span>
              <img  src="assets/img/filterbutton-close-icon.svg" class="active-status"/>
              <span class="active-status">Close</span>
          <!--</div>-->
      </div>
      <!-- <div class="filterbutton--close" data-popover-close="#filter-menu" id="filter-menu">
          <img  src="assets/img/filterbutton-close-icon.svg" />
          <span>Close</span>
      </div> -->
      <div class="filterMenu popover" id="filter-menu">
          <div class="filterMenu__left">
              <div class="header">
                  By Time Range
              </div>
              <div class="body">
                  <div class="item">
                      <input type="radio" id="today" name="byTimeRange" value="today" [(ngModel)]="filterValues.time.value"> <label for="today">Today</label>
                  </div>
                  <div class="item">
                      <input type="radio" id="previousday" name="byTimeRange" value="previousday" [(ngModel)]="filterValues.time.value"> <label for="previousday">Previous Day</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="thisweek" name="byTimeRange" value="thisweek" [(ngModel)]="filterValues.time.value"> <label for="thisweek">This Week</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="previouswork" name="byTimeRange" value="previouswork" [(ngModel)]="filterValues.time.value"> <label for="previouswork">Previous Week</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="thismonth" name="byTimeRange" value="thismonth" [(ngModel)]="filterValues.time.value"> <label for="thismonth">This Month</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="previousweek" name="byTimeRange" value="previousweek" [(ngModel)]="filterValues.time.value"> <label for="previousweek">Previous Week</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="last7days" name="byTimeRange" value="last7days" [(ngModel)]="filterValues.time.value"> <label for="last7days">Last 7 Days</label><br>
                  </div>
                  <div class="item">
                      <input type="radio" id="last30days" name="byTimeRange" value="last30days" [(ngModel)]="filterValues.time.value"> <label for="last30days">Last 30 Days</label><br>
                  </div>
              </div>
          </div>
          <div class="filterMenu__middle">
              <div class="header">
                  By Channel
              </div>
              <div class="body">
                  <div class="item">
                      <input type="checkbox" id="whatsapp" value="whatsapp" [(ngModel)]="filterValues.channel.whatsapp"> <label for="whatsapp">Whatsapp</label>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="facebookmessenger" value="facebookmessenger" [(ngModel)]="filterValues.channel.facebookMessenger"> <label for="facebookmessenger">Facebook Messenger</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="sms" value="sms" [(ngModel)]="filterValues.channel.sms"> <label for="sms" >SMS</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="webchat" value="webchat" [(ngModel)]="filterValues.channel.webchat"> <label for="webchat">Webchat</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="skype" value="skype" [(ngModel)]="filterValues.channel.skype"> <label for="skype">Skype</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="msteams" value="msteams" [(ngModel)]="filterValues.channel.msteams"> <label for="msteams">MS Teams</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="hangout" value="hangout" [(ngModel)]="filterValues.channel.hangout"> <label for="hangout">Hangout</label><br>
                  </div>
              </div>
          </div>
          <div class="filterMenu__right">
              <div class="header">
                  By Type
              </div>
              <div class="body">
                  <div class="item">
                      <input type="checkbox" id="chat" value="chat" [(ngModel)]="filterValues.type.chat"> <label for="chat">Chat</label>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="voicecall" value="voicecall" [(ngModel)]="filterValues.type.voicecall"> <label for="voicecall">Voice Call</label><br>
                  </div>
                  <div class="item">
                      <input type="checkbox" id="email" value="email" [(ngModel)]="filterValues.type.email"> <label for="email">Email</label><br>
                  </div>
              </div>
          </div>
      </div>`;

  filter_button_css = `
  .filterbutton {
    position: fixed;
    box-sizing: border-box;
    bottom: 50px;
    right: 20px;
    height: 32px;
    width: 85px;
    cursor: pointer;
    border-radius: 16px;
    background-color: #219FCF;
    display: flex;
    justify-content: center;
    display: flex;
    vertical-align: middle;
    align-items: center;
    box-shadow: 0 4px 4px 0 rgba(109,135,144,0.1), 0 7px 14px 0 rgba(0,153,211,0.5);
    display: flex;
    color: #FFFFFF;
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 14px;
    span {
    margin-left: 4px;
    }
    &.clicked {
    span {
        margin-left: 0px;
        // color: red;
    }
    }
    &:hover {
    background-color: rgb(32, 137, 179);
    cursor: pointer;
    }
    }    
    
    .popover {
    position: absolute;
    z-index: 10;
    border-radius: 4px;
    background-color: #FFF;
    box-shadow: 0px 0px 6px rgba(19, 53, 98, 0.05), 0px 15px 30px rgba(19, 53, 98, 0.1);
    pointer-events: none;
    opacity: 0;
    transition-duration: 0.125s;
    transition-property: opacity;
    }
    
    .filterMenu {
    position: fixed;
    bottom: 87px;
    right: 12px;
    width: 534px;
    height: 252px;
    z-index: 2000;
    border: 1px solid rgba(109,135,144,0.15);
    border-radius: 10px 0 0 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
    box-sizing: border-box;
    display: flex;
    .filterMenu__left {
    height: 222px;
    width: 33%;
    margin-top: 14.5px;
    margin-left: 15.5px;
    
    }
    .header {
    height: 16px;
    width: 85px;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    margin-bottom: 8px;
    margin-left: 5.5px;
    }
    input {
    margin-bottom: 4px;
    }
    .item {
    // cursor: pointer;
    margin-bottom: 6px;
    label {
        cursor: pointer;
        width: 160px;
        color: #07090a;
        font-family: "DM Sans";
        font-size: 12px;
        letter-spacing: 0;
        
        margin-left: 8px;
    }
    input {
        cursor: pointer;
    }
    }
    .filterMenu__middle {
    height: 222px;
    width: 33%;
    margin-top: 14.5px;
    margin-left: 15.5px;
    }
    .filterMenu__right
    {
    height: 222px;
    width: 33%;
    margin-top: 14.5px;
    margin-left: 15.5px;
    }
    }`;

    filter_button_script = `
    import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-filter-button',
templateUrl: './filter-button.component.html',
styleUrls: ['./filter-button.component.scss']
})

export class FilterButtonComponent implements OnInit {

constructor() { }

ngOnInit(): void { }

}`;

tool_bar_html = `
<div class="tool-bar">
          <div class="tool-bar__left">
              <span class="tool-bar-button">
                  <img src="assets/img/logo.svg">
              </span>
              <a href="javascript:;" class="tool-bar-button tool-bar-button__home">
                <img class="normal" src="assets/img/nav-home-icon.svg">
                <img class="hover" src="assets/img/nav-home-hover-icon.svg">
              </a>
              <a href="javascript:;" class="tool-bar-button tool-bar-button__search">
                  <img class="normal" src="assets/img/nav-search-icon.svg">
                  <img class="hover" src="assets/img/nav-search-hover-icon.svg">
              </a>
              <a href="javascript:;" class="tool-bar-button tool-bar-button__warning">
                  <img class="normal" src="assets/img/nav-warning-icon.svg">
                  <img class="hover" src="assets/img/nav-warning-hover-icon.svg">
              </a>
              <a href="javascript:;" class="tool-bar-button tool-bar-button__user" data-popover-open="#user-menu">
                  <img class="normal" src="assets/img/nav-user-icon.svg">
                  <img class="hover" src="assets/img/nav-user-hover-icon.svg">
              </a>
              <ul class="popover" id="user-menu">
                  <li class="multi-level-dropdown__status multi-level-dropdown__gray">
                      <span>Timeline</span>
                  </li>
                  <li class="multi-level-dropdown__status multi-level-dropdown__danger" 
                  >
                      <span>Log Out</span>
                      <span style="float: right;">
                          <img src="assets/img/right-direction-icon.svg">
                      </span>
                      <ul >
                          <li class="multi-level-dropdown__status multi-level-dropdown__gray"
                          >
                              <span>End of the day</span>
                          </li>        
                          <li class="multi-level-dropdown__status multi-level-dropdown__gray" (click)="logout()"
                          >
                              <span>Meetig</span>
                          </li>  
                      </ul>
                  </li>
              </ul>
          </div>
      </div>`;

  tool_bar_css = `
  .tool-bar{
    height: 29px;
    margin: 4px;    
    display: flex;
    
    .tool-bar__left{
    
    width: auto;
    margin-right: auto;
    margin-left: 0;
    padding-left: 10px;
    display: inline-flex;
    
    .tool-bar-button{
        height: 20px;
        width: 21px;
        display: inline-block;
        margin: 4px;
        margin-right: 15px;
        
        &:hover{
            
            g{
                fill: #FFF;    
            }
            
        }
    
        img{
            width: 100%;
            height: auto;                    
        }
    
        &.tool-bar-button__home{
            width: 17px;
            height: 17px;
            margin-left: 0px;
            margin-top: 5px;
            .hover{
                display: none;
            }
            .normal {
                display: block;
            }
            &:hover{
                .hover{
                    display: block;
                }
                .normal {
                    display: none;
                }
            }
            
        }
    
        &.tool-bar-button__search{
            width: 17px;
            height: 17px;
            margin-left: 0px;
            margin-top: 6px;
            .hover{
                display: none;
            }
            .normal {
                display: block;
            }
            &:hover{
                .hover{
                    display: block;
                }
                .normal {
                    display: none;
                }
            }
        }
    
        &.tool-bar-button__warning{
            width: 17px;
            height: 17px;
            margin-left: 0px;
            margin-top: 5px;
            .hover{
                display: none;
            }
            .normal {
                display: block;
            }
            &:hover{
                .hover{
                    display: block;
                }
                .normal {
                    display: none;
                }
            }
        }
        &.tool-bar-button__user{
            width: 25px;
            height: 15px;
            margin-left: 0px;
            margin-top: 6px;
            .hover{
                display: none;
            }
            .normal {
                display: block;
            }
            &:hover{
                .hover{
                    display: block;
                }
                .normal {
                    display: none;
                }
                
            }
            &.clicked {
                .hover{
                    display: block;
                }
                .normal {
                    display: none;
                }
            }
        }
        &.tool-bar-button__theme{
            width: 16px;
            height: 16px;
            margin-left: 0px;
            margin-top: 7px;
        }
    }
    }
    
    .tool-bar__right{
    width:308px;
    
    .tool-bar__dropdown{
        display: inline-flex;
        height: 27px;
        width: 86px;
        border: 1px solid #5b9e7340;                    
        border-radius: 15px;
        text-decoration: none;
        margin-left: 8px;
        box-shadow: 0 1px 0 0 rgba(28,50,63,0.1);
    
        .bool-bar__dropdown__img-second{
            height: 5px;
            width: 8px;                        
            opacity: 0.6;
            padding: 11px;
            padding-left: 7px;
        }
    
        span{
            color: #5B9E73;
            font-family: "DM Sans";
            font-size: 13px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 17px;
            text-align: center;
            display: inline-block;
            padding-top: 6px;
        }
    
        .bool-bar__dropdown__img-first{
            padding: 6px;
            height: 15px;
            padding-right: 8px;
            width: 15px;
            padding-left: 6px;
        }
    }
    }
    }`;

    toolbar_script = `
    import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-nav-bar',
templateUrl: './nav-bar.component.html',
styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}
}`;

multilevel_dropdown_html = `
<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--danger" >
    <svg class="multi-level-dropdown__button__img-first"
        width="15px" height="15px" viewBox="0 0 15 15">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="UI-Kit_C1" transform="translate(-2690.000000, -791.000000)" fill="#459950" fill-rule="nonzero">
                <path
                    d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                    id="chat_green-1"></path>
            </g>
        </g>
    </svg>        
    <span
        class="multi-level-dropdown__timer">10:34</span>
    <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
        viewBox="0 0 8 5" fill="none">
        <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>        
    <span class="multi-level-dropdown__tooltip">NOT READY, LUNCH</span>
    <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
    <!-- <div class="pulse" style="animation-delay: 1s"></div> -->
    <!-- <div class="pulse" style="animation-delay: 0s"></div> -->
  </span>
  
  <!-- <div class="pulse" style="animation-delay: 0s"></div> -->
  <!-- <div class="pulse" style="animation-delay: 0s"></div> -->
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--danger" >
<svg class="multi-level-dropdown__button__img-first"
    width="15px" height="15px" viewBox="0 0 14 12">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-Kit_C1" transform="translate(-2763.000000, -793.000000)" fill="#459950" fill-rule="nonzero">
            <path
                d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                id="email_green-1"></path>
        </g>
    </g>
</svg>       
  <span
      class="multi-level-dropdown__timer">10:34</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">NOT READY, LUNCH</span>
</span>
<div class="pulse" style="animation-delay: 0s"></div>
<div class="pulse" style="animation-delay: 1s"></div>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--danger" >
  <svg class="multi-level-dropdown__button__img-first"
      width="15px" height="15px" viewBox="0 0 15 15">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="UI-Kit_C1" transform="translate(-2727.000000, -792.000000)" fill="#459950" fill-rule="nonzero">
              <path
                  d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                  id="call_green-1"></path>
          </g>
      </g>
  </svg>
  <span
      class="multi-level-dropdown__timer">10:34</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">NOT READY, LUNCH</span>
</span>
<div class="pulse" style="animation-delay: 0s"></div>
<div class="pulse" style="animation-delay: 1s"></div>
</div>

<!-- outservice button -->
<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--gray" >
    <svg class="multi-level-dropdown__button__img-first"
        width="15px" height="15px" viewBox="0 0 15 15">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="UI-Kit_C1" transform="translate(-2690.000000, -791.000000)" fill="#459950" fill-rule="nonzero">
                <path
                    d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                    id="chat_green-1"></path>
            </g>
        </g>
    </svg>        
    <span
        class="multi-level-dropdown__timer--gray">Log Out</span>
    <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
        viewBox="0 0 8 5" fill="none">
        <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>        
    <span class="multi-level-dropdown__tooltip">LOG OUT, End Of The Day</span>
  </span>
  <div class="pulse" style="animation-delay: 0s"></div>
  <div class="pulse" style="animation-delay: 1s"></div>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--gray" >
<svg class="multi-level-dropdown__button__img-first"
    width="15px" height="15px" viewBox="0 0 14 12">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-Kit_C1" transform="translate(-2763.000000, -793.000000)" fill="#459950" fill-rule="nonzero">
            <path
                d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                id="email_green-1"></path>
        </g>
    </g>
</svg>       
  <span
      class="multi-level-dropdown__timer--gray">Log Out</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">LOG OUT, End Of The Day</span>
  <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--gray" >
  <svg class="multi-level-dropdown__button__img-first"
      width="15px" height="15px" viewBox="0 0 15 15">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="UI-Kit_C1" transform="translate(-2727.000000, -792.000000)" fill="#459950" fill-rule="nonzero">
              <path
                  d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                  id="call_green-1"></path>
          </g>
      </g>
  </svg>
  <span
      class="multi-level-dropdown__timer--gray">Log Out</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">LOG OUT, End Of The Day</span>
  <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<!-- wrapup button -->
<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--warning" >
  <svg class="multi-level-dropdown__button__img-first"
      width="15px" height="15px" viewBox="0 0 15 15">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="UI-Kit_C1" transform="translate(-2690.000000, -791.000000)" fill="#459950" fill-rule="nonzero">
              <path
                  d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                  id="chat_green-1"></path>
          </g>
      </g>
  </svg>        
  <span
      class="multi-level-dropdown__timer--warning">10:34</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">WRAP UP, Query resolved</span>
  <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--warning" >
<svg class="multi-level-dropdown__button__img-first"
  width="15px" height="15px" viewBox="0 0 14 12">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="UI-Kit_C1" transform="translate(-2763.000000, -793.000000)" fill="#459950" fill-rule="nonzero">
          <path
              d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
              id="email_green-1"></path>
      </g>
  </g>
</svg>       
<span
    class="multi-level-dropdown__timer--warning">10:34</span>
<svg class="multi-level-dropdown__button__img-second" width="8" height="5"
    viewBox="0 0 8 5" fill="none">
    <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>        
<span class="multi-level-dropdown__tooltip">WRAP UP, Query resolved</span>
<div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button multi-level-dropdown__button--warning" >
<svg class="multi-level-dropdown__button__img-first"
    width="15px" height="15px" viewBox="0 0 15 15">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-Kit_C1" transform="translate(-2727.000000, -792.000000)" fill="#459950" fill-rule="nonzero">
            <path
                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                id="call_green-1"></path>
        </g>
    </g>
</svg>
<span
    class="multi-level-dropdown__timer--warning">10:34</span>
<svg class="multi-level-dropdown__button__img-second" width="8" height="5"
    viewBox="0 0 8 5" fill="none">
    <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#d63139" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>        
<span class="multi-level-dropdown__tooltip">WRAP UP, Query resolved</span>
<div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<!-- ready button -->
<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button" >
    <svg class="multi-level-dropdown__button__img-first"
        width="15px" height="15px" viewBox="0 0 15 15">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="UI-Kit_C1" transform="translate(-2690.000000, -791.000000)" fill="#459950" fill-rule="nonzero">
                <path
                    d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                    id="chat_green-1"></path>
            </g>
        </g>
    </svg>        
    <span
        >READY</span>
    <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
        viewBox="0 0 8 5" fill="none">
        <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#5B9E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>        
    <span class="multi-level-dropdown__tooltip">READY</span>
    <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
  </span>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button" >
<svg class="multi-level-dropdown__button__img-first"
    width="15px" height="15px" viewBox="0 0 14 12">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-Kit_C1" transform="translate(-2763.000000, -793.000000)" fill="#459950" fill-rule="nonzero">
            <path
                d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                id="email_green-1"></path>
        </g>
    </g>
</svg>       
  <span
      >READY</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#5B9E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">READY</span>
  <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>

<div class="multi-level-dropdown">
<span #channelButton class="multi-level-dropdown__button" >
  <svg class="multi-level-dropdown__button__img-first"
      width="15px" height="15px" viewBox="0 0 15 15">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="UI-Kit_C1" transform="translate(-2727.000000, -792.000000)" fill="#459950" fill-rule="nonzero">
              <path
                  d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                  id="call_green-1"></path>
          </g>
      </g>
  </svg>
  <span
      >READY</span>
  <svg class="multi-level-dropdown__button__img-second" width="8" height="5"
      viewBox="0 0 8 5" fill="none">
      <path opacity="0.6" d="M1 1L4 4L7 1" stroke="#5B9E73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>        
  <span class="multi-level-dropdown__tooltip">READY</span>
  <div class="pulse" style="animation-delay: 0s"></div>
    <div class="pulse" style="animation-delay: 1s"></div>
</span>
</div>`;

multilevel_dropdown_css = `
.multi-level-dropdown {
  display: inline-flex;
  position: relative;
  margin: 42px 10px 0 10px;
  
  .multi-level-dropdown__button{
  height: 50px;
  width: 162px;
  border-radius: 10px;
  background-color: #5B9E73;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 7px;
  
  &:hover {
      background-color: rgb(61, 132, 77);
  
      span {
          // color: #3BBE6A;
      }
      .multi-level-dropdown__timer {
          // color: #D63139;
      }
  }
  &.multi-level-dropdown__button--clicked {
      background-color: rgb(52, 112, 73);
  }
  &.multi-level-dropdown__button--danger {
      background-color: #DD5050;
      &:hover {
          background-color: #D4000B;
      }
      &.multi-level-dropdown__button--clicked{
          background-color: #D4000B;
      }
  }
  
  &.multi-level-dropdown__button--warning {
      background-color: #E4813C;
      &:hover {
          background-color: #d26c26;
      }
      &.multi-level-dropdown__button--clicked{
          background-color: #d26c26;
      }
  }
  
  &.multi-level-dropdown__button--gray {
      background-color: #6D8790;
      &:hover {
          background-color: #49656f;
      }
      &.multi-level-dropdown__button--clicked{
          background-color: #49656f;
      }
  }
  
  &.multi-level-dropdown__button--dangerclicked {
      background-color: rgb(182, 0, 9);
  }
  
  .multi-level-dropdown__button__img-second{
      height: 5px;
      width: 8px;
      padding: 11px 7px;
      position: absolute;
      right: 0;           
  }
  
  span{
      color: #FFFFFF;
      font-family: "DM Serif";
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0;
      line-height: 12px;
      text-align: center;
      
  }
  
  .multi-level-dropdown__button__img-first{            
      position: absolute;
      top: 6px;
      left: 9px;           
  }
  
  .multi-level-dropdown__timer{
      font-family: "Roboto Mono";
      // color: #D85259;
      color: #FFFFFF;
  }
  
  
  &:hover{
      ul{
          display: block;
      }
  }
  
  }
  
  
  ul{        
  position: absolute;
  list-style: none;
  margin-top:30px;
  right: 0;
  padding:0px;
  border: 1px solid rgba(109,135,144,0.15);        
  border-radius: 10px 0px 10px 0px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06);
  width: 133px;
  z-index: 100;
  text-align: left;
  }
  
  li {
  height: 27px;
  color: #5B9E73;
  font-family: "DM Sans";
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #6D879015;
  /* opacity: 0.15; */
  padding-top: 8px;      
  cursor: pointer;  
  
  &:first-child{
      border-radius: 10px 0px 0px 0px;
  }
  
  &:last-child{
      border-radius: 0px 0px 10px 0px;
  }
  
  & > span {
      svg{
          right: 0;
          position: absolute;
          margin-right: 7.25px;
          margin-top: 2.25px;            
      }
  }
  
  & > ul{
      display: none;
  }        
  
  &:hover {
      background: #E6F3F7;
  
      > ul {                
          display: inline-block;
          margin-top: -9px;
          left: calc(-100% + -3px);
          position: absolute;
  
          &.right{
              left: calc(100% + 1px);
              border-radius: 0px 10px 0px 10px;
          }
      }
  }
  }
  
  li.multi-level-dropdown__danger{
  color: #DD5050;
  
  a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  }
  
  li.multi-level-dropdown__warning{
  color: #E4813C;
  
  a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  }
  
  li.multi-level-dropdown__gray{
  color: #6D8790;
  
  a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  }
  
  li.log-out-option {
  a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  }
  
  li.multi-level-dropdown__action{
  padding: 7px;
  height: auto;
  
  button{
      width: 100%;
      height: 30px;
      border-radius: 4px;
      background-color: #4EA8CA;
      border: none;
      vertical-align: middle;
      display: flex;            
      justify-content: center;
      align-items: center;
      cursor: pointer;
  
      &:focus {
          outline: none;
      }
  
      path{
          fill:white;
      }
  
      span{
          padding-left: 4px;
          color: #FFFFFF;
          font-family: "DM Sans";
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 17px;
      }
  }
  }
  }`;

  multilevel_dropdown_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-multi-level-dropdown-big',
templateUrl: './multi-level-dropdown-big.component.html',
styleUrls: ['./multi-level-dropdown-big.component.scss']
})
export class MultiLevelDropdownBigComponent implements OnInit {

constructor() {}

ngOnInit(): void {

}

}`;

blue_button_html = `
<div class="button blue">
  <span>Blue Button</span>
</div>`;
blue_button_css = `
.button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:focus {
  outline: none;
  }
  
  span {
  padding-left: 4px;
  color: #ffffff;
  font-family: 'DM Sans';
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 17px;
  }
  }
  
  .blue {
  background-color: #4ea8ca;
  &:hover {
  background-color: rgb(32, 137, 179);
  }
  &:active {
  background: linear-gradient(0deg, rgba(28, 50, 63, 0.4), rgba(28, 50, 63, 0.4)), #219FCF;
  }
  }`;

  green_button_html = `
  <div class="button green">
    <span>Green Button</span>
  </div>`;

  green_button_css = `
  .button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:focus {
    outline: none;
    }
    
    span {
    padding-left: 4px;
    color: #ffffff;
    font-family: 'DM Sans';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 17px;
    }
    }
    
    .green {
    background: #459950;
    &:hover {
    background: linear-gradient(0deg, rgba(28, 50, 63, 0.2), rgba(28, 50, 63, 0.2)), #459950;
    
    }
    &:active {
    background: linear-gradient(0deg, rgba(28, 50, 63, 0.4), rgba(28, 50, 63, 0.4)), #459950;
    }
    }`;

    orange_button_html = `
    <div class="button orange">
      <span>Orange Button</span>
    </div>`;
    orange_button_css = `
    .button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      &:focus {
      outline: none;
      }
      
      span {
      padding-left: 4px;
      color: #ffffff;
      font-family: 'DM Sans';
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 17px;
      }
      }
      
      .orange {
      background: #E79D43;
      &:hover {
      background: linear-gradient(0deg, rgba(189, 122, 41, 0.6), rgba(189, 122, 41, 0.6)), #E79D43;
      }
      &:active {
      background: linear-gradient(0deg, #BD7A29, #BD7A29), #E79D43;
      }
      }`;

    red_button_html = `
    <div class="button red">
      <span>Red Button</span>
    </div>`;
    red_button_css = `
    .button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      &:focus {
      outline: none;
      }
      
      span {
      padding-left: 4px;
      color: #ffffff;
      font-family: 'DM Sans';
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 17px;
      }
      }
      
      .red {
      background: #D4000B;
      &:hover {
      background: linear-gradient(0deg, rgba(183, 0, 9, 0.6), rgba(183, 0, 9, 0.6)), #D4000B;
      }
      &:active {
      background: linear-gradient(0deg, #B70009, #B70009), #D4000B;
      }
      }`;

      white1_button_html = `
      <div class="button white1">
        <span>White1 Button</span>
      </div>`;

      white1_button_css = `
      .button {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        border: none;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        &:focus {
        outline: none;
        }
        
        span {
        padding-left: 4px;
        color: #ffffff;
        font-family: 'DM Sans';
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 17px;
        }
        }
        
        .white1 {
        span {
        color: #6D8790 !important;
        }
        border: 1px solid rgba(109, 135, 144, 0.2);
        background: #FFFFFF;
        &:hover {
        background: linear-gradient(0deg, rgba(33, 159, 207, 0.1), rgba(33, 159, 207, 0.1)), #FFFFFF;
        }
        &:active {
        background: linear-gradient(0deg, rgba(33, 159, 207, 0.2), rgba(33, 159, 207, 0.2)), #FFFFFF;
        }
        }`;

    white2_button_html = `
    <div class="button white2">
      <span>White2 Button</span>
    </div>`;

    white2_button_css = `
    .button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      &:focus {
      outline: none;
      }
      
      span {
      padding-left: 4px;
      color: #ffffff;
      font-family: 'DM Sans';
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 17px;
      }
      }
      
      .white2 {
      span {
      color: #219FCF !important;
      }
      border: 1.5px solid rgba(33, 159, 207, 0.4);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, rgba(230, 243, 247, 0.1) 70.13%), #FFFFFF;
      &:hover {
      background: linear-gradient(0deg, rgba(33, 159, 207, 0.1), rgba(33, 159, 207, 0.1)), #FFFFFF;
      }
      &:active {
      background: linear-gradient(0deg, rgba(33, 159, 207, 0.2), rgba(33, 159, 207, 0.2)), #FFFFFF;
      }
      }`;

    blue_outline_button_html = `
    <div class="button outline-blue">
      <span>Blue Outline</span>
    </div>`;
    blue_outline_button_css = `
    .button {
      width: 100px;
      height: 30px;
      border-radius: 5px;
      border: none;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      
      &:focus {
      outline: none;
      }
      
      span {
      padding-left: 4px;
      color: #ffffff;
      font-family: 'DM Sans';
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 17px;
      }
      }
      
      .outline-blue {
      span {
      color: #219FCF;
      }
      border: 1px solid rgba(33, 159, 207, 0.67);
      &:hover {
      background: rgba(33, 159, 207, 0.15);
      }
      &:active {
      background: #219FCF;
      span {
          color: white;
      }
      }
      }`;

  green_outline_button_html = `
  <div class="button outline-green">
    <span>Green Outline</span>
  </div>`;

  green_outline_button_css = `
  .button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:focus {
    outline: none;
    }
    
    span {
    padding-left: 4px;
    color: #ffffff;
    font-family: 'DM Sans';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 17px;
    }
    }
    
    .outline-green {
    span {
    color: #459950;
    }
    border: 1px solid #5B9E73;
    &:hover {
    background: rgba(91, 158, 115, 0.15);
    }
    &:active {
    background: #459950;
    span {
        color: white;
    }
    }
    }`;

  red_outline_html = `
  <div class="button outline-red">
    <span>Red Outline</span>
  </div>`;

  red_outline_css = `
  .button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:focus {
    outline: none;
    }
    
    span {
    padding-left: 4px;
    color: #ffffff;
    font-family: 'DM Sans';
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 17px;
    }
    }
    
    .outline-red {
    span {
    color: #D4000B;
    }
    border: 1px solid #D85259;
    &:hover {
    background: rgba(212, 0, 11, 0.15);
    }
    &:active {
    background: #D4000B;
    span {
        color: white;
    }
    }
    }`;

  icons_html = `
<div class="icons">
  <img class="icon" src="assets/icons/Agent.png"/>
  <img class="icon" src="assets/icons/AI.png"/>
  <img class="icon" src="assets/icons/chat.png"/>
  <img class="icon" src="assets/icons/email.png"/>
  <img class="icon" src="assets/icons/voice.png"/>
</div>`;

  icons_css = `
.icons {
    display: flex;
    justify-content: space-around;
    .icon {
        width: 50px;
    }
}
`;
  autocomplete_html = `
  <div class="line__input">
    <div
        class="floating-label"
        (click)="showDropdown()"
        (mouseleave)="inputMouseLeave()"
        (mouseenter)="inputMouseEnter()"
    >
        <input
            class="floating-input--normal"
            placeholder=" "
            type="text"
            [(ngModel)]="autocomplete_value"
        >
        <label class="float-label--normal">Autocomplete</label>
        <div class="arrow-icon">
            <img src="assets/img/arrow-down-icon.svg" />
        </div>
    </div>
    <div class="autocomplete" 
        *ngIf="isShowDropdown == true"
        (mouseleave)="dropdownMouseLeave()"
        (mouseenter)="dropdownMouseEnter()"
    >
        <div class="autoCompleteModal">
            <div class="search-bar">
                <div class="search-bar__left">    
                    <input [(ngModel)]="searchText" type="text" id="_search" placeholder="Search"/>
                    <img src="assets/img/search gray.svg">
                </div>
            </div>
            <div class="autoCompleteModal__body">
                <div class="content" *ngFor = "let list of lists; let index = index" (click)="autoComplete(list, index)">
                    <div class="real" *ngIf="list.name.toLowerCase().includes(searchText.toLowerCase())">
                        <div class="content__header">
                            {{ list.name }}
                        </div>
                        <div class="content__body">
                            <p>{{ list.title }}</p>
                            <h1>{{list.type}}, Tiket No: {{list.ticketNo}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

autocomplete_css = `
/****  floating-Lable style start ****/
.floating-label {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
        position: absolute;
        right: 18px;
        top: 18px;
    }
}

.floating-input {
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(109, 135, 144, 0.3);
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    &:hover {
        border: 1px solid #6d8790;
        label {
            color: #203b4c;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid #219fcf;

        label {
            top: -9px;
            left: 12px;
            font-size: 13px;
            color: #219fcf;
        }
    }
}

.floating-label-selected {
    position: relative;
    margin-bottom: 15px;
    .arrow-icon {
        position: absolute;
        right: 10px;
        top: 9px;
    }
    .floating-input--selected {
        cursor: pointer;
        box-sizing: border-box;
        height: 40px;
        width: 100%;
        border: 1px solid rgba(109, 135, 144, 0.3);
        border-radius: 3px;
        background-color: #ffffff;
        padding-left: 12px;
        color: #1c323f;
        font-family: 'DM Sans';
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 18px;
        outline: none;
        border: 1px solid #219fcf;
        label {
            top: -9px;
            left: 12px;
            font-size: 13px;
            color: #219fcf;
        }
    }
    .float-label--selected {
        position: absolute;
        pointer-events: none;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        z-index: 0;
        top: -9px;
        left: 12px;
        font-size: 13px;
        color: #219fcf;
        &:after {
            content: ' ';
            display: block;
            position: absolute;
            height: 1px;
            top: 9px;
            left: -0.2em;
            right: -0.2em;
            z-index: -1;
            background: #fff;
        }
    }
}

.floating-input--hover {
    &:hover {
        border: 1px solid rgba(109, 135, 144, 0.3);
    }
}
.floating-input--normal {
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(109, 135, 144, 0.3);
    border-radius: 3px;
    background-color: #ffffff;
    padding-left: 12px;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 18px;
    &:hover {
        border: 1px solid #6d8790;
        label {
            color: #203b4c;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid #219fcf;
        label {
            top: -9px;
            left: 12px;
            font-size: 13px;
            color: #219fcf;
        }
    }
}

.float-label {
    color: #6d8790;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 11px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    z-index: 0;

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        height: 1px;
        top: 9px;
        left: -0.2em;
        right: -0.2em;
        z-index: -1;
        background: #fff;
    }
}

.float-label--normal {
    color: #6d8790;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 11px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    z-index: 0;

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        height: 1px;
        top: 9px;
        left: -0.2em;
        right: -0.2em;
        z-index: -1;
        background: #fff;
    }
}


.floating-input:hover ~ label {
    color: #203b4c;
}
.floating-input:focus ~ label {
    top: -9px;
    left: 12px;
    font-size: 13px;
    color: #219fcf;
    &:hover {
        color: #219fcf;
    }
}

.floating-input--normal:hover ~ label {
    color: #203b4c;
}
.floating-input--normal:focus ~ label {
    top: -9px;
    left: 12px;
    font-size: 13px;
    color: #219fcf;
}


.floating-input--normal:not(:placeholder-shown) ~ label {
    top: -9px;
    left: 12px;
    font-size: 13px;
}

.floating-input:not(:placeholder-shown) ~ label {
    top: -9px;
    left: 12px;
    font-size: 13px;
}

.floating-input--error:not(:placeholder-shown) ~ label {
    top: -9px;
    left: 12px;
    font-size: 13px;
}

html {
    font-family: 'Helvetica Neue', Helvetica, 'Noto Sans', sans-serif, Arial,
        sans-serif;
    font-size: 12px;
    line-height: 1.42857143;
    color: #949494;
    background-color: #ffffff;
}
/***   Body style end  ***/

/***   daniel - Fork me friend - style   ***/
.floating-credit {
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: #aaa;
    font-size: 13px;
    font-family: arial, sans-serif;
}
.floating-credit a {
    text-decoration: none;
    color: #000000;
    font-weight: bold;
}
.floating-credit a:hover {
    border-bottom: 1px dotted #f8f8f8;
}
.floating-heading {
    position: fixed;
    color: #aaa;
    font-size: 20px;
    font-family: arial, sans-serif;
}

.non-cursor {
    cursor: default !important;
}

.disabled {
    color: #6d8790;
    &:hover {
        input {
            border: 1px solid rgba(109, 135, 144, 0.3);
        }
        label {
            color: #6d8790;
        }
    }
}

.autoCompleteModal {
    
    // width: calc(49% - 24px);
    position: relative;
    margin-top: -13px;
    z-index: 200;
    width: calc(100%);
    width: 100%;
    // height: 325px;
    max-height: 325px;
    z-index: 200;
    border-radius: 10px;
    border: 1px solid rgba(109,135,144,0.15);
    -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
    box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
    background-color: #FFFFFF;
    padding-bottom: 5px;

    height: 100%;

    .search-bar{
                
        // position: absolute;
        width: calc( 100% - 17px);
        background: white;
        height: 32px;
        display: flex;
        border: 1px solid rgba(109,135,144,0.2);
        border-radius: 5px;
        margin-left: 6.5px;
        margin-top: 6.5px;
        
    
        .search-bar__left{
            display: inline-flex;
            height: 29px;
            width: calc( 100% - 10px);
            background-color: white;

    
            & > img{
                height: 21px;
                width: 21px;
                display: inline-block;
                padding-top: 8px;
            }
    
            & > input{
                box-sizing: border-box;
                color: black;
                font-family: "DM Sans";
                font-size: 14px;
                letter-spacing: 0;
                line-height: 18px;
                padding-left: 11px;
                background: transparent;
                border: none;
                width: calc( 100% - 10px);
                padding-top : 6px;
                
                &:focus {
                    outline: none;
                }
            }
        }
    }

    .autoCompleteModal__body {
        overflow-y: auto;
        overflow-x: hidden;
        // height: 280px;
        max-height: 280px;
        height: calc(100% - 38px);
        .content {
            .real {
                cursor: pointer;
                padding-left: 15px;
                background-color: white;
                padding-top: 8px;
                padding-bottom:15px;
                .content__header {
                    color: #1C323F !important;
                    font-family: "DM Sans";
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    display: flex;
            
                }
                .content__body {
                    p{
                        margin-top: 0px;
                        opacity: 0.7;
                        color: #1C323F;
                        font-family: "DM Sans";
                        font-size: 12px;
                        letter-spacing: 0;
                        height: 8px;
                    }
                    h1 {

                        width: 147px;
                        opacity: 0.7;
                        color: #1C323F;
                        font-family: "DM Sans";
                        font-size: 12px;
                        font-weight: bold;
                        letter-spacing: 0;
                        height: 10px;
                    }
                    h1:hover {
                        text-decoration: underline;
                    }
                }
                .unlinkbutton {
                    text-decoration: underline;
                    // height: 16px;
                    width: 36px;
                    margin-top: -20px;
                    color: #0099D3;
                    font-family: "DM Sans";
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 0px;
                    text-align: right;
                    float: right;
                    margin-right: 9px;
                    height: 12px;
                    padding-top: 19px;
                    padding-bottom: 10px;
                    &:hover {
                        color: rgb(31, 115, 149);
                    }
                }
            }
            .real:hover {
                background-color:rgba(33,159,207,0.2);
                .content__edit{
                    visibility: visible;
                }
            }
            
            
            
        }
        
    }
}
::placeholder {
    opacity: 0.4;
    color: #1C323F; /* Firefox */
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: 0.4;
    // padding-left: 11px;
    padding-top: 17px;
    color: #1C323F;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    opacity: 0.4;
    color: #1C323F;
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }

  ::placeholder {
    opacity: 0.4;
    color: #1C323F; /* Firefox */
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    opacity: 0.4;
    // padding-left: 11px;
    padding-top: 17px;
    color: #1C323F;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    opacity: 0.4;
    color: #1C323F;
    // padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1C323F;
    font-family: "DM Sans";
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
  }`;
  
  autocomplete_script = `
  import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  lists = [
      {
          'name': 'Calvin Hogan',
          'title': 'Account Inquiry, Login Issue',
          'type': 'Chat',
          'ticketNo': '34879'
      },
      {
          'name': 'David Shrute',
          'title': 'Unprocessed Order',
          'type': 'Email',
          'ticketNo': '11389'
      },
      {
          'name': 'Jay Mathis',
          'title': 'Payment Issue, Refund',
          'type': 'Call',
          'ticketNo': '50821'
      },
      {
          'name': 'Hilda Palmer',
          'title': 'Account Inquiry',
          'type': 'Call',
          'ticketNo': '03832'
      },
      {
          'name': 'Calvin Hogan',
          'title': 'Account Inquiry, Login Issue',
          'type': 'Chat',
          'ticketNo': '34879'
      },
      {
          'name': 'David Shrute',
          'title': 'Unprocessed Order',
          'type': 'Email',
          'ticketNo': '11389'
      },
      {
          'name': 'Jay Mathis',
          'title': 'Payment Issue, Refund',
          'type': 'Call',
          'ticketNo': '50821'
      },
      {
          'name': 'Hilda Palmer',
          'title': 'Account Inquiry',
          'type': 'Call',
          'ticketNo': '03832'
      },

  ];

  autocomplete_value: string = "";
  searchText: string = "";
  isShowDropdown: boolean = false;
  input_control: boolean = false;
  autocompleteDropdown_control: boolean = false;
  selected_index: number = -1;

  showDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.input_control != true && this.autocompleteDropdown_control == false) {
            this.isShowDropdown = false;
        }
    });
   }

  dropdownMouseLeave() {
      this.autocompleteDropdown_control = false;
  }
  dropdownMouseEnter() {
      this.autocompleteDropdown_control = true;
  }

  inputMouseLeave() {
    this.input_control = false;
  }
  inputMouseEnter() {
      this.input_control = true;
  }

  autoComplete(list, id) {
    this.autocomplete_value = list.name + ' ' + list.title;
    this.isShowDropdown = false;
  }
  ngOnInit(): void {
  }

}
`;

cancel_button_html = `
<div class="cancel-button">
    <img src="assets/img/cancel-icon.svg" />
    <span>Cancel</span>
</div>`;

cancel_button_css = `
.cancel-button {
    box-sizing: border-box;
    height: 40px;
    // width: 50%;
    cursor: pointer;
    // border: 1px solid #E3E5E5;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin-left: 5px;
        opacity: 0.7;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 18px;
    }
    &:hover {
        background-color: #BDCCD2;
    }
}`;

confirm_button_html = `
<div  class="confirm-button">
    <img src="assets/img/confirm-icon.svg" />
    <span>Add New Intent </span>
</div>`;
confirm_button_css = `
.confirm-button {
    height: 40px;
    background-color: #219FCF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
        margin-left: 5px;
        color: #FFFFFF;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 18px;
        
    }
    &:hover {
        background-color: #03729e;
    }
}`;

filter1_button_html = `
<div *ngIf="isActive == false" class="filterbutton" (click)="handleFilterButtonClick()">
        <img  src="assets/img/filterbutton-icon.svg" />
        <span>Filter</span>
</div>
<div *ngIf="isActive == true" class="filterbutton" [ngClass]="{'clicked': clicked}" (click)="handleFilterButtonClick()">
    <img  src="assets/img/filterbutton-close-icon.svg" />
    <span>Close</span>
</div>`;

filter1_button_css = `
.filterbutton {
    box-sizing: border-box;
    height: 32px;
    width: 85px;
    cursor: pointer;
    border-radius: 16px;
    background-color: #219FCF;
    display: flex;
    justify-content: center;
    display: flex;
    vertical-align: middle;
    align-items: center;
    box-shadow: 0 4px 4px 0 rgba(109,135,144,0.1), 0 7px 14px 0 rgba(0,153,211,0.5);
    display: flex;
    color: #FFFFFF;
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 14px;
    span {
        margin-left: 4px;
    }
    &.clicked {
        span {
            margin-left: 0px;
            // color: red;
        }
    }
    &:hover {
        background-color: rgb(32, 137, 179);
        cursor: pointer;
    }
}`;

filter1_button_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleFilterButtonClick() {
    this.isActive = !this.isActive;
  }
}
`;

multiselect_html = `
<div class="from">
    <div
        class="from__center"
        (keydown.space)="$event.preventDefault()"
    >
        <div
            class="from__text"
        >
            From:
        </div>
        <div
            class="from__input"
            (mouseleave)="autocompleteFormleave()"
            (mouseenter)="autocompleteFormenter()"
        >
            <div
                contenteditable="plaintext-only"
                class="form-control"
                (click)="showFromEmailAutocomplete()"
                (input)="fromEmail=$event.target.innerHTML"
                [innerHTML]='fromEmailTemp'
            >
            </div>
            <div class="autocomplete">

                <div class="autoCompleteModal" *ngIf="isFromEmailAutoComplete">
                    <div class="search-bar">
                        <div class="search-bar__left">    
                            <input [(ngModel)]="searchText" type="text" id="_search" placeholder="Search"/>
                            <img src="../../assets/img/search gray.svg">
                        </div>
                    </div>
                    <div class="autoCompleteModal__body">
                        <div class="content" *ngFor = "let list of fromEmailAddressList; let index = index" (click)="autoCompleteFromEmail(list)">
                            <div class="real" *ngIf="list.name.toLowerCase().includes(searchText.toLowerCase())">
                                <div class="content__header">
                                    {{ list.name }}
                                </div>
                                <div class="content__body">
                                    <h1>{{list.email}}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

multiselect_css = `
.from {
    height: auto;
    width: 100%;
    padding-left: 5px;
    display: flex;
    box-shadow: 0 1px 0 0 rgba(28, 50, 63, 0.1);
    background-color: white;

    .from__center {
        margin-top: 10px;
        margin-left: 3px;
        color: #1c323f;
        font-family: 'DM Sans';
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        display: flex;
        width: 100%;
        background: transparent;

        .from__text {
            margin-left: 27px;
            &.new {
                margin-left: 12px;
            }
        }
        .from__input {
            width: calc(100%);
            .autocomplete {
                position: absolute;
                z-index: 200;
                margin-top: 1px;
                width: calc(100% - 180px);
                border: none;
            }
            .form-control {
                width: calc(100% - 50px);
                border: none;
                margin-left: 5px;
                font-family: 'DM Sans';
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                color: #1c323f;
                line-height: 18px;
                margin-top: 0px;
                padding: 0px;
                padding-left: 1px;
                margin-bottom: 10px;
                resize: none;
                word-break: break-word;
                background: transparent;
                display: flex;
                flex-wrap: wrap;
                p {
                    color: red;
                    font-size: 14px;
                    line-height: 14px;
                    margin-bottom: 0px;
                    margin-top: 2px;
                    width: auto;
                }
                h1 {
                    color: #1c323f;
                    font-size: 14px;
                    line-height: 14px;
                    margin-bottom: 0px;
                    margin-top: 2px;
                    width: auto;
                    white-space: nowrap;
                    font-weight: normal;
                }
                &:focus {
                    border: none;
                    border-color: none;
                    box-shadow: none;
                }
            }
        }
    }
}

.autocomplete {
    .autoCompleteModal {
    
        // width: calc(49% - 24px);
        width: 100%;
        // height: 325px;
        max-height: 325px;
        z-index: 200;
        border-radius: 10px;
        border: 1px solid rgba(109,135,144,0.15);
        -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
        -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
        box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
        background-color: #FFFFFF;
        padding-bottom: 5px;
    
        height: 100%;
    
        .search-bar{
                    
            // position: absolute;
            width: calc( 100% - 17px);
            background: white;
            height: 32px;
            display: flex;
            border: 1px solid rgba(109,135,144,0.2);
            border-radius: 5px;
            margin-left: 6.5px;
            margin-top: 6.5px;
            
        
            .search-bar__left{
                display: inline-flex;
                height: 29px;
                width: calc( 100% - 10px);
                background-color: white;
    
        
                & > img{
                    height: 15px;
                    width: 15px;
                    display: inline-block;
                    padding-top: 8px;
                }
        
                & > input{
                    box-sizing: border-box;
                    color: black;
                    font-family: "DM Sans";
                    font-size: 14px;
                    letter-spacing: 0;
                    line-height: 18px;
                    padding-left: 11px;
                    background: transparent;
                    border: none;
                    width: calc( 100% - 10px);
                    padding-top : 6px;
                    
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    
        .autoCompleteModal__body {
            overflow-y: auto;
            overflow-x: hidden;
            // height: 280px;
            max-height: 280px;
            height: calc(100% - 38px);
            .content {
                .real {
                    cursor: pointer;
                    padding-left: 15px;
                    background-color: white;
                    padding-top: 8px;
                    padding-bottom:15px;
                    .content__header {
                        color: #1C323F !important;
                        font-family: "DM Sans";
                        font-size: 14px;
                        font-weight: bold;
                        letter-spacing: 0;
                        display: flex;
                
                    }
                    .content__body {
                        p{
                            margin-top: 0px;
                            opacity: 0.7;
                            color: #1C323F;
                            font-family: "DM Sans";
                            font-size: 12px;
                            letter-spacing: 0;
                            height: 8px;
                        }
                        h1 {
    
                            width: 147px;
                            opacity: 0.7;
                            color: #1C323F;
                            font-family: "DM Sans";
                            font-size: 12px;
                            font-weight: bold;
                            letter-spacing: 0;
                            height: 10px;
                        }
                        h1:hover {
                            text-decoration: underline;
                        }
                    }
                    .unlinkbutton {
                        text-decoration: underline;
                        // height: 16px;
                        width: 36px;
                        margin-top: -20px;
                        color: #0099D3;
                        font-family: "DM Sans";
                        font-size: 12px;
                        font-weight: bold;
                        letter-spacing: 0;
                        line-height: 0px;
                        text-align: right;
                        float: right;
                        margin-right: 9px;
                        height: 12px;
                        padding-top: 19px;
                        padding-bottom: 10px;
                        &:hover {
                            color: rgb(31, 115, 149);
                        }
                    }
                }
                .real:hover {
                    background-color:rgba(33,159,207,0.2);
                    .content__edit{
                        visibility: visible;
                    }
                }
                
                
                
            }
            
        }
    }
    ::placeholder {
        opacity: 0.4;
        color: #1C323F; /* Firefox */
        // padding-left: 11px;
        padding-top: 17px;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 0.4;
        // padding-left: 11px;
        padding-top: 17px;
        color: #1C323F;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 0.4;
        color: #1C323F;
        // padding-left: 11px;
        padding-top: 17px;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
      }
    
      ::placeholder {
        opacity: 0.4;
        color: #1C323F; /* Firefox */
        // padding-left: 11px;
        padding-top: 17px;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 0.4;
        // padding-left: 11px;
        padding-top: 17px;
        color: #1C323F;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 0.4;
        color: #1C323F;
        // padding-left: 11px;
        padding-top: 17px;
        height: 20px;
        width: 48px;
        opacity: 0.4;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 15px;
        letter-spacing: 0;
        line-height: 20px;
    }
}

`;

multiselect_script = `
import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  fromEmailAddressList = [
      {
          'name': 'Thomas Smith',
          'email': 'thomas_smith@yahoo.com',
      },
      {
          'name': 'Calvin Hogan',
          'email': 'lavada_kuhic@janice.biz',
      },
      {
          'name': 'Jay Mathis',
          'email': 'eusebio.haag@jolie.tv',
      },
      {
          'name': 'Hilda West',
          'email': 'bauch_valerie@hillard.co.uk',
      },
      {
          'name': 'Thomas Smith',
          'email': 'thomas_smith@yahoo.com',
      },
  ];
  isFromEmailAutoComplete: boolean = false;
  autocompleteForm_control: boolean = false;
  fromEmail: string;
  fromEmailTemp: string = '';
  searchText: string = "";

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
        if (this.autocompleteForm_control == false) {
            this.isFromEmailAutoComplete = false;
        }
    });
   }

  ngOnInit(): void {
  }

  autocompleteFormleave() {
    this.autocompleteForm_control = false;
  }
  autocompleteFormenter() {
      this.autocompleteForm_control = true;
  }

  showFromEmailAutocomplete() {
      this.isFromEmailAutoComplete = true;
  }

  autoCompleteFromEmail(list) {
      this.fromEmail = list.email + ';&nbsp;';
      this.fromEmailTemp += this.fromEmail;
      this.isFromEmailAutoComplete = false;
  }
  
}
`;
  constructor() { }

  ngOnInit(): void {
  }

}
