import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { UiDemoComponent } from './ui/ui-demo.component';
import { NotificationsComponent } from './ui/notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'ui',
        component: UiDemoComponent,
        children: [
          { path: '', redirectTo: 'notifications', pathMatch: 'full' },
          { path: 'notifications', component: NotificationsComponent },
        ]
      },
      { path: 'todos', component: TodoComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule { }
