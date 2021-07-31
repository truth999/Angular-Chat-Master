import { Component, OnInit, ViewChild } from '@angular/core';
import { AppState, selectChannel } from '../../ngrx/reducers/index.reducer';
import { Store, select } from '@ngrx/store';
import { ChannelComponent } from '../../components/channel/channel.component';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { ChangeOpenedRequest } from 'src/app/ngrx/actions/opened-requestdetail.actions';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @ViewChild('mldbc_chat') mldbc_chat: ChannelComponent;
    @ViewChild('mldbc_voice') mldbc_voice: ChannelComponent;
    @ViewChild('mldbc_email') mldbc_email: ChannelComponent;

    isSearchVisible = false;
    channel: any;
    _activeTheme = 'default-mode';
    isMenuShow: boolean = false;
    hoverUserButton: boolean = false;
    hoverMenu: boolean = false;

    constructor(private store: Store<AppState>, private router: Router, private renderer: Renderer2) {
        store.select('channel').subscribe(val => this.channel = val);
        this.renderer.listen('window', 'click', (e: Event) => {
            if (this.hoverMenu == false && this.hoverUserButton == false) {
                this.isMenuShow = false;
            }
        });
    }

    get activeTheme() {
        return this._activeTheme;
    }
    set activeTheme(value) {
        document.documentElement.dataset.theme = value;
        this._activeTheme = value;
    }

    ngOnInit(): void {
    }

    // get the visiblity from the parent
    searchBarShow() {
        this.isSearchVisible = true;
        setTimeout(function () {
            var x = document.getElementById("_search").focus();
        }, 100);
    }

    searchEventFunc(val: boolean): void {
        this.isSearchVisible = false;
        if (val) {
            this.router.navigate(["home/search"], { skipLocationChange: true });
        }
    }
    viewErrorHistories() {
        this.router.navigate(["home/error-histories"], { skipLocationChange: true });
        this.store.dispatch(new ChangeOpenedRequest(''));
    }
    goToHome(): void {
        if (this.channel.chat.agentStatus.currentState == 'NOT_READY' && this.channel.voice.agentStatus.currentState == 'NOT_READY' && this.channel.email.agentStatus.currentState == 'NOT_READY') {
            // Go to dashboard
            this.router.navigate(['home'], { skipLocationChange: true });
        } else {
            // Go to Queue
            localStorage.setItem('tab_id', '0');
            this.router.navigate(['home/queue'], { skipLocationChange: true });
        }
        this.store.dispatch(new ChangeOpenedRequest(''));
    }

    resetAll(): void {
        this.mldbc_chat.ngOnInit();
        this.mldbc_voice.ngOnInit();
        this.mldbc_email.ngOnInit();
    }


    changeTheme() {
        if (this.activeTheme == 'default-mode') {
            this.activeTheme = 'dark-mode';
        } else {
            this.activeTheme = 'default-mode';
        }
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

    logout() {
        this.router.navigate([""], { skipLocationChange: true });
    }
    showTimeline() {
        this.isMenuShow = false;
        this.router.navigate(["home/timeline"], { skipLocationChange: true });
    }
}
