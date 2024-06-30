import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'create-article', component: ArticleNewReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleModule { }
