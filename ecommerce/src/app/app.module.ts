import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';

import { AppRoutingModule } from './app-routing.module'; 

import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article/components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article/components/article-new-reactive/article-new-reactive.component';
import { ArticleItemComponent } from './article/components/article-item/article-item.component';
import { ImageArticlePipe } from './shared/pipes/image-article.pipe';
import { RegisterComponent } from './auth/components/register/register.component';
import { ArticleDetailComponent } from './article/components/article-detail/article-detail.component';

import { AuthService } from './auth/services/auth.service';
import { AuthStoreGuard } from './shared/guards/auth-store.guard';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';












@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleItemComponent,
    ImageArticlePipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     AppRoutingModule,
     HttpClientModule
  ],
  providers: [AuthService, 
    AuthStoreGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

