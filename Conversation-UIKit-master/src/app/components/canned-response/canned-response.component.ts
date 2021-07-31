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
