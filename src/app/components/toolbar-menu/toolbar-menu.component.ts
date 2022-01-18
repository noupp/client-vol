import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { KeycloakService } from "keycloak-angular";
import { environment as env } from '../../../environments/environment';
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
/**
 * Toolbar for menu component
 */
export class ToolbarMenuComponent implements OnInit {
    /*title = 'Client vol';
    realmName = `${ env.keycloak.realm }`;
    redirectUri = `${ env.keycloak.redirectUri }`

    isHandset$: Observable<boolean> = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );*/
  constructor(
    private keycloak: KeycloakService,
    //private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    /*this.keycloak.loadUserProfile().then(profile => {
      this.title = `Vol - ${profile.firstName} ${profile.lastName} (ID: ${profile.username} Email: ${profile.email}  )`;
    });*/
  }

  logout() {
     this.keycloak.logout();
  }
}
