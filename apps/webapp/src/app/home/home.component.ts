import { Component, OnDestroy } from '@angular/core';
import { AdminUi, NavItem } from '@ngx-fire/admin-ui';
import { Subscription } from 'rxjs/Subscription';

import { AccountApi } from '../sdk';

@Component({
  selector: 'fire-home',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnDestroy {
  private authIcon;
  private sidebarNav: NavItem[];
  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private fireUi: AdminUi,
    private userApi: AccountApi,
  ) {
    this.fireUi.setSidebarNav([
      {
        'name': 'Auth',
        'link': '/home/auth',
        'icon': this.getAuthIcon()
      },
      {
        'name': 'Dashboard',
        'link': '/home/dashboard',
        'icon': 'tachometer'
      },
      {
        'name': 'UI',
        'link': '/home/ui',
        'icon': 'object-group'
      },
      {
        'name': 'Files',
        'link': '/home/files',
        'icon': 'files-o'
      },
      {
        'name': 'Todos',
        'link': '/home/todos',
        'icon': 'check-square-o'
      },
      {
        'name': 'Notes',
        'link': '/home/notes',
        'icon': 'sticky-note-o'
      },

    ]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  getAuthIcon() {
    if (this.userApi.isAuthenticated()) {
      return 'unlock'
    } else {
      return 'lock'
    }
  }
}
