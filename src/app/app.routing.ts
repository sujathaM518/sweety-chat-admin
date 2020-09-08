import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '', 
  //   pathMatch: 'full'   
  // },
  {
    path: 'sessions', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ] 
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'others', 
      //   loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
      //   data: { title: 'Others', breadcrumb: 'OTHERS'}
      // },
      // {
      //   path: 'search', 
      //   loadChildren: () => import('./views/search-view/search-view.module').then(m => m.SearchViewModule)
      // },
      {
        path: '',
        loadChildren: ()=> import('./views/business/business.module').then(m=> m.BusinessModule)
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

