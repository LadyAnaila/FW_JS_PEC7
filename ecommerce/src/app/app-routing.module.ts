import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ArticleListComponent } from './article/components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article/components/article-new-reactive/article-new-reactive.component';
import { AuthStoreGuard } from './shared/guards/auth-store.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'create-article', component: ArticleNewReactiveComponent, canActivate: [AuthStoreGuard] },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
