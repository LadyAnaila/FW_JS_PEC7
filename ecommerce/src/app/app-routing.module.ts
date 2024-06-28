import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthStoreGuard } from './auth-store.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'article/:id', component: ArticleDetailComponent, canActivate: [AuthStoreGuard] },

  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
