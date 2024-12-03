import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavService } from './sidenav.service';
import { ThemeService } from '../../../@fury/services/theme.service';
import {ErrorResponse} from "../../../@fury/interceptor/error-response";

@Component({
  selector: 'fury-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  @Input()
  @HostBinding('class.expanded')
  expanded: boolean;

  items$: Observable<SidenavItem[]>;

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private themeService: ThemeService,
            //  private authService: AuthService,
             // private userService: UserService
              ) {
  }

  ngOnInit() {
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => {
        console.log(items)
        return items
      })
    );
    // if (this.authService.isLoggedIn()) {
    //   this.userService.requestUserResourceList()
    //     .subscribe(this.successMenu, this.serviceError);
    // }
  }

  protected successMenu = (body: any) => {
    this.sidenavService.addItems(body);
  }

  protected serviceError = (error: ErrorResponse) => {
    console.error('Error de Servicio: ', error);
  }


  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    this.sidenavService.setExpanded(true);
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    this.sidenavService.setExpanded(false);
  }

  ngOnDestroy() {
  }
}
