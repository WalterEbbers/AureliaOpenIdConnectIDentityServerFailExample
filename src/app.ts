
import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

import { OpenIdConnect, OpenIdConnectRoles } from 'aurelia-open-id-connect';
import { User } from 'oidc-client';

@autoinject
export class App { 

  private router: Router;
  //private user: User;

  constructor(
/*    private openIdConnect: OpenIdConnect*/) {
     
   // this.openIdConnect.observeUser((user: User) => this.user = user);
  }

  //public configureRouter(config: RouterConfiguration, router: Router): void {
  //  config.title = "";
  //  config.options.root = './';

  //  config.map([
  //    {
  //      route: ['', 'account'],        
  //      name: 'account',
  //      moduleId: 'shared/components/account/account-component',
  //      title: 'account',
  //      auth: true,
  //      settings: {
  //        roles: [OpenIdConnectRoles.Authenticated],
  //      }
  //    },

  //  ]);

  //  //this.openIdConnect.configure(config);
  //  this.router = router;
  //}
}
