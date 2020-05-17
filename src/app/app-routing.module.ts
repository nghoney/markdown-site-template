import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'updates', component: UpdateLogsComponent },
  {
    path: 'initializr',
    loadChildren: 'app/initializr/initializr.module#InitializrModule',
    canActivate: [ AuthService ]
  },
  {
    path: '',
    loadChildren: 'app/blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
