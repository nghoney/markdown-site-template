import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ContentListComponent } from './content-list/content-list.component';


const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      {
        path: '',
        component: ContentListComponent
      },
      // {
      //   path: 'docs/:id',
      //   component: ArticleContentComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
