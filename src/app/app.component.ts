import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'fds-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public readonly MAX_SIDENAV_WIDTH = '(max-width: 599px)';
    public readonly MIN_SIDENAV_WIDTH = '(min-width: 599px)';
    public isSmallScreen = false;
    public isSidenavOpened = false;

    constructor(
        private breakpointObserver: BreakpointObserver
    ) {
        this.initBreakpointObserver();
    }

    public ngOnInit() {
    }

    private initBreakpointObserver(): void {
        this.isSmallScreen = this.breakpointObserver.isMatched(this.MAX_SIDENAV_WIDTH);

        this.breakpointObserver.observe([this.MAX_SIDENAV_WIDTH, this.MIN_SIDENAV_WIDTH])
            .subscribe((result: BreakpointState) => {
            this.isSmallScreen = (result.breakpoints && result.breakpoints[this.MAX_SIDENAV_WIDTH]) ? true : false;
        });
    }
}
