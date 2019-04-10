import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'fds-sidenav-left-menu',
    templateUrl: './sidenav-left-menu.component.html',
    styleUrls: ['./sidenav-left-menu.component.scss']
})
export class SidenavLeftMenuComponent implements OnInit {
    constructor(private router: Router) {
    }

    public ngOnInit() {
    }

    public navigateTo(path: string[]): void {
        this.router.navigate(path);
    }

    public isActive(path): boolean {
        return (window.location.pathname.indexOf(path) !== -1);
    }
}
