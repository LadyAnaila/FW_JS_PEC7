import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';
import { AuthStoreGuard } from '../shared/guards/auth-store.guard';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'new', component: ArticleNewReactiveComponent, canActivate: [AuthStoreGuard] },
  { path: ':id', component: ArticleDetailComponent, canActivate: [AuthStoreGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }