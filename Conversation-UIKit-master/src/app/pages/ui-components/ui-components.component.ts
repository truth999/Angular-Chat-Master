import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss']
})
export class UiComponentsComponent implements OnInit {

  constructor() { }

  alert_danger_html = `
  <div class="alert-danger">
          <div class="error">
              <div class="error-content">
                  <div class="alert__header">
                      <img src="assets/img/alert-danger-icon.svg" />
  
                  </div>
                  <div class="alert__content" role="alert">
                      <div class="alert_content_body">
                          <span class="alert__content__text"> Server Error, Cannot establish a connection.
                          </span>
                      </div>
                      <div class="alert__content__close" data-dismiss="alert" aria-label="Close">
                              <img src="assets/img/close-red-icon.svg" />
                      </div>
                  </div>
              </div>
          </div>
      </div>`;
  alert_danger_css = `
  .alert-danger {
    position: absolute; 
    left: 5px;
    width: calc(100% - 8px);
    .error {
    .error-content {
        display: flex;
        box-sizing: border-box;
        
        list-style: none;
        margin: 0;
        
        margin-top: 1px;
        padding:0px;   
        box-sizing: border-box;
        width: calc(100%);
        border: 1px solid rgba(109,135,144,0.15);
        .retrievelink{
            text-decoration: underline; 
            cursor: pointer;
        }
        // position: absolute;
        // top: 50px;
        z-index: 999;
        .alert__header {
            height: 40px;
            width: 40px;
            padding: 13px;
            background-color: #FAE5E5;
            box-sizing: border-box;
        }
        .alert__content{
            margin-left: 1px;
            vertical-align: middle;
            height: 40px;
            width: 100%;
            padding-left: 13px;
            padding-top:11px;
            padding-bottom: 11px;
            background-color: #FAE5E5;
            box-sizing: border-box;
            display: flex;
            .alert__content__boddy {
                width: 90%;
    
            }
            .alert__content__text {
            height: 18px;
            // width: 289px;
            padding-left: 13px;
            color: #DD5050;
            font-family: "DM Sans";
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 18px;
            display: flex;
            
            }
            
            .alert__content__close {
                position: absolute;
                float: right;
                cursor: pointer;
                margin-top: -3px;
                color: red;
                
                right: 13px;
            }
        }
    }
    }
    }`;

  alert_danger_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-custom-alert',
templateUrl: './custom-alert.component.html',
styleUrls: ['./custom-alert.component.scss']
})

export class CustomAlertComponent implements OnInit {

constructor() { }

ngOnInit(): void { }

}`;

alert_success_html = `
<div class="alert-success">
  <div class="alert__header">
    <img src="assets/img/alert-success-icon.svg" />
  </div>
  <div class="alert__content" role="alert">
      <div class="alert_content_body">
          <span class="alert__content__text"> Your report has been successfully submitted
          </span>
      </div>
      <div class="alert__content__close" data-dismiss="alert" aria-label="Close">
              <img src="assets/img/close-green-icon.svg" />
      </div>
  </div>
</div>`;

alert_success_css = `
.alert-success {
  position: absolute;
  display: flex;
  box-sizing: border-box;
  // position: absolute; 
  list-style: none;
  margin: 0;
  padding:0px;   
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(109,135,144,0.15);
  // position: absolute;
  // top: 0px;
  z-index: 999;
  .alert__header {
  height: 40px;
  width: 40px;
  padding: 13px;
  background-color:#E3F0E5;
  box-sizing: border-box;
  }
  .alert__content{
  margin-left: 1px;
  vertical-align: middle;
  height: 40px;
  width: 100%;
  padding-left: 13px;
  padding-top:11px;
  padding-bottom: 11px;
  background-color: #E3F0E5;
  box-sizing: border-box;
  display: flex;
  .alert__content__boddy {
      width: 90%;
  }
  .alert__content__text {
      height: 18px;
      width: 289px;
      padding-left: 13px;
      color: #459950;
      font-family: "DM Sans";
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 18px;
  }
  .alert__content__close {
      position: absolute;
      float: right;
      cursor: pointer;
      color: #459950;
      margin-top: -3px;
      
      right: 8.69px;
      &:hover {
          svg {
              path{
                  opacity: 0.3;
              }
          }
      }
  }
  }
  }`;

  alert_success_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-custom-alert',
templateUrl: './custom-alert.component.html',
styleUrls: ['./custom-alert.component.scss']
})

export class CustomAlertComponent implements OnInit {

constructor() { }

ngOnInit(): void { }
}`;

call_tab_html = `
<div class="uikit-wysiwyg">
  <h2>Call Tab</h2>
</div>
<div class="uikit-example">
  <ul
      class="call-tab"
  >
      <div
          class="call-tab__container "
      >
        <li
            class="call-tab__item incoming"
        >
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="robo-mono-font"
                >Incoming</span>
            </span>
        </li>
      </div>
      <div
          class="call-tab__container "
      >
        <li
            class="call-tab__item"
        >
            <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2690.000000, -791.000000)"
                            fill="#459950"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                                id="chat_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >00:12</span>
            </span>

        </li>

      </div>
      <div
          class="call-tab__container "
      >
        <li
            class="call-tab__item linkedto"
        >
            <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >02:35</span>
            </span>
        </li>
  
      </div>
      <div
          class="call-tab__container "
      >
        <li
            class="call-tab__item"
        >
            <img class="new_message-dot" src="assets/img/Oval.svg">
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >02:35</span>
            </span>
        </li>
      </div>
      <div
          class="call-tab__container "
      >
      <li
          class="call-tab__item"
      >
          <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
          <span
              class="call-tab__top-title defered"
          >
              <span class="name">Siva</span>
              <span
                  class="multi-level-dropdown__tooltip"
              >Siva</span>
          </span>
      
          <span class="call-tab__bottom-title">
              <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 14 12"
              >
                  <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                  >
                      <g
                          id="UI-Kit_C1"
                          transform="translate(-2763.000000, -793.000000)"
                          fill="#459950"
                          fill-rule="nonzero"
                      >
                          <path
                              d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                              id="email_green-1"
                          ></path>
                      </g>
                  </g>
              </svg>
              <span
                  class="dm-sans-font"
              >00:15</span>
      
          </span>
          <span
              class="emailDeferedStatus"
          >Defered 1d ago</span>
      
      </li>
    </div>
  </ul>`;

call_tab_css = `
.call-tab {
  height: 46px;
  margin: 4px 2px;
  list-style: none;
  padding: 0px;
  display: flex;
  transition: height 0.1s;
  transition-timing-function: ease-in;
  
  .call-tab__container {
      width: 100%;
      margin: 0px 1.5px;
      display: block;
      height: 100%;
      position: relative;
      &.linked:not(:first-child) {
          &::before {
              content: '';
              top: -4px;
              left: -32px;
              width: 28px;
              height: 28px;
              position: absolute;
              background-image: url('../../../assets/icons/Combined\ Shape.svg');
              background-repeat: no-repeat;
              background-position: center;
              background-color: #203b4c;
              border-left: 4px solid #111e26;
              border-bottom: 4px solid #111e26;
              border-top: 4px solid #111e26;
              border-radius: 100px 0 0 100px;
              z-index: 1;
          }
      }
  }
  
  li.call-tab__item {
      height: 100%;
      margin: 0px 2px;
      width: 180px;
      border-radius: 4px;
      background-color: #203b4c;
      display: inline-block;
      cursor: pointer;
  
      .call-tab__top-title {
          color: #ffffff;
          font-family: 'DM Sans';
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 0;
          line-height: 17px;
          display: block;
          text-align: center;
          padding-top: 7px;
      }
  
      .call-tab__bottom-title {
          vertical-align: middle;
          display: flex;
          width: auto;
          justify-content: center;
          align-items: center;
  
          svg {
              width: 12px;
              height: 12px;
              margin-right: 5px;
              path {
                  fill: rgb(109, 135, 144);
                  opacity: 0.4;
              }
          }
  
          span {
              color: #c8e0e9;
              font-family: 'DM Sans';
              font-size: 13px;
              letter-spacing: -0.5px;
              line-height: 17px;
          }
      }
  
      &.call-tab__item--active {
          background-color: #459950;
  
          .call-tab__bottom-title {
              svg {
                  path {
                      fill: white;
                      opacity: 1;
                  }
              }
  
              span {
                  color: white;
              }
          }
      }
  }
  }`;

  call_more_tab_html = `
  <div class="ar-detail">
              <div class="top-section">
                  <div style="display: flex; flex-direction: row; align-items: center; width: 50%;">
                      <div class="hilda-palmer">Hilda Palmer</div>
                      <a style="margin-top: 3px">
                          <img src="assets/img/Shape.svg">
                      </a>
                  </div>
                  <div
                      style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end; margin-right: 4px;">
                      <div class="phone-number">+1-402-541-7564</div>
                      <a>
                          <img
                              style="width: 24px; height: 24px;"
                              src="assets/img/WEB-small-icon.svg"
                          />
                      </a>
                  </div>
          
              </div>
              <div class="below-section">
                  <div style="display: flex; flex-direction: row;">
                      <div
                          class="rectangle"
                      ><span>Account Inquiry</span></div>
                      <div
                          class="rectangle"
                      ><span>Payment Issue</span></div>
                      <div
                          class="rectangle1"
                      ><span>+ New Intent</span></div>
                  </div>
                  <a
                      style="cursor: pointer; margin-top: 3px; margin-right: 2px;"
                  >
                      <img src="assets/img/Path.svg">
                  </a>
              </div>
          </div>`;

  call_more_tab_css = `
  .ar-detail {
    color: #ffffff;
    background-color: #264f60;
    padding: 0 9px;
    margin: 0 3px;
    z-index: 10;
    width: calc(100% - 24px);
    
    .top-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #3c6e85;
        padding: 9px 0;
        width: 100%;
    
        .hilda-palmer {
            color: #ffffff;
            font-family: 'DM Sans';
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 21px;
            margin-right: 10px;
            margin-left: 4px;
    
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            white-space: normal;
            word-break: break-all;
        }
    
        .phone-number {
            color: #ffffff;
            font-family: 'DM Sans';
            font-size: 15px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 20px;
            text-align: right;
            margin-right: 10px;
    
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            white-space: normal;
            word-break: break-all;
        }
    }
    
    .below-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 7px 0;
    
        .rectangle {
            padding: 4px 7px 4px 8px;
            border-radius: 4px;
            background-color: #4284a2;
            margin-right: 6px;
            cursor: pointer;
    
            &:hover {
                background-color: #429fca;
            }
    
            span {
                color: #ffffff;
                font-family: 'DM Sans';
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 16px;
            }
        }
    
        .rectangle1 {
            box-sizing: border-box;
            border: 1px solid #47819c;
            padding: 4px 7px 4px 8px;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
    
            &:hover {
                background-color: #429fca;
            }
    
            span {
                color: #ffffff;
                font-family: 'DM Sans';
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 16px;
            }
        }
    }
    }`;

  call_more_tab_script = `
  import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-ar-detail',
templateUrl: './ar-detail.component.html',
styleUrls: ['./ar-detail.component.scss']
})
export class ArDetailComponent implements OnInit {

constructor() { }

ngOnInit(): void { }

}`;

tabs_html = `
<ul class="actions-tab">
              <li
                  class="actions-tab__item actions-tab__item--active"
              >
                  <span class="actions-tab__contain">
                      <img
                          class="icon normal"
                          src="assets/img/interaction-tab-chat-icon.svg"
                      />
                      <img
                          class="icon hover"
                          src="assets/img/interaction-tab-chat-active-icon.svg"
                      />
                      <span>Chat</span>
                  </span>
              </li>
              <li
                  class="actions-tab__item"
              >
                  <span class="actions-tab__contain">
                      <img
                          class="icon normal"
                          src="assets/img/interaction-tab-info-icon.svg"
                      />
                      <img
                          class="icon hover"
                          src="assets/img/interaction-tab-info-active-icon.svg"
                      />
          
                      <span>Info</span>
                  </span>
              </li>
          
              <li
                  class="actions-tab__item"
              >
                  <span class="actions-tab__contain">
                      <img
                          class="icon normal"
                          src="assets/img/interaction-tab-history-icon.svg"
                      />
                      <img
                          class="icon hover"
                          src="assets/img/interaction-tab-history-active-icon.svg"
                      />
          
                      <span>History</span>
                  </span>
              </li>
          
              <li
                  class="actions-tab__item"
              >
                  <span class="actions-tab__contain">
                      <img
                          class="icon normal"
                          src="assets/img/interaction-tab-notes-icon.svg"
                      />
                      <img
                          class="icon hover"
                          src="assets/img/interaction-tab-notes-active-icon.svg"
                      />
                      <span>Notes</span>
                  </span>
              </li>
          </ul>`;

  tabs_css = `
  .actions-tab{
    height: 40px;
    list-style: none;
    margin: 0 1px;
    padding: 0px;
    width: calc(100% - 1px);
    box-shadow: 0px 2px 12px rgba(17, 30, 38, 0.1), 0px 2px 18px rgba(4, 45, 69, 0.306272);
    
    & > li.actions-tab__item {
        display: inline-block;
        height: 40px;
        width: 25%;
        background-color: #FFFFFF;
        vertical-align: middle;
        text-align: center;
        border-bottom: solid #d5dde1 1px;  
        border-top: solid #FFFFFF 1px;  
        cursor: pointer;
    
        &:hover {
            .actions-tab__contain span{
                color: #219FCF;
            }
        }
        
        &:first-child{
            border-top-left-radius: 4px;
        }
    
        &:last-child{
            border-top-right-radius: 4px;
        }
    
        & > .actions-tab__contain{
            vertical-align: middle;
            display: flex;
            width: auto;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            position: relative;
    
            & > svg{
                color: #BDCCD2;
            } 
    
            & > span{
                color: #6D8790;
                font-family: "DM Sans";
                font-size: 16px;
                font-weight: bold;
                letter-spacing: -0.5px;
                line-height: 21px;
                padding-left:7px;
            }
            .hover { display: none; }
            .normal { display: block; }
            &:hover {
                .hover { display: block; }
                .normal { display: none; }
            }
        }
    
        &.actions-tab__item--active {
            background: #EBF9FF;
            border-bottom: 2px solid #219FCF;
            border-top: solid #FFFFFF 0px;
    
            
            .actions-tab__contain span{
                color: #219FCF;
            }
            .arrow-down {
                position: relative;
                bottom: -24px;
                left: -46px;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid #219FCF;
            }
    
            & > .actions-tab__contain{                
                .hover { display: block; }
                .normal { display: none; }
            }   
            
        }
    }
    }`;
  
  tabs_script = `
  import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-actions-tab',
templateUrl: './actions-tab.component.html',
styleUrls: ['./actions-tab.component.scss']
})
export class ActionsTabComponent implements OnInit {

constructor() { }

ngOnInit(): void { }
}`;

tabs2_html = `
<div
              class="call_tabs"
          >
              <div
                  class="tab_item"
              >
                  <p class="tab__content--active">Transcript</p>
              </div>
              <div
                  class="tab_item"
              >
                  <p class="tab__content">Dial Tones</p>
              </div>
              <div
                  class="tab_item"
              >
                  <p class="tab__content--deactive">Conference</p>
              </div>
              <div
                  class="tab_item"
              >
                  <p class="tab__content">Transfer</p>
              </div>
          </div>`;

  tabs2_css = `
  .call_tabs {
    width: calc(100%);
    position: relative;
    display: flex;
    // top:4px;
    height: 38px;
    background-color: #ffffff;
    margin-top: 3px;
    box-shadow: 0 2px 12px 0 rgba(17, 30, 38, 0.1),
        0 2px 18px 0 rgba(4, 45, 69, 0.31);
    overflow: hidden;
    z-index: 2;
    .tab_item {
        // width: 25%;
        flex-basis: 100%;
        display: flex;
        cursor: pointer;
        justify-content: center;
    
        .tab__content {
            margin-top: 4px;
            padding-top: 6px;
            color: #517785;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 18px;
            text-align: center;
            height: 30px;
            // width: 98px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 5px;
        }
    
        .tab__content--active {
            margin-top: 4px;
            padding-top: 6px;
            color: #219fcf;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 18px;
            text-align: center;
            height: 24px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 5px;
            background-color: rgba(33, 159, 207, 0.1);
        }
    
        .tab__content--deactive {
            margin-top: 4px;
            padding-top: 6px;
            opacity: 0.3;
            color: #517785;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 18px;
            text-align: center;
            height: 30px;
            // width: 98px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 5px;
        }
    }
    }`;

  tabs2_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-voice-transcript',
templateUrl: './voice-transcript.component.html',
styleUrls: ['./voice-transcript.component.scss']
})
export class VoiceTranscriptComponent implements OnInit {

constructor() { }

ngOnInit(): void { }

}`;

cards_html = `
<div class="queue-card"> 
              <div class="header">
                  <img src="assets/img/queue-chat-icon.svg" />
                  <span class="chats">Chats</span>
              </div>
              <div class="dir-row">
                  <div class="in-queue-set">
                      <div class="in-queue">In Queue</div>
                      <div class="number">2</div>
                  </div>
                  <div>
                      <div class="in-queue">LONGEST WAITING TIME</div>
                      <div class="number">
                          <span class="color-orange">3 Mins</span>
                          <span class="arrow">↑</span>
                      </div>
                  </div>
              </div>
              <div class="skills">Skills</div>
              <div>
                  <span class="skill-tag" >Account Inquiry</span>
              </div>
          </div>`;

  cards_css = `.queue-card {
    width: calc(100% - 32px);
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(174,197,206,0.4);
    margin-bottom: 5px;
    padding: 16px 15px;
    
    .header {
        display: flex;
    }
    .chats {
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 20px;
        letter-spacing: -0.3px;
        line-height: 26px;
        margin-left: 6px;
        }
    
    .dir-row {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        padding-bottom: 6px;
        border-bottom: 1px solid #ebeff1;
    
        .in-queue-set {
            margin-right: 45px;
        }
    
        .in-queue {
            opacity: 0.8;
            color: #6D8790;
            font-family: "DM Sans";
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 0.5px;
            line-height: 13px;
        }
    
        .number {
            color: #1C323F;
            font-family: "DM Sans";
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 24px;
            display: flex;
    
            .color-orange {
                color: #EA8C3E;
            }
    
            .color-green {
                color: #459950;
            }
            
            .color-red {
                color: #D85259;
            }
    
            .arrow {
                color: #219FCF;
                font-family: "Lucida Grande";
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 17px;
                margin-top: 3px;
            }
        }
    }
    
    .skills {
        opacity: 0.8;
        color: #6D8790;
        font-family: "DM Sans";
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 13px;
        margin: 12px 0;
        }
        
    .skill-tag {
        box-sizing: border-box;
        border: 1.4px solid rgba(109,135,144,0.1);
        border-radius: 12px;
        background-color: rgba(189,204,210,0.4);
        color: #517785;
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 16px;
        padding: 4px 8px;
        margin-left: 5px;
    }
    }`;

  cards2_html = `
  <div class="queue-card"> 
              <div class="header">
                  <img src="assets/img/queue-email-icon.svg" />
                  <span class="chats">Emails</span>
              </div>
              <div class="dir-row">
                  <div class="in-queue-set">
                      <div class="in-queue">In Queue</div>
                      <div class="number">2</div>
                  </div>
                  <div>
                      <div class="in-queue">LONGEST WAITING TIME</div>
                      <div class="number">
                          <span class="color-red">3 Mins</span>
                          <span class="arrow">↓</span>
                      </div>
                  </div>
              </div>
              <div class="skills">Skills</div>
              <div>
                  <span class="skill-tag" >Account Inquiry</span>
              </div>
          </div>`;

  cards2_css = `
  .queue-card {
    width: calc(100% - 32px);
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(174,197,206,0.4);
    margin-bottom: 5px;
    padding: 16px 15px;
    
    .header {
        display: flex;
    }
    .chats {
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 20px;
        letter-spacing: -0.3px;
        line-height: 26px;
        margin-left: 6px;
        }
    
    .dir-row {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        padding-bottom: 6px;
        border-bottom: 1px solid #ebeff1;
    
        .in-queue-set {
            margin-right: 45px;
        }
    
        .in-queue {
            opacity: 0.8;
            color: #6D8790;
            font-family: "DM Sans";
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 0.5px;
            line-height: 13px;
        }
    
        .number {
            color: #1C323F;
            font-family: "DM Sans";
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 24px;
            display: flex;
    
            .color-orange {
                color: #EA8C3E;
            }
    
            .color-green {
                color: #459950;
            }
            
            .color-red {
                color: #D85259;
            }
    
            .arrow {
                color: #219FCF;
                font-family: "Lucida Grande";
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 17px;
                margin-top: 3px;
            }
        }
    }
    
    .skills {
        opacity: 0.8;
        color: #6D8790;
        font-family: "DM Sans";
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 13px;
        margin: 12px 0;
        }
        
    .skill-tag {
        box-sizing: border-box;
        border: 1.4px solid rgba(109,135,144,0.1);
        border-radius: 12px;
        background-color: rgba(189,204,210,0.4);
        color: #517785;
        font-family: "DM Sans";
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 16px;
        padding: 4px 8px;
        margin-left: 5px;
    }
    }`;
  
    cards3_html= `
    <div class="queue-card"> 
              <div class="header">
                  <img src="assets/img/queue-call-icon.svg" />
                  <span class="chats">Calls</span>
              </div>
              <div class="dir-row">
                  <div class="in-queue-set">
                      <div class="in-queue">In Queue</div>
                      <div class="number">5</div>
                  </div>
                  <div>
                      <div class="in-queue">LONGEST WAITING TIME</div>
                      <div class="number">
                          <span class="color-green">2 Mins</span>
                          <span class="arrow">↓</span>
                      </div>
                  </div>
              </div>
              <div class="skills">Skills</div>
              <div>
                  <span class="skill-tag" >Account Inquiry</span>
              </div>
          </div>`;

    cards3_css = `
    .queue-card {
      width: calc(100% - 32px);
      border-radius: 10px;
      background-color: #FFFFFF;
      box-shadow: 0 1px 2px 0 rgba(174,197,206,0.4);
      margin-bottom: 5px;
      padding: 16px 15px;
      
      .header {
          display: flex;
      }
      .chats {
          color: #1C323F;
          font-family: "DM Sans";
          font-size: 20px;
          letter-spacing: -0.3px;
          line-height: 26px;
          margin-left: 6px;
          }
      
      .dir-row {
          display: flex;
          flex-direction: row;
          margin-top: 15px;
          padding-bottom: 6px;
          border-bottom: 1px solid #ebeff1;
      
          .in-queue-set {
              margin-right: 45px;
          }
      
          .in-queue {
              opacity: 0.8;
              color: #6D8790;
              font-family: "DM Sans";
              font-size: 10px;
              font-weight: bold;
              letter-spacing: 0.5px;
              line-height: 13px;
          }
      
          .number {
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 18px;
              font-weight: bold;
              letter-spacing: 0;
              line-height: 24px;
              display: flex;
      
              .color-orange {
                  color: #EA8C3E;
              }
      
              .color-green {
                  color: #459950;
              }
              
              .color-red {
                  color: #D85259;
              }
      
              .arrow {
                  color: #219FCF;
                  font-family: "Lucida Grande";
                  font-size: 14px;
                  font-weight: bold;
                  letter-spacing: 0;
                  line-height: 17px;
                  margin-top: 3px;
              }
          }
      }
      
      .skills {
          opacity: 0.8;
          color: #6D8790;
          font-family: "DM Sans";
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 0.5px;
          line-height: 13px;
          margin: 12px 0;
          }
          
      .skill-tag {
          box-sizing: border-box;
          border: 1.4px solid rgba(109,135,144,0.1);
          border-radius: 12px;
          background-color: rgba(189,204,210,0.4);
          color: #517785;
          font-family: "DM Sans";
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 16px;
          padding: 4px 8px;
          margin-left: 5px;
      }
      }`;
  call_transcript_html = `
  <div
              class="call-transcript"
          >
              <div
                  class="transcript__line"
              >
                  <div
                      class="content__name--first"
                  >
                      <div class="maintext">Hilda</div>
                  </div>
                  <div class="content__time">
                      11:20am
                  </div>
                  <div class="content__txt">
                      Hello, Good Morning!
                  </div>
              </div>
              <div
                  class="transcript__line"
              >
                  <div
                      class="content__name--second"
                  >
                      <div class="maintext">AI</div>
                  </div>
                  <div class="content__time">
                      11:20am
                  </div>
                  <div class="content__txt">
                      Good Morning! Hilda. How can I assit you?
                  </div>
              </div>
              <div
                  class="transcript__line"
              >
                  <div
                      class="content__name--first"
                  >
                      <div class="maintext">Hilda</div>
                  </div>
                  <div class="content__time">
                      11:20am
                  </div>
                  <div class="content__txt">
                    I need help with my account. I can't log in. It gives me an error message.
                  </div>
              </div>
              <div
                  class="transcript__line"
              >
                  <div
                      class="content__name--second"
                  >
                      <div class="maintext">AI</div>
                  </div>
                  <div class="content__time">
                      11:20am
                  </div>
                  <div class="content__txt">
                    What is the error message you get?
                  </div>
              </div>
              <div
                  class="transcript__line"
              >
                  <div
                      class="content__name--first"
                  >
                      <div class="maintext">Hilda</div>
                  </div>
                  <div class="content__time">
                      11:20am
                  </div>
                  <div class="content__txt">
                    Can not connect to your account at this time, please try again later.
                  </div>
              </div>
          </div>`;

  call_transcript_css = `
  .call-transcript {
    .header {
        height: 30px;
        width: 130px;
        color: #1c323f;
        font-family: 'DM Sans';
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.4px;
        line-height: 30px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        padding-top: 25px;
    }
    .content {
        overflow-y: auto;
        overflow-x: hidden;
        margin-left: 32px;
        margin-right: 32px;
        margin-bottom: 145px;
        box-sizing: border-box;
        margin-top: 20px;
        height: 253px;
        width: calc(100% - 64px);
        padding-bottom: 28.5px;
        border: 1px solid rgba(189, 204, 210, 0.5);
        border-radius: 10px;
        background-color: rgba(246, 250, 251, 0.6);
        .transcript__line {
            display: flex;
            margin-left: 20px;
            margin-top: 18px;
            .content__name--first {
                width: 55px;
                width: calc(15%);
                cursor: pointer;
    
                white-space: nowrap;
                display: inline-block;
    
                position: relative;
                .maintext {
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    white-space: normal;
                    word-break: break-all;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    color: #219fcf;
                    overflow: hidden;
                }
                &:hover {
                    overflow: visible;
                }
                &:hover::before {
                    content: attr(data-title);
                    position: absolute;
                    bottom: -46px;
                    padding: 10px;
                    background: #505c62;
                    color: #fff;
                    font-size: 14px;
                    white-space: nowrap;
                    border-radius: 6px;
                    transition: 0.1s ease-in;
                    font-family: 'DM Sans';
                }
                &:hover::after {
                    content: '';
                    position: absolute;
                    bottom: -12px;
                    left: 8px;
                    border: 8px solid transparent;
                    border-bottom: 8px solid #505c62;
                    transition: 0.1s ease-in;
                }
            }
            .content__name--second {
                width: calc(15%);
                color: #1c323f;
                font-family: 'DM Sans';
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 0;
    
                white-space: nowrap;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                white-space: normal;
                word-break: break-all;
                cursor: pointer;
            }
            .content__time {
                width: calc(15%);
                color: #6d8790;
                font-family: 'DM Sans';
                font-size: 12px;
                letter-spacing: 0;
                margin-left: 10px;
    
                white-space: nowrap;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                white-space: normal;
            }
            .content__txt {
                margin-left: 5px;
                width: 70%;
                color: #1c323f;
                font-family: 'DM Sans';
                font-size: 14px;
                letter-spacing: 0;
            }
        }
    }
    }`;
  
  call_transcript_script = `import {Component, OnInit} from '@angular/core';

  @Component({
  selector: 'app-call-transcript',
  templateUrl: './call-transcript.component.html',
  styleUrls: ['./call-transcript.component.scss']
  })
  export class CallTranscriptComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit(): void {
  
  }
  }`;

  modal1_html = `
  <div class="escalate-session">
  <div class="escalate-session__body" >
      <div class = "x">
          <img  class="normal" src="assets/img/close-icon.svg" />
          <img  class="hover" src="assets/img/close-hover-icon.svg" />

      </div>
      <form class="form">
          <div class="header">
              <img  src="assets/img/escalate-supervisor-icon.svg" />
          </div>
          <div class="content">
              <span>Are you sure you want to transfer this chat back to <br>the Supervisor? You can not undo this action.</span>
          </div>
      </form>
  </div>
  <div class="escalate-session__footer">
      <div class="btns">
          <div class="cancel">
              <img src="assets/img/cancel-icon.svg" />
              <span >Cancel</span>
          </div>
          <div class="save">
              <img src="assets/img/confirm-icon.svg" />
              <span >Transfer To Supervisor</span>
          </div>
      </div>
  </div>
</div>`;

modal1_css = `
.escalate-session {
  position: fixed;
  bottom: 0;
  width: calc(100% - 8px);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 0px 15px rgba(50, 50, 50, 0.75);
  border-radius: 10px;
  z-index: 5;
  .escalate-session__body {
      padding-top: 30.5px;
      background-color: #ffffff;
      overflow-y: scroll;
      width: calc(100% + 8px);
      .x {
          position: relative;
          float: right;
          cursor: pointer;
          color: black;
          top: -20px;
          margin-right: 10px;
          .normal {
              display: block;
          }
          .hover {
              display: none;
          }
          &:hover {
              .normal {
                  display: none;
              }
              .hover {
                  display: block;
              }
          }
      }
  
      .form {
          h3 {
              color: #1c323f;
              font-family: 'DM Sans';
              font-size: 20px;
              font-weight: 500;
              letter-spacing: -0.3px;
              line-height: 30px;
              text-align: center;
              margin: 0;
              margin-bottom: 44px;
          }
          h4 {
              height: 60px;
              width: 460px;
              color: #1c323f;
              font-family: 'DM Sans';
              font-size: 20px;
              font-weight: 500;
              letter-spacing: -0.3px;
              line-height: 30px;
              text-align: center;
          }
          .queue {
              margin-bottom: 0px;
          }
          .queueInput {
              margin-left: auto;
              margin-right: auto;
              width: calc(100% - 150px);
              margin-top: -18px;
              margin-bottom: 132px;
              .autoComplete {
                  position: absolute;
                  z-index: 200;
                  margin-top: -15px;
                  width: calc(100% - 158px);
              }
          }
      }
  }
  .escalate-session__footer {
      .btns {
          display: flex;
          flex-direction: row;
          cursor: pointer;
          .cancel {
              box-sizing: border-box;
              height: 40px;
              width: 50%;
              border: 1px solid #e3e5e5;
              border-radius: 0 0 0 10px;
              background-color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
  
              span {
                  margin-left: 5px;
                  opacity: 0.7;
                  color: #1c323f;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
              }
              &:hover {
                  background-color: #bdccd2;
              }
          }
  
          .save {
              height: 40px;
              width: 50%;
              border-radius: 0 0 10px 0;
              background-color: #219fcf;
              display: flex;
              align-items: center;
              justify-content: center;
  
              span {
                  margin-left: 5px;
                  color: #ffffff;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
              }
              &:hover {
                  background-color: rgb(32, 137, 179);
              }
          }
      }
  }
  }`;

  modal1_script = `
  import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-escalate',
templateUrl: './escalate.component.html',
styleUrls: ['./escalate.component.scss']
})
export class EscalateComponent implements OnInit {

constructor() { }

ngOnInit(): void {

}
}`;

modal2_html = `
<div class="wrapup-before">
<div class = "x">
    <img  class="normal" src="assets/img/close-icon.svg" />
    <img  class="hover" src="assets/img/close-hover-icon.svg" />
</div>
<div class="header">
    Make sure you have met below criteria before wrapping up the chat.
</div>
<div class="setting">
    <div class="item">
        <img  style="margin-right: 10px; margin-bottom: -1px" class="hover" src="assets/img/wrapup-item-icon.svg" /> 
        Have you responded to the chat?    
    </div>
    <div class="item">
        <img  style="margin-right: 10px; margin-bottom: -1px" class="hover" src="assets/img/wrapup-item-icon.svg" /> 
        Is there anything else you can help them with?  
    </div>
    <div class="item">
        <img  style="margin-right: 10px; margin-bottom: -1px" class="hover" src="assets/img/wrapup-item-icon.svg" />  
        Did you wish them a nice day?  
    </div>
</div>
<div class="action">

    <div class="back-button">
        <div class="content">
            Go Back
        </div>
    </div>
    <div class="wrapup-button">
        <div class="content">
            <img  style="margin-right: 5px;" src="assets/img/wrapup-dialog-confirm-icon.svg" />
            <span>
                Wrap Up
            </span>
        </div>
    </div>
</div>
</div>`;

modal2_css = `
.wrapup-before {
  position: fixed;
  bottom: 0;
  width: calc(100% - 8px);
  box-sizing: border-box;
  height: 284px;
  border: 1px solid rgba(109,135,144,0.15);
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 -2px 2px 0 rgba(109,135,144,0.06), 0 -15px 25px 0 rgba(109,135,144,0.15);
  .x {
      position: absolute;
      float: right;
      cursor: pointer;
      color: black;
      top: 14px;
      right: 13.5px;
      .normal { display: block; }
      .hover { display: none; }
      &:hover {
          .normal { display: none; }
          .hover { display: block; }
      }
  }
  .header {
      margin-top: 40.5px;
      margin-left: 75.5px;
      height: 60px;
      width: 398px;
      color: #1C323F;
      font-family: "DM Sans";
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 30px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
  }
  .setting {
      width: 329px; 
      margin-top: 28px;
      margin-left: auto;
      margin-right: auto;
      .item {
          margin-bottom: 10px;
          color: #1C323F;
          font-family: "DM Sans";
          font-size: 14px;
          letter-spacing: 0;
      }
  }
  .action {
      display: flex;
      position: absolute;
      bottom: 0;
      width: calc(100% + 1px);
      height: 39px;
      .back-button {
          box-sizing: border-box;
          height: 40px;
          width: 50%;
          border: 1px solid #E3E5E5;
          border-radius: 0 0 0 10px;
          background-color: #FFFFFF;
          cursor: pointer;
          .content {
              height: 18px;
              width: 55px;
              opacity: 0.7;
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0;
              line-height: 18px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 11px;
          }
          &:hover {
              background-color:  rgb(202, 228, 237);
          }
      }
      .wrapup-button {
          height: 40px;
          width: 50%;
          cursor: pointer;
          border-radius: 0 0 10px 0;
          background-color: #219FCF;
          
          .content {
              margin-left: auto;
              margin-right: auto;
              margin-top: 11px;   
              width: 80px;
              span {
                  height: 18px;
                  width: 58px;
                  color: #FFFFFF;
                  font-family: "DM Sans";
                  font-size: 14px;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
              }
          }
          &:hover {
              background-color: rgb(32, 137, 179);
          }
      }
  }
  }`;

  modal2_script = `
  import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-wrapup-before',
templateUrl: './wrapup-before.component.html',
styleUrls: ['./wrapup-before.component.scss']
})
export class WrapupBeforeComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}
}`;

modal3_html = `
<div class="email-discard-template">
            <div class="x">
                <img  class="normal" src="assets/img/close-icon.svg" />
                <img  class="hover" src="assets/img/close-hover-icon.svg" />
            </div>
            <div class="template-image">
                <img src="assets/img/email-discard-icon.svg" />
            </div>
            <div class="template-letter">
                Are you sure you want to discard this draft?<br>
                You can not undo this action
            </div>
            <div class="action">
                <div class="goback_button">
                    <div class="button__content">
                        Go Back
                    </div>
                </div>
                <div class="discard_button">
                    <div class="button__content">
                        <img style="margin-bottom: -1px; margin-right: 5px;" src="assets/img/discard-button-icon.svg" />
                        Yes, Discard
                    </div>
                </div>
            </div>
        </div>`;

  modal3_css = `
  .email-discard-template {
    z-index: 200000;
    box-sizing: border-box;
    height: 284px;
    width: calc(100% - 9px);
    border: 1px solid rgba(109,135,144,0.15);
    border-radius: 10px;
    background-color: #FFFFFF;
    position: relative;
    box-shadow: 0 -2px 2px 0 rgba(109,135,144,0.06), 0 -15px 25px 0 rgba(109,135,144,0.15);
    .x {
        position: absolute;
        right: 16px;
        top: 14px;
        cursor: pointer;
        .normal { display: block; }
        .hover { display: none; }
        &:hover {
            .normal { display: none; }
            .hover { display: block; }
        }
    }
    .template-image {
        margin-top:42.5px;
        height: 85px;
        width: 85px;
        margin-left: auto;
        margin-right: auto;
    }
    .template-letter {
        height: 60px;
        width: 460px;
        color: #1C323F;
        font-family: "DM Sans";
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.3px;
        line-height: 30px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 12px;
    }
    .action {
        position: absolute;
        bottom: 0px;
        display: flex;
        width: calc(100%);
        .goback_button {
            width: 50%;
            box-sizing: border-box;
            height: 40px;
            border: 1px solid #E3E5E5;
            border-radius: 0 0 0 10px;
            background-color: #FFFFFF;
            display: flex;
            justify-content: center;
            vertical-align: middle;
            align-items: center;
    
            cursor: pointer;
            &:hover {
                background-color: #BDCCD2;
            }
            .button__content {
                height: 18px;
                opacity: 0.7;
                color: #1C323F;
                font-family: "DM Sans";
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 18px;
            }
        }
        .discard_button {
            width: 50%;
            height: 40px;
            box-sizing: border-box;
            border-radius: 0 0 10px 0;
            background-color: rgba(216,82,89,0.2);
            display: flex;
            justify-content: center;
            vertical-align: middle;
            align-items: center;
            
            cursor: pointer;
            .button__content {
                height: 18px;
                color: #D4000B;
                font-family: "DM Sans";
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 18px;
                display: flex;
                width: 103px;
            }
            &:hover {
                background:rgba(216,82,89,0.3);
            }
        }
    }
    }`;

  modal3_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-email-discard-template',
templateUrl: './email-discard-template.component.html',
styleUrls: ['./email-discard-template.component.scss']
})
export class EmailDiscardTemplateComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}
}`;

chat_css = `
.chat-area {
  padding: 10px;
  font-family: 'DM Sans';
  overflow: scroll;
  margin-top: 3px;
  height: calc(100vh - 338px);
  
  .chat-block {
      & .agent,
      & .user {
          display: -ms-flexbox !important;
          display: flex !important;
          margin-bottom: 15px;
      }
  
      .action {
          margin-bottom: 10px;
          &.agent {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
          }
  
          &.user {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
          }
          .action-button {
              height: 40px;
              box-sizing: border-box;
              border-radius: 6px;
              background-color: #219fcf;
              box-shadow: inset 0 -3px 0 0 rgba(78, 168, 202, 0.25);
              padding-left: 15px;
              padding-right: 15px;
              display: flex;
              justify-content: center;
              vertical-align: middle;
              align-items: center;
              cursor: pointer;
              p {
                  text-align: center;
  
                  height: 18px;
                  color: #ffffff;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  font-weight: bold;
                  letter-spacing: 0;
                  line-height: 18px;
              }
              a {
                  text-decoration: none;
              }
              &:hover {
                  background-color: rgb(32, 137, 179);
              }
              &.selected {
                  background-color: rgb(32, 137, 179);
              }
          }
      }
      .card {
          margin-bottom: 10px;
          &.agent {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
          }
  
          &.user {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
          }
          .carousel {
              box-sizing: border-box;
              height: 264px;
              width: 212px;
              border: 1px solid rgba(109, 135, 144, 0.2);
              border-radius: 10px;
              background-color: #ffffff;
              box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
              .carousel__image {
                  height: 100px;
                  width: 210px;
                  border-radius: 10px 10px 0 0;
                  background: linear-gradient(
                      23.71deg,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.5) 100%
                  );
                  .carousel__image__selector {
                      position: relative;
                      cursor: pointer;
                      float: right;
                      right: 11px;
                      top: -90px;
                      padding-left: 7px;
                      padding-top: 3px;
                      box-sizing: border-box;
                      height: 26px;
                      width: 26px;
                      box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                  }
              }
              .carousel__description {
                  margin-left: 10px;
                  height: 36px;
                  width: 193px;
                  color: #1c323f;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
              }
              .carousel__price {
                  margin-left: 10px;
                  height: 16px;
                  width: 193px;
                  opacity: 0.5;
                  color: #1c323f;
                  font-family: 'DM Sans';
                  font-size: 12px;
                  letter-spacing: 0;
                  line-height: 16px;
              }
              .carousel__viewdetails {
                  height: 18px;
                  width: 212px;
                  text-align: center;
                  color: #219fcf;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
                  text-align: center;
                  margin-top: 25px;
                  cursor: pointer;
              }
              .carousel__shop {
                  height: 18px;
                  width: 212px;
                  color: #219fcf;
                  font-family: 'DM Sans';
                  font-size: 14px;
                  text-align: center;
                  font-weight: 500;
                  letter-spacing: 0;
                  line-height: 18px;
                  text-align: center;
                  margin-top: 22px;
                  cursor: pointer;
              }
          }
      }
      .text {
          &.agent {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
  
              .chat-area_txt {
                  border-radius: 6px 6px 6px 0;
                  background-color: #219fcf;
                  max-width: 80%;
                  padding: 10px;
                  font-size: 14px;
                  text-align: left;
                  color: #fff;
                  overflow-wrap: break-word;
                  position: relative;
                  white-space: pre-line;
                  & .time {
                      position: absolute;
                      bottom: -15px;
                      left: -5px;
                      color: #6d8790;
                      font-size: 11px;
                      width: 150px;
                  }
              }
          }
  
          &.user {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
  
              .chat-area_txt {
                  max-width: 80%;
                  padding: 10px;
                  border-radius: 6px 6px 0 6px;
                  background-color: rgba(189, 204, 210, 0.7);
                  font-size: 14px;
                  overflow-wrap: break-word;
                  text-align: right;
                  position: relative;
                  white-space: pre-line;
                  & .time {
                      position: absolute;
                      bottom: -15px;
                      right: 0;
                      color: #6d8790;
                      font-size: 11px;
                      width: 150px;
                  }
              }
          }
      }
      .attachment {
          &.agent {
              -ms-flex-pack: start !important;
              justify-content: flex-start !important;
          }
          &.user {
              -ms-flex-pack: end !important;
              justify-content: flex-end !important;
          }
          a {
              font-family: 'DM Sans';
              font-size: 14px;
              cursor: pointer;
              color: #4ea8ca;
              font-family: 'DM Sans';
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0;
          }
          .transcript__screenshot {
              // margin-left: 32px;
              .screenshot {
                  img {
                      height: 75px;
                      width: 136px;
                  }
              }
              .footer {
                  width: 136px;
                  margin-top: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  vertical-align: middle;
                  height: 10px;
                  p {
                      margin-left: 10px;
                      // height: 20px;
                      width: 84px;
                      color: #4ea8ca;
                      font-family: 'DM Sans';
                      font-size: 14px;
                      font-weight: 500;
                      letter-spacing: 0;
                      // line-height: 20px;
  
                      -webkit-line-clamp: 1;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      white-space: normal;
                      word-break: break-all;
                      overflow: hidden;
                      &:hover {
                          cursor: pointer;
                          text-decoration: underline;
                      }
                  }
              }
          }
      }
  }
  
  .divider {
      text-align: center;
      width: 100%;
      height: 12px;
      border-bottom: 1px solid #bdccd2;
      margin-bottom: 10px;
  
      & span {
          background: #f6fafb;
          padding: 0 8px;
          color: #6d8790;
          font-family: 'DM Sans';
          font-size: 11px;
          letter-spacing: 0;
      }
  }
  .layoutDesign {
      height: 10px;
      padding-bottom: 10px;
  }
  }`;

  chat_script = `
  import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-chat-transcript',
templateUrl: './chat-transcript.component.html',
styleUrls: ['./chat-transcript.component.scss']
})
export class ChatTranscriptComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}
}`;

chat_html = `<div
class="chat-area"
>
<div
    class="chat-block"
>
    <div
        class="text divider"
    >
        <span>Agent Joined The Chat - 07:40</span>
    </div>
</div>
<div
    class="chat-block"
>
    <div
        class="text user"
    >
        <div
            class="chat-area_txt"
        >Hello!<span class="time">07:32</span></div>
    </div>
</div>

<div
    class="chat-block"
>
    <div
        class="text user"
    >
        <div
            class="chat-area_txt"
        >How are you?<span class="time">07:33</span></div>
    </div>
</div>

<div
    class="chat-block"
>
    <div
        class="text agent"
    >
        <div
            class="chat-area_txt"
        >Hello!<span class="time">07:33</span></div>
    </div>
</div>
<div
    class="chat-block"
>
    <div
        class="text agent"
    >
        <div
            class="chat-area_txt"
        >Fine Thanks. What about you?<span class="time">07:34</span></div>
    </div>
</div>
<div
    class="chat-block"
>
    <div
        class="text user"
    >
        <div
            class="chat-area_txt"
        >I am good. Thank you.<span class="time">07:34</span></div>
    </div>
</div>

<div
    class="chat-block"
>
    <div
        class="text user"
    >
        <div
            class="chat-area_txt"
        >What are you contacting us about today?<span class="time">07:34</span></div>
    </div>
</div>
<div
    class="chat-block"
>
    <div
        class="text agent"
    >
        <div
            class="chat-area_txt"
        >Account<span class="time">07:34</span></div>
    </div>
</div>
<div
    class="chat-block"
>
    <div
        class="text user"
    >
        <div
            class="chat-area_txt"
        >I see you have 3 accounts, of which account do you want to know the balance? Checking, Savings, Credit Card<span class="time">07:34</span></div>
    </div>
</div>
</div>`;

phone_pulse_css = `
.phonePulse {
  .phonePulse__container {
      // width: 600px;
      // height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .item {
          z-index: 100;
          margin-top: 8px;
          padding: 5px;
      }
      .circle {
          border-radius: 50%;
          background-color: rgb(225, 235, 240);
          width: 100px;
          height: 100px;
          position: absolute;
          opacity: 0;
          animation: scaleIn 1.5s infinite
              cubic-bezier(0.36, 0.11, 0.89, 0.32);
      }
      @keyframes scaleIn {
          from {
              transform: scale(0.5, 0.5);
              opacity: 0.5;
          }
          to {
              transform: scale(2.5, 2.5);
              opacity: 0;
          }
      }
  }
  }`;

  phone_pulse_script = `import { Component, OnInit} from '@angular/core';

  @Component({
  selector: 'app-direct-transfer',
  templateUrl: './direct-transfer.component.html',
  styleUrls: ['./direct-transfer.component.scss']
  })
  export class DirectTransferComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  }`;

  phone_pulse_html = `<div class="phonePulse">
  <div class="phonePulse__container">
      <div class="item">
          <img  src="assets/img/calling-screen-phone-icon.svg" />
      </div>
      <div class="circle" style="animation-delay: 0s"></div>
      <div class="circle" style="animation-delay: 0.5s"></div>
      <div class="circle" style="animation-delay: 1s"></div>
      <div class="circle" style="animation-delay: 1.5s"></div>
      <div class="circle" style="animation-delay: 2s"></div>
  </div>
</div>`;

spinner_script = `import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-spinner',
templateUrl: './spinner.component.html',
styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}

}`;

spinner_css = `.spinner
{
  position: absolute;
  bottom: calc(50%) ;
  left: calc(50% - 105px);
  width: 50px;
  height: 143px;
}`;

spinner_html = `<div class="spinner">
  <img src="assets/img/spinner.svg">
</div>`;

email_contacts_form_html = `
<div class="emailContactsForm">
    <div class="header-actions">
        <div class="search-bar">
            <div class="search-bar__left">
                
                <input type="text" [(ngModel)]="contactSearchText" id="_search" placeholder="Search"/>
                <img src="assets/img/search gray.svg">
            </div>
        </div>
        <div class="plusButton">
            <img src="assets/img/button-plus-icon.svg" />
        </div>
    </div>
    <div class="content">
        <div class="item" *ngFor="let contact of contacts">
            <div class="item__name" *ngIf="contact.name.toLowerCase().includes(contactSearchText.toLowerCase())">
                {{ contact.name }}
            </div>
            <div class="item__role" *ngIf="contact.name.toLowerCase().includes(contactSearchText.toLowerCase())">
                {{ contact.role }}
            </div>
            <div class="item__email" *ngIf="contact.name.toLowerCase().includes(contactSearchText.toLowerCase())">
                {{ contact.email }}
            </div>
        </div>
    </div>
</div>`;

email_contacts_form_css = `
.emailContactsForm {
  box-sizing: border-box;
  height: 374px;
  width: 278px;
  border: 1px solid rgba(109,135,144,0.15);
  border-radius: 10px 0 10px 10px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06), 0 15px 25px 0 rgba(109,135,144,0.45);
  .header-actions {
      margin-left: 10.5px;
      margin-top: 10.5px;
      display: flex;
      .search-bar{
              
          // position: absolute;
          width: 211px;
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
                  height: 15px;
                  width: 15px;
                  display: inline-block;
                  padding-top: 8px;
              }
      
              & > input{
                  padding-left: 11px;
                  box-sizing: border-box;
                  color: black;
                  font-family: "DM Sans";
                  font-size: 14px;
                  letter-spacing: 0;
                  line-height: 18px;
                  background: transparent;
                  border: none;
                  width: 188px;
                  padding-top : 4px;
                  
                  &:focus {
                      outline: none;
                  }
              }
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
  .content {
      margin-top: 7px;
      margin-bottom: 5px;
      height: 320px;
      overflow-y: auto;
      overflow-x: hidden;
      .item {
          
          margin-top: 3px;
          cursor: pointer;
          .item__name {
              height: 18px;
              padding-left: 15px;
              padding-top: 9px;
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 14px;
              font-weight: bold;
              letter-spacing: 0;
              line-height: 18px;
          }
          .item__role {
              padding-left: 15px;
              padding-top: 9px;
              height: 16px;
              opacity: 0.7;
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 12px;
              letter-spacing: 0;
              line-height: 16px;
          }
          .item__email {
              padding-left: 15px;
              padding-top: 9px;
              height: 16px;
              opacity: 0.7;
              color: #1C323F;
              font-family: "DM Sans";
              font-size: 12px;
              font-weight: bold;
              letter-spacing: 0;
              line-height: 16px;
          }
          .expand_button {
              padding-left: 15px;
              position: relative;
              left: 231px;
              margin-top: -20px;
          }
          &:hover {
              background-color: rgb(233, 246, 251);
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
}`;

email_contacts_form_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-contacts-form',
  templateUrl: './email-contacts-form.component.html',
  styleUrls: ['./email-contacts-form.component.scss']
})
export class EmailContactsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts = [
    {
        'name': 'Thomas Smith',
        'role': 'CEO, XYZ Company',
        'email': 'thomas_smith@yahoo.com',
    },
    {
        'name': 'Calvin Hogan',
        'role': 'Agent, Service Dpt, ABC corp',
        'email': 'lavada_kuhic@janice.biz',
    },
    {
        'name': 'Jay Mathis',
        'role': 'Supervisor, Marketing Dpt, Lorem Inc',
        'email': 'eusebio.haag@jolie.tv',
    },
    {
        'name': 'Hilda West',
        'role': 'Agent, Service Dpt, ABC corp',
        'email': 'bauch_valerie@hillard.co.uk',
    },
    {
        'name': 'Thomas Smith',
        'role': 'CEO, XYZ Company',
        'email': 'thomas_smith@yahoo.com',
    },
    {
        'name': 'Calvin Hogan',
        'role': 'Agent, Service Dpt, ABC corp',
        'email': 'lavada_kuhic@janice.biz',
    },
    {
        'name': 'Jay Mathis',
        'role': 'Supervisor, Marketing Dpt, Lorem Inc',
        'email': 'eusebio.haag@jolie.tv',
    },
    {
        'name': 'Hilda West',
        'role': 'Agent, Service Dpt, ABC corp',
        'email': 'bauch_valerie@hillard.co.uk',
    },
  ];
  contactSearchText: string = '';
}
`;

dial_pad_html = `
<div class="dial-tones" >
    <div class="header">
        Send Dial Tones
    </div>
    <div class="dialnumber">
        {{ this.dialNumber }}
        <!--<input type="text" class="form-control" [(ngModel)]="dialNumber">-->
    </div>
    <div class="content">
        <div class="number-button" (click)="numberButtonClick(1)">
            <div class="button__number">
                1
            </div>
          
        </div>
        <div class="number-button" (click)="numberButtonClick(2)">
            <div class="button__number">
                2
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick(3)">
            <div class="button__number">
                3
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick(4)">
            <div class="button__number">
                4
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick(5)">
            <div class="button__number">
                5
            </div>
            
        </div>
        <div class="number-button" (click)="numberButtonClick(6)">
            <div class="button__number">
                6
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick(7)">
            <div class="button__number">
                7
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick(8)">
            <div class="button__number">
                8
            </div>
            
        </div>
        <div class="number-button" (click)="numberButtonClick(9)">
            <div class="button__number">
                9
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick('*')">
            <div class="button__number">
                *
            </div>
          
        </div>
        <div class="number-button" (click)="numberButtonClick(0)">
            <div class="button__number">
                0
            </div>
           
        </div>
        <div class="number-button" (click)="numberButtonClick('#')">
            <div class="button__number">
                #
            </div>
            
        </div>
    </div>
</div>`;

dial_pad_css = `
.dial-tones {
  .header {
      height: 30px;
      width: 250px;
      color: #1c323f;
      font-family: 'DM Sans';
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.4px;
      line-height: 30px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      padding-top: 25px;
      margin-bottom: 4px;
  }
  .dialnumber {
      color: #1c323f;
      font-family: 'DM Sans';
      font-size: 27.2px;
      letter-spacing: 0;

      text-align: center;
      line-height: 35px;
      height: 35px;
      margin-bottom: 2px;
      .form-control {
          border: none;
          font-family: 'DM Sans';
          font-size: 27.2px;
          letter-spacing: 0;

          text-align: center;
          line-height: 35px;
      }
  }
  .content {
      height: 230px;
      width: 190px;
      margin-left: auto;
      margin-right: auto;
      // margin-top: 20px;
      margin-bottom: 145px;
      display: flex;
      flex-wrap: wrap;
      .number-button {
          cursor: pointer;
          box-sizing: border-box;
          height: 52px;
          width: 52px;
          margin-left: 10px;
          margin-bottom: 10px;
          border: 1px solid rgba(109, 135, 144, 0.2);
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
          .button__number {
              color: #517785;
              font-family: 'DM Sans';
              font-size: 21.6px;
              letter-spacing: 0;
              line-height: 28px;
              text-align: center;
              margin-top: 9px;
          }
          .button__character {
              width: 52px;
              color: #517785;
              font-family: 'DM Sans';
              font-size: 11px;
              font-weight: bold;
              letter-spacing: 0.5px;
              line-height: 14px;
              text-align: center;
          }
      }
      .number-button:hover {
          background-color: rgba(33, 159, 207, 0.2);
      }
  }
}
.footer {
  position: fixed;
  bottom: 0px;
  width: calc(100% - 8px);
}
`;
dial_pad_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial-pad',
  templateUrl: './dial-pad.component.html',
  styleUrls: ['./dial-pad.component.scss']
})
export class DialPadComponent implements OnInit {
  
  dialNumber = '';
  constructor() { }

  ngOnInit(): void {
  }
  numberButtonClick(number) {
      this.dialNumber += number;
  }
}
`;

overflow_tab_css = ` 
// :host{
//     width: 100%;
//     margin: 0px 2px;
//     display: block;
//     height: 100%;
// }

.overflow-tab {
    width: 100%;
    position: relative;
}
.rotate {
    margin-top: 5px;
    transform: rotate(90deg);
}

@mixin pulsing($color) {
    @keyframes pulsate {
        0% { background-color: $color;}
        50% { background-color: lighten($color, 15%); border-color: lighten($color, 15%) }
        100% { background-color: $color;}
    }
}

@include pulsing(#449D44);

.pulse {  
    color: white;
    animation: pulsate 1s infinite;
    margin: 50px;
}

li.call-tab__item{
    height: 100%;
    margin: 0px 0px;
    width: 100%;
    // width: 50px;
    border-radius: 4px;
    background-color: #203B4C;
    display: block;
    cursor: pointer;
    
    .call-tab__top-title{
        color: #FFFFFF;
        font-family: "DM Sans";
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 17px;
        display: block;
        text-align: center;
        padding-top: 7px;
    }

    .call-tab__top-title-cross{
        color: #5b7f8c;
        font-family: "DM Sans";
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 17px;
        display: block;
        text-align: center;
        padding-top: 17px;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
    }

    .call-tab__bottom-title{
        vertical-align: middle;
        display: flex;
        width: auto;
        justify-content: center;
        align-items: center;
        
        svg{
            width: 12px;
            height: 12px;
            margin-right: 5px;

            path{
                fill: rgb(109,135,144);
                opacity: 0.4;
            }
        }
        
        span{
            color: #C8E0E9;
            font-family: "DM Sans";
            font-size: 13px;
            letter-spacing: -0.5px;
            line-height: 17px;
        }
    }

    &.call-tab__item--active{
        background-color: #459950;    
        
        .call-tab__bottom-title{
            svg{
                path{
                    fill:white;
                    opacity: 1;
                }
            } 

            span{
                color: white;
            }  
        }
    }
}
.more-dropdown {
    display: inline-flex;
    // position: relative;

    .sub-title {
        width: calc(100% - 20px);
        padding: 10px;
        background-color: #eff3f5;
        color: #517785;
        font-family: "DM Sans";
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.7px;
        line-height: 13px;
        border-radius: 10px;
    }
   
    ul{        
        position: absolute;
        list-style: none;
        margin-top: -11px;
        margin-right:52px;
        right: -48px;
        padding:0px;
        border: 1px solid rgba(109,135,144,0.15);        
        border-radius: 10px 0px 10px 10px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 2px 0 rgba(109,135,144,0.06);
        // width: 546px;
        width: calc(100% - 10px);
        z-index: 99;

        li {
            color: #000000;
            font-family: "DM Sans";
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 17px;
            border-bottom: 1px solid #6D879015;
            /* opacity: 0.15; */   
            cursor: pointer;
            padding-left: 10.5px;
            padding-right: 10.5px;
    
            .item-css {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 44px; 
    
                .item-right {
                    float: right;
                    color: #5b7f8c;
                    font-size: 12px;
        
                    .item-time {
                        float: right;
                        color: #517785;
                        font-family: "DM Sans";
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 0;
                        line-height: 16px;
                        text-align: right;
                    }
            
                    .deferred-font {
                        color: #C26524;
                        font-family: "DM Sans";
                        font-size: 12px;
                        font-weight: bold;
                        letter-spacing: -0.2px;
                        line-height: 16px;
                        text-align: right;
                    }
                }
                .main-text {
                    color: #1C323F;
                    font-family: "DM Sans";
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                }
        
                button.ongoing-btn{
                    margin-left: 7px;
                    padding: 2.4px 7px 3.6px 7px;
                    border: none;
                    display: inline;            
                    cursor: pointer;
                    border-radius: 10px;
                    background-color: #41C252;

                    span{
                        color: #FFFFFF;
                        font-family: "DM Sans";
                        font-size: 11px;
                        font-weight: bold;
                        letter-spacing: 0;
                        line-height: 14px;
                    }
                }
                button.deferred-btn{
                    margin-left: 7px;
                    padding: 4.4px 6px 7.6px 8px;
                    border: none;
                    display: inline;            
                    cursor: pointer;
                    border-radius: 5px;
                    background-color: #219FCF;
                    box-shadow: inset 0 -2px 0 0 #198FBB;

                    span{
                        color: #FFFFFF;
                        font-family: "DM Sans";
                        font-size: 11px;
                        font-weight: bold;
                        letter-spacing: 0;
                        line-height: 14px;
                    }
                }
            }
    
            & > div > div > span > svg{
                margin-right: 10px;
                margin-bottom: -2px;
                
                path{
                    fill: rgb(109,135,144);
                    opacity: 0.4;
                }  
            }
            .linked_mark {
                position: absolute;
                margin-top: -58px;
                margin-left: -3px;
            }
        }
    }


}
`;

overflow_tab_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overflow-tab',
  templateUrl: './overflow-tab.component.html',
  styleUrls: ['./overflow-tab.component.scss']
})
export class OverflowTabComponent implements OnInit {

  isShow:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.isShow = !this.isShow;
  }

}
`;

channel_component_html = `
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
channel_component_css = `
.multi-level-dropdown {
    display: inline-flex;
    position: relative;
    cursor: pointer;
    .pulse {
        
        border-radius: 15px;
        // background-color: #5B9E73;
        // border-color: #5B9E73;
        border: 1px solid #5B9E73;
        width: 85px;
        height: 27px;
        position: absolute;
        // margin-left: 3px;
        margin-right: 6px;
        opacity: 1;
        animation: scaleIn1 2s infinite
            cubic-bezier(0.36, 0.11, 0.89, 0.32);
    }
    @keyframes scaleIn1 {
        from {
            transform: scale(1, 1);
            opacity: 0.5;
        }
        to {
            transform: scale(1.5, 1.5);
            opacity: 0;
        }
    }
    .multi-level-dropdown__ready-tooltip {
        left: 50% !important;
        transform: translateX(-50%) !important;
        right: auto;
    }

    .multi-level-dropdown__ready-tooltip::after {
        left: 50% !important;
        transform: translateX(0%) !important;
        right: auto !important;
    }

    .multi-level-dropdown__button {
        display: inline-flex;
        height: 27px;
        width: 85px;
        border: 1px solid #5b9e7340;
        border-radius: 15px;
        text-decoration: none;
        margin-left: 4px;
        box-shadow: 0 1px 0 0 rgba(28, 50, 63, 0.1);
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        position: relative;

        &:hover {
            border: 1px solid #3bbe6a;
            span {
                color: #3bbe6a;
            }
            .multi-level-dropdown__timer {
                color: #d63139;
            }
            .multi-level-dropdown__timer--warning {
                color: #e4813c;
            }
            .multi-level-dropdown__timer--gray {
                color: #6d8790;
            }

            #UI-Kit_C1 {
                fill: #3bbe6a;
            }

            .multi-level-dropdown__button__img-second {
                path {
                    opacity: 1;
                    stroke: #3bbe6a;
                }
            }
        }

        .multi-level-dropdown__button__img-second {
            height: 5px;
            width: 8px;
            position: absolute;
            right: 5.5px;
        }

        span {
            color: #5b9e73;
            font-family: 'DM Sans';
            font-size: 13px;
            font-weight: 500;
            letter-spacing: -0.5px;
            line-height: 17px;
            text-align: center;
            display: inline-block;
            padding-top: 0px;
            padding-left: 6px;
        }

        .multi-level-dropdown__button__img-first {
            position: absolute;
            top: 6px;
            left: 9px;
        }

        .multi-level-dropdown__tooltip {
            visibility: hidden;
            width: auto;
            background-color: #5b9e73;
            color: #ffffff !important;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 18px;
            text-align: center;
            padding: 9px 11px;
            border-radius: 6px;

            /* Position the tooltip text */
            position: absolute;
            z-index: 1;
            top: 135%;
            left: 50%;
            white-space: nowrap;
            transform: translateX(-50%);

            /* Fade in tooltip */
            opacity: 0;
            transition: 0.1s ease-in;

            &::after {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                margin-left: -8px;
                border-width: 8px;
                border-style: solid;
                border-color: transparent transparent #5b9e73 transparent;
            }

            &.multi-level-dropdown__tooltip_last {
                transform: none;
                right: 0;
                left: auto;

                &:after {
                    right: 34px;
                    left: auto;
                }
            }
        }

        .multi-level-dropdown__timer {
            font-family: 'Roboto Mono';
            color: #d85259;
        }
        .dropdown-icon {
            // display: absolute;
            height: 5px;
            width: 8px;
            padding: 11px 7px;
            position: absolute;
            right: 0;

        }
        .multi-level-dropdown__timer--warning {
            color: #e4813c;
        }
        .multi-level-dropdown__timer--gray {
            color: #6d8790;
        }

        &:hover {
            ul {
                display: block;
            }

            .multi-level-dropdown__tooltip {
                visibility: visible;
                opacity: 1;
            }
        }

        &.multi-level-dropdown__button--danger {
            border: 1px solid #d8525940;
            .pulse {
                border: 1px solid #d8525940;
            }
            #UI-Kit_C1 {
                fill: #d85259;
            }
            &:hover {
                border: 1px solid #d63139;

                #UI-Kit_C1 {
                    fill: #d63139;
                }

                .multi-level-dropdown__button__img-second {
                    path {
                        stroke: #d63139;
                    }
                }
            }

            .multi-level-dropdown__tooltip {
                background-color: #d85259;
                color: white;

                &::after {
                    border-color: transparent transparent #d85259 transparent;
                }
            }
            .multi-level-dropdown__button__img-second {
                path {
                    stroke: #d85259;
                }
            }
        }

        &.multi-level-dropdown__button--warning {
            border: 1px solid #d8525940;
            .pulse {
                border: 1px solid #d8525940;
            }
            #UI-Kit_C1 {
                fill: #e4813c;
            }
            &:hover {
                border: 1px solid #e4813c;

                #UI-Kit_C1 {
                    fill: #e4813c;
                }

                .multi-level-dropdown__button__img-second {
                    path {
                        stroke: #e4813c;
                    }
                }
            }

            .multi-level-dropdown__tooltip {
                background-color: #e4813c;
                color: white;

                &::after {
                    border-color: transparent transparent #e4813c transparent;
                }
            }
            .multi-level-dropdown__button__img-second {
                path {
                    stroke: #e4813c;
                }
            }
        }

        &.multi-level-dropdown__button--gray {
            border: 1px solid #6d8790;
            .pulse {
                border: 1px solid #6d8790;
            }
            #UI-Kit_C1 {
                fill: #6d8790;
            }
            &:hover {
                border: 1px solid #6d8790;

                #UI-Kit_C1 {
                    fill: #6d8790;
                }

                .multi-level-dropdown__button__img-second {
                    path {
                        stroke: #6d8790;
                    }
                }
            }

            .multi-level-dropdown__tooltip {
                background-color: #6d8790;
                color: white;

                &::after {
                    border-color: transparent transparent #6d8790 transparent;
                }
            }
            .multi-level-dropdown__button__img-second {
                path {
                    stroke: #6d8790;
                }
            }
        }
    }

    ul {
        position: absolute;
        list-style: none;
        margin-top: 30px;
        right: 0;
        padding: 0px;
        border: 1px solid rgba(109, 135, 144, 0.15);
        border-radius: 10px 0px 10px 0px;
        background-color: #ffffff;
        box-shadow: 0 2px 2px 0 rgba(109, 135, 144, 0.06);
        width: 133px;
        z-index: 100;
    }

    li {
        height: 27px;
        color: #5b9e73;
        font-family: 'DM Sans';
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 17px;
        padding-left: 10px;
        padding-right: 10px;
        border-bottom: 1px solid #6d879015;
        /* opacity: 0.15; */
        padding-top: 8px;
        cursor: pointer;

        &:first-child {
            border-radius: 10px 0px 0px 0px;
        }

        &:last-child {
            border-radius: 0px 0px 10px 0px;
        }

        & > span {
            svg {
                right: 0;
                position: absolute;
                margin-right: 7.25px;
                margin-top: 2.25px;
            }
        }

        & > ul {
            display: none;
        }

        &:hover {
            background: #e6f3f7;

            > ul {
                display: inline-block;
                margin-top: -9px;
                left: calc(-100% + -2px);
                position: absolute;
            }
        }
    }

    li.multi-level-dropdown__danger {
        color: #dd5050;

        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    li.multi-level-dropdown__warning {
        color: #e4813c;

        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    li.multi-level-dropdown__gray {
        color: #6d8790;

        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    li {
        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    li.multi-level-dropdown__action {
        padding: 7px;
        height: auto;

        button {
            width: 100%;
            height: 30px;
            border-radius: 4px;
            background-color: #4ea8ca;
            border: none;
            vertical-align: middle;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:focus {
                outline: none;
            }
            &:hover {
                background-color: rgb(32, 137, 179);
            }

            path {
                fill: white;
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
    }
}`;
channel_component_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-component',
  templateUrl: './channel-component.component.html',
  styleUrls: ['./channel-component.component.scss']
})
export class ChannelComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
`;
overflow_tab_html = `
<div class="overflow-tab">
    <ul
        class="call-tab"
    >
        <div
            class="call-tab__container "
        >
        <li
            class="call-tab__item incoming"
        >
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="robo-mono-font"
                >Incoming</span>
            </span>
        </li>
        </div>
        <div
            class="call-tab__container "
        >
        <li
            class="call-tab__item"
        >
            <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2690.000000, -791.000000)"
                            fill="#459950"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                                id="chat_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >00:12</span>
            </span>

        </li>

        </div>
        <div
            class="call-tab__container "
        >
        <li
            class="call-tab__item linkedto"
        >
            <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >02:35</span>
            </span>
        </li>

        </div>
        <div
            class="call-tab__container "
        >
        <li
            class="call-tab__item"
        >
            <img class="new_message-dot" src="assets/img/Oval.svg">
            <span class="call-tab__top-title">
                <span class="name">Siva</span>
                <span class="multi-level-dropdown__tooltip">Siva</span>
            </span>
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2727.000000, -792.000000)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14118,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                id="call_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >02:35</span>
            </span>
        </li>
        </div>
        <div
            class="call-tab__container "
        >
        <li
            class="call-tab__item"
        >
            <!--<img class="new_message-dot" src="../../assets/icons/Oval.svg">-->
            <span
                class="call-tab__top-title defered"
            >
                <span class="name">Siva</span>
                <span
                    class="multi-level-dropdown__tooltip"
                >Siva</span>
            </span>
        
            <span class="call-tab__bottom-title">
                <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 14 12"
                >
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <g
                            id="UI-Kit_C1"
                            transform="translate(-2763.000000, -793.000000)"
                            fill="#459950"
                            fill-rule="nonzero"
                        >
                            <path
                                d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                                id="email_green-1"
                            ></path>
                        </g>
                    </g>
                </svg>
                <span
                    class="dm-sans-font"
                >00:15</span>
        
            </span>
            <span
                class="emailDeferedStatus"
            >Defered 1d ago</span>
        
        </li>
        
    </div>
    <div class="call-tab__container ">
        <li *ngIf="!isShow" class="call-tab__item" (click)="toggleDropdown()">
            <span class="call-tab__top-title">+4</span>
            <span class="call-tab__bottom-title"> 
                <span><img src="assets/img/arrow.svg" class="rotate"></span>
            </span>
        </li>
        <li *ngIf="isShow" class="call-tab__item" (click)="toggleDropdown()" style="background-color: #eff3f5; height: 120%;">
            <span class="call-tab__top-title-cross">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M12.7759 1.78581L12.4223 1.43226V1.43226L12.7759 1.78581ZM14.1901 1.78581L13.8365 2.13937V2.13937L14.1901 1.78581ZM7.99994 6.56176L7.64639 6.91531L7.99994 7.26887L8.35349 6.91531L7.99994 6.56176ZM3.22399 1.78581L2.87044 2.13937L3.22399 1.78581ZM1.80978 1.78581L2.16333 2.13937L2.16333 2.13937L1.80978 1.78581ZM1.78581 1.80978L1.43226 1.45623L1.43226 1.45623L1.78581 1.80978ZM1.78581 3.22399L1.43226 3.57755H1.43226L1.78581 3.22399ZM6.56176 7.99994L6.91531 8.35349L7.26887 7.99994L6.91531 7.64639L6.56176 7.99994ZM1.78581 12.7759L2.13937 13.1294L1.78581 12.7759ZM1.78581 14.1901L2.13937 13.8365H2.13937L1.78581 14.1901ZM1.80978 14.2141L1.45623 14.5676L1.45623 14.5676L1.80978 14.2141ZM3.22399 14.2141L2.87044 13.8605H2.87044L3.22399 14.2141ZM7.99994 9.43812L8.35349 9.08457L7.99994 8.73101L7.64639 9.08457L7.99994 9.43812ZM12.7759 14.2141L13.1294 13.8605L12.7759 14.2141ZM9.43812 7.99994L9.08457 7.64639L8.73101 7.99994L9.08457 8.35349L9.43812 7.99994ZM14.2141 3.22399L13.8605 2.87044V2.87044L14.2141 3.22399ZM14.2141 1.80978L14.5676 1.45623V1.45623L14.2141 1.80978ZM8.73101 7.29283L8.37746 7.64639L8.73101 7.99994L9.08457 7.64639L8.73101 7.29283ZM13.507 2.51689L13.8605 2.87044L14.2141 2.51689L13.8605 2.16333L13.507 2.51689ZM13.483 2.49292L13.8365 2.13937L13.483 1.78581L13.1294 2.13937L13.483 2.49292ZM8.70705 7.26887L8.35349 6.91531L7.99994 7.26887L8.35349 7.62242L8.70705 7.26887ZM8.02391 7.99994L8.37746 8.35349L8.73101 7.99994L8.37746 7.64639L8.02391 7.99994ZM7.99994 7.97597L8.35349 7.62242L7.99993 7.26886L7.64638 7.62242L7.99994 7.97597ZM7.99994 8.02391L7.64639 8.37746L7.99994 8.73102L8.3535 8.37746L7.99994 8.02391ZM7.97597 7.99994L7.62241 7.64639L7.26887 7.99994L7.62242 8.35349L7.97597 7.99994ZM7.29283 7.26887L7.64639 7.62242L7.99994 7.26887L7.64639 6.91531L7.29283 7.26887ZM2.51689 2.49292L2.87044 2.13937L2.51689 1.78581L2.16333 2.13937L2.51689 2.49292ZM2.49292 2.51689L2.13937 2.16333L1.78581 2.51689L2.13937 2.87044L2.49292 2.51689ZM7.26887 7.29283L6.91531 7.64639L7.26887 7.99994L7.62242 7.64639L7.26887 7.29283ZM7.26887 8.70705L7.62242 8.35349L7.26887 7.99994L6.91531 8.35349L7.26887 8.70705ZM2.49292 13.483L2.13937 13.1294L1.78581 13.483L2.13937 13.8365L2.49292 13.483ZM2.51689 13.507L2.16333 13.8605L2.51689 14.2141L2.87044 13.8605L2.51689 13.507ZM7.29283 8.73101L7.64639 9.08457L7.99994 8.73101L7.64639 8.37746L7.29283 8.73101ZM8.73101 8.70705L9.08457 8.35349L8.73102 7.99994L8.37746 8.35349L8.73101 8.70705ZM8.70705 8.73101L8.3535 8.37746L7.99993 8.73101L8.35349 9.08457L8.70705 8.73101ZM13.507 13.483L13.8605 13.8365L14.2141 13.483L13.8605 13.1294L13.507 13.483ZM13.483 13.507L13.1294 13.8605L13.483 14.2141L13.8365 13.8605L13.483 13.507ZM13.1294 2.13937C13.3247 1.9441 13.6413 1.9441 13.8365 2.13937L14.5437 1.43226C13.9579 0.846471 13.0081 0.846476 12.4223 1.43226L13.1294 2.13937ZM8.35349 6.91531L13.1294 2.13937L12.4223 1.43226L7.64639 6.20821L8.35349 6.91531ZM2.87044 2.13937L7.64639 6.91531L8.35349 6.20821L3.57755 1.43226L2.87044 2.13937ZM2.16333 2.13937C2.3586 1.94411 2.67518 1.9441 2.87044 2.13937L3.57755 1.43226C2.99176 0.846473 2.04201 0.846475 1.45623 1.43226L2.16333 2.13937ZM2.13937 2.16333L2.16333 2.13937L1.45623 1.43226L1.43226 1.45623L2.13937 2.16333ZM2.13937 2.87044C1.9441 2.67518 1.9441 2.3586 2.13937 2.16333L1.43226 1.45623C0.846471 2.04202 0.846475 2.99176 1.43226 3.57755L2.13937 2.87044ZM6.91531 7.64639L2.13937 2.87044L1.43226 3.57755L6.20821 8.35349L6.91531 7.64639ZM2.13937 13.1294L6.91531 8.35349L6.20821 7.64639L1.43226 12.4223L2.13937 13.1294ZM2.13937 13.8365C1.9441 13.6413 1.9441 13.3247 2.13937 13.1294L1.43226 12.4223C0.846474 13.0081 0.846474 13.9579 1.43226 14.5437L2.13937 13.8365ZM2.16333 13.8605L2.13937 13.8365L1.43226 14.5437L1.45623 14.5676L2.16333 13.8605ZM2.87044 13.8605C2.67518 14.0558 2.3586 14.0558 2.16333 13.8605L1.45623 14.5676C2.04201 15.1534 2.99176 15.1534 3.57755 14.5676L2.87044 13.8605ZM7.64639 9.08457L2.87044 13.8605L3.57755 14.5676L8.35349 9.79167L7.64639 9.08457ZM13.1294 13.8605L8.35349 9.08457L7.64639 9.79167L12.4223 14.5676L13.1294 13.8605ZM13.8365 13.8605C13.6413 14.0558 13.3247 14.0558 13.1294 13.8605L12.4223 14.5676C13.0081 15.1534 13.9579 15.1534 14.5437 14.5676L13.8365 13.8605ZM13.8605 13.8365L13.8365 13.8605L14.5437 14.5676L14.5676 14.5437L13.8605 13.8365ZM13.8605 13.1294C14.0558 13.3247 14.0558 13.6413 13.8605 13.8365L14.5676 14.5437C15.1534 13.9579 15.1534 13.0081 14.5676 12.4223L13.8605 13.1294ZM9.08457 8.35349L13.8605 13.1294L14.5676 12.4223L9.79167 7.64639L9.08457 8.35349ZM13.8605 2.87044L9.08457 7.64639L9.79167 8.35349L14.5676 3.57755L13.8605 2.87044ZM13.8605 2.16333C14.0558 2.3586 14.0558 2.67518 13.8605 2.87044L14.5676 3.57755C15.1534 2.99176 15.1534 2.04201 14.5676 1.45623L13.8605 2.16333ZM13.8365 2.13937L13.8605 2.16333L14.5676 1.45623L14.5437 1.43226L13.8365 2.13937ZM9.08457 7.64639L13.8605 2.87044L13.1534 2.16333L8.37746 6.93928L9.08457 7.64639ZM13.8605 2.16333L13.8365 2.13937L13.1294 2.84647L13.1534 2.87044L13.8605 2.16333ZM13.1294 2.13937L8.35349 6.91531L9.0606 7.62242L13.8365 2.84647L13.1294 2.13937ZM8.35349 7.62242L8.37746 7.64639L9.08457 6.93928L9.0606 6.91531L8.35349 7.62242ZM8.37746 7.64639L8.35349 7.62242L7.64639 8.32953L7.67035 8.35349L8.37746 7.64639ZM8.3535 8.37746L8.37746 8.35349L7.67035 7.64639L7.64638 7.67036L8.3535 8.37746ZM7.62242 8.35349L7.64639 8.37746L8.35349 7.67035L8.32952 7.64639L7.62242 8.35349ZM7.64638 7.62242L7.62241 7.64639L8.32953 8.35349L8.3535 8.32952L7.64638 7.62242ZM7.64639 6.91531L2.87044 2.13937L2.16333 2.84647L6.93928 7.62242L7.64639 6.91531ZM2.16333 2.13937L2.13937 2.16333L2.84647 2.87044L2.87044 2.84647L2.16333 2.13937ZM2.13937 2.87044L6.91531 7.64639L7.62242 6.93928L2.84647 2.16333L2.13937 2.87044ZM7.62242 7.64639L7.64639 7.62242L6.93928 6.91531L6.91531 6.93928L7.62242 7.64639ZM6.91531 8.35349L2.13937 13.1294L2.84647 13.8365L7.62242 9.0606L6.91531 8.35349ZM2.13937 13.8365L2.16333 13.8605L2.87044 13.1534L2.84647 13.1294L2.13937 13.8365ZM2.87044 13.8605L7.64639 9.08457L6.93928 8.37746L2.16333 13.1534L2.87044 13.8605ZM7.64639 8.37746L7.62242 8.35349L6.91531 9.0606L6.93928 9.08457L7.64639 8.37746ZM8.37746 8.35349L8.3535 8.37746L9.0606 9.08457L9.08456 9.0606L8.37746 8.35349ZM13.8605 13.1294L9.08457 8.35349L8.37746 9.0606L13.1534 13.8365L13.8605 13.1294ZM13.8365 13.8605L13.8605 13.8365L13.1534 13.1294L13.1294 13.1534L13.8365 13.8605ZM8.35349 9.08457L13.1294 13.8605L13.8365 13.1534L9.0606 8.37746L8.35349 9.08457Z" fill="#6D8790"/>
                </svg>
            </span>
            <!-- <app-more-dropdown [isShow]="isShow"></app-more-dropdown> -->
            
        </li>
    </div>
    </ul>

    <div class="more-dropdown" *ngIf="isShow">
        <ul
            class=""
        >
            <div
                class="sub-title"
            >Ongoing Interactions</div>
            <li
                class="more-dropdown__status"
            >
                <div
                    class="item-css"
                >
                    <div class="item-line">
                        <span>
                            <svg
                                width="13px"
                                height="13px"
                                viewBox="0 0 15 15"
                            >
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="UI-Kit_C1"
                                        transform="translate(-2727.000000, -792.000000)"
                                        fill="#459950"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            d="M2741.14246,801.750172 L2738.20159,800.445215 C2737.60349,800.180632 2736.90226,800.350556 2736.49163,800.859576 L2736.49163,800.859576 L2735.60383,801.970477 C2734.16513,801.055218 2732.94487,799.835298 2732.02923,798.396844 L2733.1392,797.509999 C2733.65007,797.099794 2733.82092,796.397155 2733.55544,795.79818 L2732.24954,792.857339 C2731.96303,792.212259 2731.25186,791.869173 2730.56864,792.046428 L2728.08244,792.692344 C2727.37252,792.877797 2726.91343,793.564817 2727.01372,794.291667 C2727.95937,800.87156 2733.12902,806.040774 2739.70906,806.985938 C2739.77489,806.995251 2739.84131,807 2739.9078,807 C2740.56608,806.999602 2741.14008,806.555083 2741.30746,805.91816 L2741.95244,803.431054 C2742.13232,802.747835 2741.78892,802.035207 2741.14246,801.750172 Z"
                                            id="call_green-1"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="main-text">Siva, +1200400009</span>
                        <button class="ongoing-btn"><span>3 new</span></button>
                    </div>
                    <span class="item-right">00:02</span>
                </div>
            
            
            </li>
            <li
                class="more-dropdown__status"
            >
                <div
                    class="item-css"
                >
                    <div class="item-line">
                        <span>
                            <svg
                                width="12px"
                                height="10.29px"
                                viewBox="0 0 14 12"
                            >
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="UI-Kit_C1"
                                        transform="translate(-2763.000000, -793.000000)"
                                        fill="#459950"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                                            id="email_green-1"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="main-text">Siva, +1200400009</span>
                    </div>
                    <span class="item-right">00:08</span>
                </div>
            
                <div
                    class="linked_mark"
                >
                    <img src="assets/img/more-tab-linked-icon.svg" />
                </div>
            </li>
            <li
                class="more-dropdown__status"
            >
                <div
                    class="item-css"
                >
                    <div class="item-line">
                        <span>
                            <svg
                                width="13px"
                                height="13px"
                                viewBox="0 0 15 15"
                            >
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="UI-Kit_C1"
                                        transform="translate(-2690.000000, -791.000000)"
                                        fill="#459950"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            d="M2704.93747,804.496228 L2703.92865,801.560332 C2704.41493,800.566275 2704.67191,799.460743 2704.67364,798.348392 C2704.67662,796.414253 2703.92831,794.585484 2702.56651,793.198989 C2701.20444,791.812188 2699.38941,791.031585 2697.45571,791.000951 C2695.4506,790.969232 2693.56588,791.731923 2692.14896,793.148814 C2690.73203,794.56574 2689.9692,796.450417 2690.00095,798.455627 C2690.03159,800.389291 2690.81219,802.204355 2692.19893,803.566424 C2693.58271,804.925576 2695.40683,805.67368 2697.33684,805.673612 C2697.34064,805.673612 2697.34464,805.673612 2697.34837,805.673612 C2698.46076,805.671882 2699.56629,805.414904 2700.56035,804.92863 L2703.49632,805.937477 C2703.61865,805.97951 2703.7441,806 2703.8681,806 C2704.16283,806 2704.44943,805.88425 2704.66685,805.666793 C2704.97574,805.357877 2705.07941,804.909394 2704.93747,804.496228 Z M2694.6875,795.687493 L2700.3125,795.687493 C2700.83027,795.687493 2701.25,796.107225 2701.25,796.624991 C2701.25,797.142757 2700.83027,797.56249 2700.3125,797.56249 L2694.6875,797.56249 C2694.16973,797.56249 2693.75,797.142757 2693.75,796.624991 C2693.75,796.107225 2694.16973,795.687493 2694.6875,795.687493 Z M2694.6875,799.437487 L2700.3125,799.437487 C2700.83027,799.437487 2701.25,799.857219 2701.25,800.374985 C2701.25,800.892752 2700.83027,801.312484 2700.3125,801.312484 L2694.6875,801.312484 C2694.16973,801.312484 2693.75,800.892752 2693.75,800.374985 C2693.75,799.857219 2694.16973,799.437487 2694.6875,799.437487 Z"
                                            id="chat_green-1"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="main-text">Siva, +1200400009</span>
                    </div>
                    <span class="item-right">00:03</span>
                </div>
                <div
                    class="linked_mark"
                >
                    <img src="assets/img/more-tab-linked-icon.svg" />
                </div>
            </li>
            <div
                class="sub-title"
            >Defered Emails</div>
            <li
                class="more-dropdown__status"
            >

                <div class="item-css">
                    <div class="item-line">
                        <span>
                            <svg
                                width="12px"
                                height="10.29px"
                                viewBox="0 0 14 12"
                            >
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="UI-Kit_C1"
                                        transform="translate(-2763.000000, -793.000000)"
                                        fill="#459950"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            d="M2777,797.028571 L2777,804.142857 C2777,804.657143 2776.65,805 2776.125,805 L2776.125,805 L2763.875,805 C2763.35,805 2763,804.657143 2763,804.142857 L2763,804.142857 L2763,797.028571 L2769.5625,800.628571 C2769.8075,800.748571 2770.1925,800.748571 2770.4375,800.628571 L2770.4375,800.628571 L2777,797.028571 Z M2776.125,793 C2776.65,793 2777,793.342857 2777,793.857143 L2777,793.857143 L2777,795.142857 L2770,798.914286 L2763,795.057143 L2763,793.857143 C2763,793.342857 2763.35,793 2763.875,793 L2763.875,793 Z"
                                            id="email_green-1"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="main-text">Siva, +1200400009</span>
                    </div>
                    <span class="item-right">00:00</span>
                </div>
            </li>
        </ul>
    </div>

</div>

`;

chart_html = `
<div class="chart-sideline">
    <canvas
        baseChart
        #myChart
        style="max-height: 400px;"
        [datasets]="lineChartFilterData"
        [labels]="lineChartDisplayLabels"
        [options]="lineChartOptions"
        [colors]="lineChartFilterColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        [plugins]="lineChartPlugins"
    >
    </canvas>
</div>`;

chart_css = `
.chart-sideline:after {
    position: absolute !important;
    content: '';
    left: 0;
    width: 22px;
    background: #fff;
    /* border: 49px solid red; */
    top: 0;
    bottom: 21px;
}
.chart-sideline {
    position: relative;
    // border: 1px solid red;
}`;

chart_script = `
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('myChart') myChart: ElementRef;
  lineChartData: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7], label: 'Emails', lineTension: 0 },
  ];

  lineChartData1: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 4, 2, 1], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 4.5, 2, 6], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 4, 8, 2], label: 'Emails', lineTension: 0 },
  ];

  lineChartData2: ChartDataSets[] = [
      { data: [2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4, 6, 5.5, 4, 2, 1, 4, 6, 5.5, 2.5, 4, 2.5, 7, 4], label: 'Chats', lineTension: 0 },
      { data: [3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 3.5, 3, 1, 2, 5, 4.5, 2, 4.5, 2, 6, 2, 5, 4.5, 2, 3.5, 3, 1, 2], label: 'Calls', lineTension: 0 },
      { data: [5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5, 3, 6, 2.5, 2, 7, 4, 8, 2, 6.5, 3, 6, 2.5, 2, 7, 5.5, 6.5], label: 'Emails', lineTension: 0 },
  ];

  lineChartFilterData: ChartDataSets[];

  lineChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  lineChartLabels1: Label[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  lineChartLabels2: Label[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  lineChartDisplayLabels: Label[];

  lineChartOptions = {
      responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  display: true,
              }
          }],

      }

  };

  lineChartColors: Color[] = [
      {
          borderColor: '#acaef9',
          pointBorderColor: '#acaef9',
          pointBackgroundColor: "#FFFFFF",
      },
      {
          borderColor: '#5acdfc',
          pointBorderColor: '#5acdfc',
          pointBackgroundColor: "#FFFFFF",
      },
      {
          borderColor: '#f2a6ce',
          pointBorderColor: '#f2a6ce',
          pointBackgroundColor: "#FFFFFF",
      }
  ];

  lineChartFilterColors: Color[];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit(): void {
    this.lineChartFilterData = this.lineChartData;
    this.lineChartFilterColors = this.lineChartColors;
    this.lineChartDisplayLabels = this.lineChartLabels;
  }

  ngAfterViewInit(): void {
    const chatsgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    chatsgradient.addColorStop(0, '#acaef9');
    chatsgradient.addColorStop(1, 'rgba(255,255,255,0)');

    const callsgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    callsgradient.addColorStop(0, '#5acdfc');
    callsgradient.addColorStop(1, 'rgba(255,255,255,0)');

    const emailssgradient = this.myChart.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 260);
    emailssgradient.addColorStop(0, '#f2a6ce');
    emailssgradient.addColorStop(1, 'rgba(255,255,255,0)');

    this.lineChartColors = [
        {
            backgroundColor: chatsgradient,
            borderColor: '#acaef9',
            pointBorderColor: '#acaef9',
            pointBackgroundColor: "#FFFFFF",
        },
        {
            backgroundColor: callsgradient,
            borderColor: '#5acdfc',
            pointBorderColor: '#5acdfc',
            pointBackgroundColor: "#FFFFFF",
        },
        {
            backgroundColor: emailssgradient,
            borderColor: '#f2a6ce',
            pointBorderColor: '#f2a6ce',
            pointBackgroundColor: "#FFFFFF",
        }
    ];
    this.lineChartFilterColors = this.lineChartColors;

  }

}
`;

chips_html = `
<div class="container">
    <div class="history-history">
        <div class="history__image">
            <img  src="assets/img/history-email-icon.svg" />
        </div>
        <div class="history__body">
            <div class="header">
                Email
            </div>
            <div class="content">
                <div class="item">
                    <div class="item__title">
                        Ticket No.
                    </div>
                    <div class="item__content--normal">
                        3853
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Activity
                    </div>
                    <div class="item__content--normal">
                        Email
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Agent
                    </div>
                    <div class="item__content--normal">
                        Siva
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Notes
                    </div>
                    <div class="item__content--normal">
                        3 Session Notes
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Intent
                    </div>
                    <div class="item__content--normal">
                       Payment
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Duration
                    </div>
                    <div class="item__content--normal">
                        30mins
                    </div>
                </div>
                <div class="item">
                    <div class="item__title">
                        Status
                    </div>
                    <div class="item__content--normal">
                        Completed
                    </div>
                </div>
            </div>
            <div class="expand">
                <div class="expand__line">
                    
                </div>
                <div *ngIf="expanded == false" class="expand__button" (click)="expand()">
                    <div>
                        Expand
                        <img src="assets/img/history-expand-icon.svg" />
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
    <div  class="history-expanded" [ngClass]="{'showMore' : expanded}" >
        <div class="header">
            <div class="header__note">
                Note (3)
            </div>
        </div>
        <div class="body">
            <div class="item" *ngFor="let note of notes">
                <div class="item-image">
                    <img  src="assets/img/history-item-icon.svg" />
                </div>
                <div class="item-content">
                    <div class="content__title">
                        {{ note.user }}
                    </div>
                    <div class="content__time">
                        {{ note.date }}
                    </div>
                    <div class="content__data">
                        {{ note.info }}
                    </div>
                </div>
            </div>
        </div>
        <div class="collapse1" >
                <div class="collapse__line">           
                </div>
                <div class="collapse__button" (click)="collapse()">
                    <div>
                        Collapse
                        <img  src="assets/img/history-collapse-icon.svg" />
                    </div>
                </div>
        </div>
    </div>
</div>`;

chips_css = `
.container {
    background-color: white;
    .history-history {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 15px;
        background-color: white;
    
        .history__image {
            margin-right: 13px;
            margin-top: -6px;
        }
        .history__body {
            width: 92%;
            .header {
                height: 16px;
                width: 32px;
                color: #1c323f;
                font-family: 'DM Sans';
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 16px;
            }
            .content {
                .item {
                    display: flex;
                    margin-top: 3px;
                    .item__title {
                        height: 16px;
                        width: 85px;
                        opacity: 0.6;
                        color: #1c323f;
                        font-family: 'DM Sans';
                        font-size: 12px;
                        letter-spacing: 0;
                        line-height: 16px;
                    }
                    .item__content--normal {
                        // height: 16px;
                        width: 100%;
                        color: #1c323f;
                        font-family: 'DM Sans';
                        font-size: 12px;
                        font-weight: 500;
                        letter-spacing: 0;
                        line-height: 16px;
                        &.underline {
                            cursor: pointer;
                            text-decoration: underline;
                            color: #517785;
                        }
                    }
                }
            }
            .expand {
                .expand__line {
                    position: relative;
                    left: 0;
                    box-sizing: border-box;
                    height: 1px;
                    width: 100%;
                    background: #bdccd2;
                    opacity: 0.4;
                    margin-top: 19px;
                }
                .expand__button {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: -10px;
                    z-index: 0;
    
                    div {
                        z-index: 0;
                        background-color: white;
                        height: 17px;
                        width: 80px;
                        color: #0099d3;
                        font-family: 'DM Sans';
                        font-size: 13px;
                        font-weight: 500;
                        letter-spacing: 0;
                        line-height: 17px;
                        text-align: center;
                        cursor: pointer;
                        img {
                            margin-top: -11px;
                        }
                    }
                }
            }
        }
    }
    .history-expanded {
        margin-left: calc(8%);
        padding-left: 10px;
        margin-top: -12px;
        -webkit-transition: max-height 1s;
        -moz-transition: max-height 1s;
        -ms-transition: max-height 1s;
        -o-transition: max-height 1s;
        transition: max-height 1s;
        overflow: hidden;
        max-height: 0;
        background-color: white;
        .header {
            display: flex;
            justify-content: space-between;
            .header__note {
                height: 16px;
                width: 52px;
                opacity: 0.6;
                color: #1c323f;
                font-family: 'DM Sans';
                font-size: 12px;
                letter-spacing: 0;
                line-height: 16px;
            }
            .header__addbutton {
                margin-right: 36px;
                margin-top: 0px;
    
                .button {
                    box-sizing: border-box;
                    padding-left: 11px;
                    padding-top: 7px;
                    height: 34px;
                    width: 34px;
                    border: 1px solid rgba(109, 135, 144, 0.2);
                    border-radius: 5px;
                    background-color: #ffffff;
                    box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                    cursor: pointer;
                    &:hover {
                        background-color: rgb(233, 246, 251);
                    }
                }
            }
        }
        .body {
            margin-top: 12px;
            .item {
                display: flex;
                .item-image {
                    margin-right: 15px;
                }
                .item-content {
                    .content__title {
                        height: 16px;
                        width: 114px;
                        color: #1c323f;
                        font-family: 'DM Sans';
                        font-size: 12px;
                        font-weight: bold;
                        letter-spacing: 0;
                        line-height: 16px;
                    }
                    .content__time {
                        margin-top: -2px;
                        height: 16px;
                        width: 121px;
                        opacity: 0.6;
                        color: #1c323f;
                        font-family: 'DM Sans';
                        font-size: 11px;
                        letter-spacing: 0.2px;
                        line-height: 16px;
                    }
                    .content__data {
                        margin-top: 2px;
    
                        margin-right: 36px;
                        color: #1c323f;
                        font-family: 'DM Sans';
                        font-size: 12px;
                        letter-spacing: 0;
                        line-height: 15px;
                        margin-bottom: 24.6px;
                    }
                }
            }
        }
        .footer {
            display: flex;
            justify-content: space-around;
            .edit-button {
                display: flex;
                box-sizing: border-box;
                height: 32px;
                width: 216px;
                padding-left: 56px;
                padding-top: 10px;
                border: 1px solid rgba(109, 135, 144, 0.2);
                border-radius: 3px;
                background-color: #ffffff;
                box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                p {
                    height: 16px;
                    width: 88px;
                    margin-top: -2px;
                    margin-left: 5px;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 16px;
                }
            }
            .edit-button:hover {
                background-color: rgb(233, 246, 251);
                cursor: pointer;
            }
            .transcript-button {
                display: flex;
                box-sizing: border-box;
                height: 32px;
                width: 216px;
                border: 1px solid rgba(109, 135, 144, 0.2);
                border-radius: 3px;
                background-color: #ffffff;
                box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                padding-left: 56px;
                padding-top: 10px;
                p {
                    height: 16px;
                    width: 188px;
                    margin-top: -2px;
                    margin-left: 5px;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 16px;
                }
            }
            .transcript-button:hover {
                background-color: rgb(233, 246, 251);
                cursor: pointer;
            }
        }
        .collapse1 {
            margin-top: 20px;
            margin-right: 10px;
            .collapse__line {
                position: relative;
                left: 0;
                box-sizing: border-box;
                height: 1px;
                width: 100%;
                background: #bdccd2;
                opacity: 0.4;
                margin-top: 19px;
            }
            .collapse__button {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: -10px;
                margin-bottom: 15px;
    
                div {
                    z-index: 0;
                    background-color: white;
                    height: 17px;
                    width: 80px;
                    color: #0099d3;
                    font-family: 'DM Sans';
                    font-size: 13px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 17px;
                    text-align: center;
                    cursor: pointer;
                    img {
                        margin-top: -11px;
                    }
                }
            }
        }
    }
    
    .showMore {
        max-height: 460px;
    }
    
}`;

chips_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  expanded: boolean = false;
  notes = [
    {
      user: 'Ben',
      date: '03/08/2020',
      info: 'Payment'
    },
    {
      user: 'Tom',
      date: '03/08/2020',
      info: 'Payment'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  collapse() {
    this.expanded = false;
  }
  expand() {
    this.expanded = true;
  }
}
`;

canned_response_html = `
<div class="chat-template">
    <div class="navcontent">
        <ul>
            <li
                (click)="changeTab(1)"
                [className]="tabindex == 1 ? 'tabactive' : 'tabinactive'"
            >Text</li>
            <li
                (click)="changeTab(2)"
                [className]="tabindex == 2 ? 'tabactive' : 'tabinactive'"
            >Actions</li>
            <li
                (click)="changeTab(3)"
                [className]="tabindex == 3 ? 'tabactive' : 'tabinactive'"
            >Cards</li>
        </ul>
        <div class="tab-divider"></div>
        <div class="navcontent__action">
            <div
                class="text-action"
                *ngIf="tabindex==1"
            >
                <div class="search-bar">
                    <div class="search-bar__left">

                        <input
                            type="text"
                            [(ngModel)]="textSearchText"
                            id="_search"
                            placeholder="Search"
                        />
                        <img src="assets/img/search gray.svg">
                    </div>
                </div>
                <div
                    class="plusButton"
                >
                    <img src="assets/img/button-plus-icon.svg" />

                </div>
            </div>
            <div
                class="other-action"
                *ngIf="tabindex == 2"
            >
                <div class="search-bar1">
                    <div class="search-bar__left">

                        <input
                            type="text"
                            [(ngModel)]="actionSearchText"
                            id="_search"
                            placeholder="Search"
                        />
                        <img src="assets/img/search gray.svg">
                    </div>
                </div>
            </div>
            <div
                class="other-action"
                *ngIf="tabindex == 3"
            >
                <div class="search-bar1">
                    <div class="search-bar__left">

                        <input
                            type="text"
                            [(ngModel)]="cardSearchText"
                            id="_search"
                            placeholder="Search"
                        />
                        <img src="assets/img/search gray.svg">
                    </div>
                </div>
            </div>

        </div>
        <div
            class="navcontent__list"
            *ngIf="tabindex == 1"
        >
            <div
                class="item"
                [ngClass]="{'clicked': index == currentTextIndex}"
                *ngFor="let text of texts; let index=index;"
                (click)="selectTextItem(index)"
            >
                <p
                    class="item__header"
                    *ngIf="text.title.toLowerCase().includes(textSearchText.toLowerCase())"
                >{{ text.title }}</p>
                <p
                    class="item__content"
                    *ngIf="text.content.toLowerCase().includes(textSearchText.toLowerCase())"
                >{{ text.content.substring(0, 35) }}...</p>
                <div class="separate-line"></div>
            </div>
        </div>
        <div
            class="navcontent__list"
            *ngIf="tabindex == 2"
        >
            <div
                class="item"
                *ngFor="let action of actions;let index=index;"
                [ngClass]="{'clicked': index == currentActionIndex}"
                (click)="selectActionItem(index)"
            >
                <p
                    class="item__header"
                    *ngIf="action.title.toLowerCase().includes(actionSearchText.toLowerCase())"
                >{{ action.title }}</p>
                <p
                    class="item__content"
                    *ngIf="action.title.toLowerCase().includes(actionSearchText.toLowerCase())"
                >{{action.buttons.length}} Action Buttons</p>
                <div class="separate-line"></div>
            </div>

        </div>
        <div
            class="navcontent__list"
            *ngIf="tabindex == 3"
        >
            <div
                class="item"
                *ngFor="let card of cards;let index=index;"
                [ngClass]="{'clicked': index == currentCardIndex}"
                (click)="selectCardItem(index)"
            >
                <p
                    class="item__header"
                    *ngIf="card.name.toLowerCase().includes(cardSearchText.toLowerCase())"
                >{{ card.name }}</p>
                <p
                    class="item__content"
                    *ngIf="card.name.toLowerCase().includes(cardSearchText.toLowerCase())"
                >$ {{ card.price }}</p>
                <div class="separate-line"></div>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="maincontent">
        <div
            class="x"
        >
            <img src="assets/img/close-icon.svg" />

        </div>
        <div class="maincontent__header">

            <p *ngIf="tabindex==1"> {{ texts[currentTextIndex].title }} </p>
            <p *ngIf="tabindex==2"> {{ actions[currentActionIndex].title }} </p>
            <p *ngIf="tabindex==3"> {{ cards[currentCardIndex].name }} </p>
        </div>
        <div
            class="textcontent__content"
            *ngIf="tabindex==1"
        >
            <p>
                {{ texts[currentTextIndex].content }}
            </p>
        </div>

        <div
            class="maincontent__content"
            *ngIf="tabindex == 2"
        >
            <div
                class="action_button"
                *ngFor="let message of actions[currentActionIndex].buttons"
            >
                <p>{{ message.name }}</p>
            </div>
        </div>
        <div
            class="maincontent__content"
            *ngIf="tabindex==3"
        >
            <div
                class="carousel"
                *ngFor="let card of cards[currentCardIndex].products; let index = index"
                (click)="selectCard(index)"
            >
                <div class="carousel__image">
                    <img src="assets/img/card.svg">
                    <div class="carousel__image__selector">
                        <img
                            *ngIf="hover==1 && !(selectedCardIndexes.includes(index))"
                            (mouseenter)="CarouselHover()"
                            (mouseleave)="CarouselLeave()"
                            src="assets/img/carousel-selection-icon.svg"
                        />
                        <img
                            *ngIf="hover==2 || selectedCardIndexes.includes(index)"
                            (mouseenter)="CarouselHover()"
                            (mouseleave)="CarouselLeave()"
                            src="assets/img/carousel-selection-hover-icon.svg"
                        />
                    </div>

                </div>
                <div class="carousel__description">
                    {{ product.description}}
                </div>
                <div class="carousel__price">
                    $ {{ product.price }}
                </div>
                <div class="carousel__viewdetails">
                    <a>View Details</a>
                </div>
                <div class="carousel__shop">
                    <a>Shop Now</a>
                </div>
            </div>
        </div>
        <div class="maincontent__footer">
            <div class="btns">
                <div
                    class="insertbutton"
                >
                    <span> Insert Selected</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

canned_response_css = `
.chat-template {
    width: 493px;
    height: 399px;
    z-index: 200;
    border-radius: 10px;
    border: 1px solid rgba(109, 135, 144, 0.15);
    -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
    -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
    box-shadow: 0 2px 2px 0 rgba(109, 135, 144, 0.06),
        0 15px 25px 0 rgba(109, 135, 144, 0.45);
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    @media only screen and (max-width: 550px) {
        left: 5px;
    }
    .x {
        position: relative;
        float: right;
        cursor: pointer;
        color: black;

        top: -4px;
        right: 12px;
        &:hover {
            cursor: pointer;
            svg {
                path {
                    opacity: 0.4;
                }
            }
        }
    }
    ul {
        display: flex;
        margin-top: 11.5px;
        margin-left: -35px;
        box-sizing: border-box;
        li.tabactive {
            list-style-type: none;
            height: 18px;
            width: 49px;
            color: #219fcf;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 18px;
            padding-bottom: 15px;
            border-bottom: 2px solid #219fcf;
            margin-right: 19px;
            text-align: center;
        }
        li.tabinactive {
            color: black;

            list-style-type: none;
            height: 18px;
            width: 49px;
            font-family: 'DM Sans';
            font-size: 14px;
            padding-bottom: 15px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 18px;
            margin-right: 19px;
            text-align: center;
        }
        li:hover {
            color: #219fcf;
            cursor: pointer;
        }
    }
    .tab-divider {
        position: absolute;
        margin-top: -16px;
        left: 0;
        box-sizing: border-box;
        height: 1px;
        width: calc(50% - 6px);
        border: none;
        background-color: #6d8790;
        opacity: 0.1;
    }
    .navcontent {
        overflow: visible;
        .navcontent__action {
            .text-action {
                display: flex;
                margin-left: 10.5px;
                .search-bar {
                    width: 180px;
                    background: white;
                    height: 32px;
                    display: flex;
                    border: 1px solid rgba(109, 135, 144, 0.2);
                    border-radius: 5px;

                    .search-bar__left {
                        display: inline-flex;
                        height: 29px;
                        background-color: white;

                        & > img {
                            height: 23px;
                            width: 18px;
                            display: inline-block;
                            padding-top: 8px;
                        }

                        & > input {
                            box-sizing: border-box;
                            color: black;
                            font-family: 'DM Sans';
                            font-size: 14px;
                            letter-spacing: 0;
                            line-height: 18px;
                            background: transparent;
                            border: none;
                            width: 154px;
                            padding-top: 3px;

                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }

                .plusButton {
                    margin-left: 10px;
                    padding: 7px;
                    padding-right: 9px;
                    padding-left: 9px;
                    box-sizing: border-box;
                    cursor: pointer;
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(109, 135, 144, 0.2);
                    border-radius: 5px;
                    background-color: #ffffff;
                    box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                    &:hover {
                        background-color: #e6f3f7;
                    }
                }
            }
            .other-action {
                margin-left: 10.5px;
                .search-bar1 {
                    width: 221px;
                    background: white;
                    height: 32px;
                    display: flex;
                    border: 1px solid rgba(109, 135, 144, 0.2);
                    border-radius: 5px;
                    .search-bar__left {
                        display: inline-flex;
                        height: 29px;
                        background-color: white;

                        & > img {
                            height: 15px;
                            width: 15px;
                            display: inline-block;
                            margin-top: 8px;
                        }

                        & > input {
                            color: black;
                            font-family: 'DM Sans';
                            font-size: 14px;
                            letter-spacing: 0;
                            line-height: 18px;
                            background: transparent;
                            border: none;
                            width: 192px;
                            padding-top: 3px;

                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
        .navcontent__list {
            // overflow: visible;
            overflow: auto;
            overflow-x: hidden;
            margin-top: 10px;
            height: 280px;
            width: 240px;
            margin-top: 22px;
            .item {
                position: relative;
                overflow: visible;
                .item__header {
                    padding-top: 9px;
                    padding-left: 10.5px;
                    width: 100%;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 18px;
                }
                .item__content {
                    padding-left: 10.5px;
                    margin-top: -12px;
                    padding-bottom: 9px;
                    padding-right: 10px;
                    width: 229px;
                    opacity: 0.5;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 12px;
                    letter-spacing: 0;
                    line-height: 16px;
                }
                .separate-line {
                    position: relative;
                    left: 0;
                    box-sizing: border-box;
                    height: 1px;
                    width: 100%;
                    border: none;
                    background-color: #6d8790;
                    opacity: 0.1;
                }
                &.clicked {
                    background-color: #e6f3f7;
                    &:before {
                        content: '\A';
                        width: 0;
                        height: 0;
                        border-top: 8.5px solid transparent;
                        border-bottom: 8.5px solid transparent;

                        border-left: 8.5px solid #e6f3f7;
                        position: absolute;
                        right: -9px;
                        margin-top: 23px;
                    }
                }
            }
            .item:hover {
                cursor: pointer;
                background-color: rgb(233, 246, 251);
            }
        }
    }
    .divider {
        box-sizing: border-box;
        height: 398px;
        width: 1px;
        border: none;
        background-color: #6d8790;
        opacity: 0.15;
    }

    .maincontent {
        .maincontent__header {
            height: 18px;
            width: 180px;
            color: #1c323f;
            font-family: 'DM Sans';
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 18px;
            margin-bottom: 19px;
            margin-left: 19.5px;
        }
        .textcontent__content {
            overflow-y: auto;
            overflow-x: hidden;
            height: 288px;
            width: 217px;
            color: #1c323f;
            font-family: 'DM Sans';
            font-size: 14px;
            letter-spacing: 0;
            line-height: 18px;
            margin-bottom: 12px;

            white-space: pre-line;
            margin-left: 19.5px;
            p {
                white-space: pre-line;
            }
        }

        .maincontent__content {
            overflow-y: auto;
            height: 288px;
            width: 221px;
            color: #1c323f;
            font-family: 'DM Sans';
            font-size: 14px;
            letter-spacing: 0;
            line-height: 18px;
            margin-bottom: 12px;
            margin-left: 19.5px;
            .action_button {
                height: 40px;
                margin-top: 8px;
                box-sizing: border-box;
                border-radius: 6px;
                background-color: #219fcf;
                box-shadow: inset 0 -3px 0 0 rgba(78, 168, 202, 0.25);
                padding-left: 15px;
                padding-right: 15px;
                cursor: pointer;
                p {
                    padding-top: 12px;
                    text-align: center;

                    height: 18px;
                    color: #ffffff;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                }
                &:hover {
                    background-color: rgb(32, 137, 179);
                }
                &.selected {
                    background-color: rgb(32, 137, 179);
                }
            }
            .makePaymentButton {
                height: 40px;
                width: 142px;

                box-sizing: border-box;
                border-radius: 6px;
                background-color: #219fcf;
                box-shadow: inset 0 -3px 0 0 rgba(78, 168, 202, 0.25);
                p {
                    padding-top: 12px;
                    text-align: center;
                    width: 142px;
                    height: 18px;
                    color: #ffffff;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                }
            }

            .viewHistoryButton {
                height: 40px;
                width: 203px;
                border-radius: 6px;
                background-color: #219fcf;
                box-shadow: inset 0 -3px 0 0 rgba(78, 168, 202, 0.25);
                p {
                    padding-top: 12px;
                    text-align: center;
                    width: 203px;
                    height: 18px;
                    color: #ffffff;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                }
            }
            .searchGoogleButton {
                height: 40px;
                width: 128px;
                border-radius: 6px;
                background-color: #219fcf;
                box-shadow: inset 0 -3px 0 0 rgba(78, 168, 202, 0.25);

                p {
                    padding-top: 12px;
                    text-align: center;
                    width: 128px;
                    height: 18px;
                    color: #ffffff;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0;
                    line-height: 18px;
                }
            }
            .makePaymentButton:hover {
                cursor: pointer;
                background-color: #03729e;
            }
            .viewHistoryButton:hover {
                cursor: pointer;
                background-color: #03729e;
            }
            .searchGoogleButton:hover {
                cursor: pointer;
                background-color: #03729e;
            }
            .carousel {
                box-sizing: border-box;
                height: 264px;
                width: 212px;
                border: 1px solid rgba(109, 135, 144, 0.2);
                border-radius: 10px;
                background-color: #ffffff;
                box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                margin-bottom: 18px;
                .carousel__image {
                    height: 100px;
                    width: 210px;
                    border-radius: 10px 10px 0 0;
                    background: linear-gradient(
                        23.71deg,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, 0.5) 100%
                    );
                    .carousel__image__selector {
                        position: relative;
                        cursor: pointer;
                        float: right;
                        right: 11px;
                        top: -90px;
                        padding-left: 7px;
                        padding-top: 3px;
                        box-sizing: border-box;
                        height: 26px;
                        width: 26px;
                        box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1);
                    }
                }
                .carousel__description {
                    margin-left: 10px;
                    height: 36px;
                    width: 193px;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 18px;
                }
                .carousel__price {
                    margin-left: 10px;
                    height: 16px;
                    width: 193px;
                    opacity: 0.5;
                    color: #1c323f;
                    font-family: 'DM Sans';
                    font-size: 12px;
                    letter-spacing: 0;
                    line-height: 16px;
                }
                .carousel__viewdetails {
                    height: 18px;
                    width: 212px;
                    text-align: center;
                    color: #219fcf;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 18px;
                    text-align: center;
                    margin-top: 25px;
                    cursor: pointer;
                }
                .carousel__shop {
                    height: 18px;
                    width: 212px;
                    color: #219fcf;
                    font-family: 'DM Sans';
                    font-size: 14px;
                    text-align: center;
                    font-weight: 500;
                    letter-spacing: 0;
                    line-height: 18px;
                    text-align: center;
                    margin-top: 22px;
                    cursor: pointer;
                }
            }
        }
        .maincontent__footer {
            margin-top: 23px;
            .btns {
                .insertbutton {
                    height: 36px;
                    width: 250px;
                    background-color: #219fcf;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-bottom-right-radius: 10px;

                    span {
                        color: #ffffff;
                        font-family: 'DM Sans';
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 0;
                        line-height: 18px;
                    }
                    &:hover {
                        cursor: pointer;
                        background-color: #03729e;
                    }
                }
            }
        }
    }
}
::placeholder {
    opacity: 0.4;
    color: #1c323f; /* Firefox */
    padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    opacity: 0.4;
    padding-left: 11px;
    padding-top: 17px;
    color: #1c323f;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    opacity: 0.4;
    color: #1c323f;
    padding-left: 11px;
    padding-top: 17px;
    height: 20px;
    width: 48px;
    opacity: 0.4;
    color: #1c323f;
    font-family: 'DM Sans';
    font-size: 15px;
    letter-spacing: 0;
    line-height: 20px;
}
`;

canned_response_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canned-response',
  templateUrl: './canned-response.component.html',
  styleUrls: ['./canned-response.component.scss']
})
export class CannedResponseComponent implements OnInit {

  tabindex = 1;
  hover = 1;
  currentTextIndex = 0;
  currentActionIndex = 0;
  currentCardIndex = 0;
  textSearchText: string = "";
  actionSearchText: string = "";
  cardSearchText: string = "";
  newCannedHeader: string = "";
  newCannedContent: string = "";

  texts = [
      {
          'title': 'Thank You!',
          'content': 'Ut enim,\n\n Ad muip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
      {
          'title': 'Welcome Back',
          'content': 'Dolar Sit,\n\n Ad minim veniam, quis nostrud exercitation ullamco modo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
      {
          'title': 'End Chat Final Message',
          'content': 'Lobo Mono,\n\n x ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
      {
          'title': 'Basic Question1',
          'content': 'Lorem Ipsum,\n\n Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
      {
          'title': 'Basic Question2',
          'content': 'Exerciation Ullamco,\n\n  sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
      {
          'title': 'Service Template',
          'content': 'Gettng mino,\n\n Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.\n\nLorem ipsum,Dolor Sit',
      },
  ];

  actions = [
      {
          'title': 'Email Notification Bug',
          'buttons': [
              {
                  'name': 'Email Notification',
              },
              {
                  'name': 'Email',
              },
              {
                  'name': 'Email Notification Bug'
              }
          ],
      },
      {
          'title': 'Account Security',
          'buttons': [
              {
                  'name': 'Account',
              },
              {
                  'name': 'Account Security',
              },
              {
                  'name': 'Account Security Action'
              },
              {
                  'name': 'Account Security',
              },
              {
                  'name': 'Account Security Action'
              }
          ],
      },
      {
          'title': 'End Chat Final Message',
          'buttons': [
              {
                  'name': 'End Chat',
              },
              {
                  'name': 'End Chat Final Message',
              },
              {
                  'name': 'Chat Final Message'
              }
          ],
      },


  ];

  cards = [
      {
          'name': 'Excepteur Sint',
          'price': '75.08',
          'products': [
              {
                  'description': "Excepteur sint occaecat cupidatat non.",
                  'price': '75.08'
              },
              {
                  'description': "Excepteur sint occaecat cupidatat non.",
                  'price': '75.08'
              }
          ]
      },
      {
          'name': 'Lorem Ipsum',
          'price': '81.93',
          'products': [
              {
                  'description': "Lorem Ipsum occaecat cupidatat non.",
                  'price': '75.08'
              },
              {
                  'description': "Lorem Ipsum occaecat cupidatat non1.",
                  'price': '75.08'
              }
          ]
      },

  ];

  selectedActions = [];
  selectedActionNames = [];
  selectedCardIndexes = [];

  constructor() { }

  ngOnInit(): void {
  }

  CarouselHover() {
      this.hover = 2;
  }
  CarouselLeave() {
      this.hover = 1;
  }

  changeTab(index) {
      this.tabindex = index;
  }
  selectTextItem(index) {
      this.currentTextIndex = index;
  }
  selectActionItem(index) {
      this.currentActionIndex = index;
  }
  selectCardItem(index) {
      this.currentCardIndex = index;
  }
  selectCard(index) {
      if (!(this.selectedCardIndexes.includes(index)))
          this.selectedCardIndexes = [...this.selectedCardIndexes, index]
      else
          this.selectedCardIndexes = this.selectedCardIndexes.filter(cardIndex => cardIndex != index)
  }
}
`;

modal_dropdown_html = `
<div class="modal-dropdown">
    <div class="select-projects-section">
        <label>Select Project/Projects <p class="red-mark">*</p></label>
        <select name="projects" [(ngModel)]="selectedProjects" id="projects" multiple="multiple">
            <option value="Billing">Billing</option>
            <option value="Inventory">Inventory</option>
            <option value="Loan">Loan</option>
        </select>
    </div>
    <div class="group-name-section">
        <label>Group Name <p class="red-mark">*</p></label>
        <div class="group-name-input">
            <input type="text" [(ngModel)]="groupName">
            <select [(ngModel)]="groupAction">
                <option value="readOnly">Read Only</option>
                <option value="canEdit">Can Edit</option>
                <option value="canEditDelete">Can Edit/Delete</option>
            </select>
        </div>
    </div>
    <div class="action-section">
        <button class="action-button">SAVE</button>
    </div>
</div>`;

modal_dropdown_css = `
.modal-dropdown {
    width: 500px;
    .select-projects-section {
        label {
            color: black;
            font-size: 15px;
            margin-bottom: 10px;
            display: flex;
        }
        select {
            height: 60px;
            width: 200px;
            border: 1px solid rgb(192, 192, 192);
            option {
                height: 30px;
                color: black;
                font-size: 15px;
                align-items: center;
                padding-left: 20px;
             
                &:checked {
                    background: rgb(243, 165, 64) -webkit-linear-gradient(bottom, rgb(243, 165, 64) 0%, rgb(243, 165, 64) 100%);
                }
            
            }
        }
    }

    .group-name-section {
        margin-top: 40px;
        width: 100%;
        label {
            color: black;
            font-size: 15px;
            margin-bottom: 10px;
            display: flex;
        }
        .group-name-input {
            width: 100%;
            height: 40px;
            border: 1px solid rgb(192, 192, 192);
            display: flex;
            align-items: center;
            vertical-align: middle;
            color: black;
            padding-left: 10px;
            input {
                width: calc(100% - 160px);
                height: 40px;
                vertical-align: middle;
            }
            select { 
                width: 150px;
                height: 30px;
                background-color: rgb(243, 165, 64);
                color: white;
                padding-left: 15px;
                padding-right: 10px;
                vertical-align: middle;
                border-radius: 5px;
            }
        }
    }

    .red-mark {
        color: red;
        margin-left: 5px; 
    }

    .action-section {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .action-button {
            width: 150px;
            height: 40px;
            display: flex;
            justify-content: center;
            color: white;
            background-color: rgb(243, 165, 64);
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            vertical-align: middle;
            align-items: center;
            border-radius: 3px;
            &:hover{
                background-color: rgb(250, 180, 74);
            }
        }
    }
}`;

modal_dropdown_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dropdown',
  templateUrl: './modal-dropdown.component.html',
  styleUrls: ['./modal-dropdown.component.scss']
})
export class ModalDropdownComponent implements OnInit {

  selectedProjects: any;
  groupName: any;
  groupAction: any = 'readOnly';
  constructor() { }

  ngOnInit(): void {
  }

}
`;

stepper_html = `
<div class="stepper">
    <div class="stepper__container">
        <div class="stepper__step" [ngClass]="{'active': step >= 1}">
            <div class="round-tab">
                <img src="assets/icons/user.png" />
                <div class="complted-range" *ngIf="step >= 1"></div>
                <img class="completed-mark" *ngIf="step >= 1" src="assets/icons/complted-mark.png" />
                <span>Project</span>
            </div>
        </div>
        <div class="stepper__step" [ngClass]="{'active': step >= 2}">
            <div class="round-tab">
                <img src="assets/icons/group-user.png" />
                <div class="complted-range" *ngIf="step >= 2"></div>
                <img class="completed-mark" *ngIf="step >= 2" src="assets/icons/complted-mark.png" />
                <span>Group</span>
            </div>
        </div>
        <div class="stepper__step" [ngClass]="{'active': step >= 3}">
            <div class="round-tab">
                <img src="assets/icons/user.png" />
                <div class="complted-range" *ngIf="step >= 3"></div>
                <img class="completed-mark" *ngIf="step >= 3" src="assets/icons/complted-mark.png" />
                <span>User</span>
            </div>
        </div>
    </div>
    <div class="content">
        <div *ngIf="step == 0">
            Project Section
            <button class="action-button" (click)="nextStep()">Next</button>
        </div>
        <div *ngIf="step == 1">
            Group Section
            <button class="action-button" (click)="nextStep()">Next</button>
        </div>
        <div *ngIf="step == 2">
            User Section
            <button class="action-button" (click)="nextStep()">Next</button>
        </div>
    </div>
</div>
`;

stepper_css = `
.stepper {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    .stepper__container {
        display: flex;
        position: relative !important;
        .stepper__step {
            position: relative !important;
            width: calc(33.33%);
           
            .round-tab {
                .completed-mark {
                    position: absolute;
                    margin-top: -29px;
                    margin-left: 17px;
                    z-index: 100;
                }
                .complted-range {
                    background-color: rgb(230, 231, 235);
                    position: absolute;
                    width: calc(100% + 4px);
                    height: calc(100% + 4px);
                    opacity: 80%;
                    border-radius: 100%;
                    top: -2px;
                    left: -2px;
                }
                width: 65px;
                height: 65px;
                line-height: 22px;
                display: inline-block;
                border-radius: 100%;
                background: rgb(193, 196, 199);
                border: 2px solid rgb(114, 128, 138);
                color: #34bc9b;
                z-index: 2;
                position: absolute;
                left: 0;
                text-align: center;
                font-size: 14px;
                align-items: center;
                vertical-align: middle;
                img {
                    width: 35px;
                    margin-left: auto;
                    margin-right: auto;
                }
                span {
                    font-size: 14px;
                    color: rgb(52, 73, 94);
                }
            }
            &:last-child {
                &::after {
                    background: transparent;
                }
            }

            &:after {
                content: '';
                position: absolute;
                background: rgb(196, 194, 196);
                display: block;
                width: 76%;
                height: 6px;
                top: 32px;
                left: 75px;
                z-index: 1;
            }
            &.active {
                &:after {
                    content: '';
                    position: absolute;
                    background: rgb(5, 110, 155);
                    display: block;
                    width: 76%;
                    height: 6px;
                    top: 32px;
                    left: 75px;
                    z-index: 1;
                }
                &:last-child {
                    &::after {
                        background: transparent;
                    }
                }
            }
        }
    }
    .content {
        margin-top: 100px;
        .action-button {
            width: 150px;
            height: 40px;
            display: flex;
            justify-content: center;
            color: white;
            background-color: rgb(243, 165, 64);
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            vertical-align: middle;
            align-items: center;
            border-radius: 3px;
            &:hover{
                background-color: rgb(250, 180, 74);
            }
        }
    }
}`;

stepper_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.scss']
})
export class StepperComponentComponent implements OnInit {

  step: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.step = this.step + 1;
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

accordion_html = `
<button class="accordion" [ngClass]="{'active': curPanel == 1}" (click)="showPanel(1)">Section 1</button>
<div class="panel" [ngClass]="{'active': curPanel == 1}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion" [ngClass]="{'active': curPanel == 2}" (click)="showPanel(2)">Section 2</button>
<div class="panel" [ngClass]="{'active': curPanel == 2}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion" [ngClass]="{'active': curPanel == 3}" (click)="showPanel(3)">Section 3</button>
<div class="panel" [ngClass]="{'active': curPanel == 3}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>`;

accordion_css = `
.accordion {
    background-color: #e2e7e9;
    color: #1c323f;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    font-family: "DM Sans";
  }
  
  .active, .accordion:hover {
    background-color: #e9f6fb; 
  }
  
  .panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
    &.active {
        display: block;
    }
  }`;

  accordion_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  curPanel: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showPanel(index) {
    this.curPanel = index;
  }
}
`;

tooltip_html = `
<div class="container">
    <div class="rectangle">
        <span>Success Top</span>
        <span class="multi-level-dropdown__tooltip top success">Success Top</span>
    </div>
    <div class="rectangle">
        <span>Info Top</span>
        <span class="multi-level-dropdown__tooltip top info">Info Top</span>
    </div>
    <div class="rectangle">
        <span>Danger Top</span>
        <span class="multi-level-dropdown__tooltip top danger">Danger Top</span>
    </div>
    <div class="rectangle">
        <span>Warning Top</span>
        <span class="multi-level-dropdown__tooltip top warning">Warning Top</span>
    </div>
    <div class="rectangle">
        <span>Success Bottom</span>
        <span class="multi-level-dropdown__tooltip bottom success">Success Bottom</span>
    </div>
    <div class="rectangle">
        <span>Info Bottom</span>
        <span class="multi-level-dropdown__tooltip bottom info">Info Bottom</span>
    </div>
    <div class="rectangle">
        <span>Danger Bottom</span>
        <span class="multi-level-dropdown__tooltip bottom danger">Danger Bottom</span>
    </div>
    <div class="rectangle">
        <span>Warning Bottom</span>
        <span class="multi-level-dropdown__tooltip bottom warning">Warning Bottom</span>
    </div>
</div>
`;

tooltip_css = `
.multi-level-dropdown__tooltip {
    width: auto;
    background-color: #5b9e73;
    color: #ffffff !important;
    font-family: 'DM Sans';
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 18px;
    text-align: center;
    padding: 9px 11px;
    border-radius: 6px;
    position: absolute;
    visibility: hidden;
    
    z-index: 1;
    white-space: nowrap;
    transform: translateX(-50%);
    left: 50%;

    &.multi-level-dropdown__tooltip_last {
        transform: none;
        right: 0;
        left: auto;

        &:after {
            right: 34px;
            left: auto;
        }
    }

    &.success {
        background-color: #5b9e73;
        &.bottom {
            &:after {
                border-color: transparent transparent #5b9e73 transparent;
            }
        }
        &.top {
            &:after {
                border-color:  #5b9e73 transparent transparent transparent;
            }
        }
    }

    &.info {
        background-color: #6d8790;
        &.bottom {
            &:after {
                border-color: transparent transparent #6d8790 transparent;
            }
        }
        &.top {
            &:after {
                border-color:  #6d8790 transparent transparent transparent;
            }
        }
    }

    &.danger {
        background-color: #d85259;
        &.bottom {
            &:after {
                border-color: transparent transparent #d85259 transparent;
            }
        }
        &.top {
            &:after {
                border-color:  #d85259 transparent transparent transparent;
            }
        }
    }

    &.warning {
        background-color: #e4813c;
        &.bottom {
            &:after {
                border-color: transparent transparent #e4813c transparent;
            }
        }
        &.top {
            &:after {
                border-color:  #e4813c transparent transparent transparent;
            }
        }
    }

    &.top {
        &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -8px;
            border-width: 8px;
            border-style: solid;
        }
        top: calc(-100% - 15px);
    }

    &.bottom {
        &::after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -8px;
            border-width: 8px;
            border-style: solid;
        }
        top: calc(100% + 8px);
    }
}

.rectangle {
    padding: 4px 7px 4px 8px;
    border-radius: 4px;
    background-color: #4284a2;
    margin-right: 6px;
    cursor: pointer;
    width: 300px;
    position: relative;

    &:hover {
        background-color: #429fca;
        .multi-level-dropdown__tooltip {
            visibility: visible;
        }
    }

    span {
        color: #ffffff;
        font-family: 'DM Sans';
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0;
        line-height: 16px;
    }
}

.container {
    display: flex;
}`;

tooltip_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
`;

icon_dropdown_html = `
<div class="icon-dropdown">
    <a href="javascript:;" class="tool-bar-button tool-bar-button__user" [ngClass]="{'clicked': isMenuShow}" (click)="showMenu()" (mouseenter)="hoverInButton()" (mouseleave)="hoverOutButton()">
        <img class="normal" src="../../assets/img/nav-user-icon.svg">
        <img class="hover" src="../../assets/img/nav-user-hover-icon.svg">
    </a>
    <ul class="" (mouseenter)="hoverInMenu()" (mouseleave)="hoverOutMenu()" *ngIf="isMenuShow">
        <li class="multi-level-dropdown__status multi-level-dropdown__gray" (click)="showTimeline()">
            <span>Timeline</span>
        </li>
        <li class="multi-level-dropdown__status multi-level-dropdown__danger" 
         >
            <span>Log Out</span>
            <span style="float: right;">
                <img src="../../assets/img/right-direction-icon.svg">
            </span>
            <ul >
                <li class="multi-level-dropdown__status multi-level-dropdown__gray"
                >
                    <span>End of the day</span>
                </li>        
                <li class="multi-level-dropdown__status multi-level-dropdown__gray"
                 >
                    <span>Meetig</span>
                </li>  
            </ul>
        </li>
    </ul>
</div>
`;

icon_dropdown_css = `
.icon-dropdown {
    position: relative;
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
    
    ul {
        position: absolute;
        list-style: none;
        padding: 0px;
        border: 1px solid rgba(109, 135, 144, 0.15);
        border-radius: 0px 10px 0px 0px;
        background-color: #ffffff;
        box-shadow: 0 2px 2px 0 rgba(109, 135, 144, 0.06);
        width: 133px;
        z-index: 100;
        box-shadow: 0px 15px 25px rgba(109, 135, 144, 0.45);
    }
    
    li {
        height: 27px;
        color: #5b9e73;
        font-family: 'DM Sans';
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 17px;
        padding-left: 10px;
        padding-right: 10px;
        border-bottom: 1px solid #6d879015;
        /* opacity: 0.15; */
        padding-top: 8px;
        cursor: pointer;
    
        &:first-child {
            border-radius: 0px 10px 0px 0px;
        }
    
        &:last-child {
            border-radius: 0px 0px 0px 0px;
        }
    
        & > span {
            svg {
                right: 0;
                position: absolute;
                margin-right: 7.25px;
                margin-top: 2.25px;
            }
        }
    
        & > ul {
            display: none;
        }
    
        &:hover {
            background: #e6f3f7;
    
            > ul {
                display: inline-block;
                margin-top: -9px;
                left: calc(100% );
                position: absolute;
                border-radius: 0px 10px 10px 10px;
                box-shadow: 0px 15px 25px rgba(109, 135, 144, 0.45);
                li:last-child{
                    border-radius: 0px 0px 10px 10px;
                } 
            }
        }
    }
    
    li.multi-level-dropdown__danger {
        color: #dd5050;
    
        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
    
    
    
    li.multi-level-dropdown__gray {
        color: #6d8790;
    
        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
    
    li {
        a {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
    
    li.multi-level-dropdown__action {
        padding: 7px;
        height: auto;
    
        button {
            width: 100%;
            height: 30px;
            border-radius: 4px;
            background-color: #4ea8ca;
            border: none;
            vertical-align: middle;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
    
            &:focus {
                outline: none;
            }
            &:hover {
                background-color: rgb(32, 137, 179);
            }
    
            path {
                fill: white;
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
    }    
}`;

icon_dropdown_script = `
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
`;

data_table_html = `
<table datatable [dtOptions]="dtOptions" class="hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Foo</td>
        <td>Bar</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Someone</td>
        <td>Youknow</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Iamout</td>
        <td>Ofinspiration</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Yoda</td>
        <td>Skywalker</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Patrick</td>
        <td>Dupont</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Barack</td>
        <td>Obama</td>
      </tr>
      <tr>
        <td>7</td>
        <td>François</td>
        <td>Holland</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Michel</td>
        <td>Popo</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Chuck</td>
        <td>Norris</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Simon</td>
        <td>Robin</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Louis</td>
        <td>Lin</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Zelda</td>
        <td>Link</td>
      </tr>
    </tbody>
  </table>`;

  data_table_css = `
  table {
    color: #1c323f !important;
    font-family: 'DM Sans' !important;
    tbody {
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 30px !important;
        tr {
            cursor: pointer;
            &:hover {
                background-color: #e6f3f7 !important;
                color: #0095da !important;
            }
        }
    }  
}
.dataTables_wrapper .dataTables_paginate .paginate_button  {
    border: 1px solid rgba(109, 135, 144, 0.2) !important;
    background-color: #ffffff !important;
    background: #ffffff !important;
    border-radius: 10px !important;
    color: #1c323f !important;
    cursor:  pointer !important;
    &:hover {
        background-color: #dfe9ed !important;
        background: #dfe9ed !important;
        border: 1px solid rgba(109, 135, 144, 0.2) !important;
        color: #1c323f !important;
    }
  }

  .dataTables_wrapper {
    color: #1c323f !important;
    font-family: 'DM Sans' !important;
    .dataTables_length {
        select {
            box-sizing: border-box !important;
            border: 1px solid rgba(109, 135, 144, 0.2) !important;
            border-radius: 5px !important;
            background-color: #ffffff !important;
            box-shadow: 0 4px 4px 0 rgba(109, 135, 144, 0.1) !important;
            color: #1c323f !important;
            font-family: 'DM Sans' !important;
            font-size: 14px !important;
            letter-spacing: 0 !important;
            line-height: 18px !important;
            -webkit-appearance: none !important;
            padding-left: 8px !important;
            background-color: white !important;
            width: 52px !important;
            cursor: pointer;
            //Use png at assets/selectArrow.png for the arrow on the right
            //Set the background color to a BadAss Green color
            background: url(/assets/img/dropdown_arrow.svg) no-repeat scroll
                calc(100% - 10px) center/8px auto white !important;
        }
    }
  }

  .DataTables_Table_0_filter {
      input {
        box-sizing: border-box !important;
        color: black !important;
        font-family: "DM Sans" !important;
        font-size: 14px !important;
        letter-spacing: 0 !important;
        line-height: 18px !important;
        border: none !important;
        width: 186px !important;
        padding-top : 6px !important;
        padding-left: 11px !important;
        
        &:focus {
            outline: none !important;
        }
      }
  }
`;

data_table_script = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
`;

  ngOnInit(): void {
  }

}
