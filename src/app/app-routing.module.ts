import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.LoginComponent) },
  { path: 'updates', loadChildren: () => import('./updates/updates.module').then(m => m.UpdateLogsComponent) },
  {
    path: 'initializr',
    loadChildren: () => import('./initializr/initializr.module').then(m => m.InitializrModule),
    canActivate: [ AuthService ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
