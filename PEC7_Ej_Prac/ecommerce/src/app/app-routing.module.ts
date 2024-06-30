import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'articles',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
  
  { path: '**', redirectTo: '/login' }  //Al borrar esta línea en la consola se muestra conforme está intentando entrar en el artículo, pero no entra. Al dejarla, no sé si por error de la ruta o del guardado del logueo, nos devuelve al login.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
