import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



 const appRoutes: Routes = [
   {
     path: 'login',
     component: LoginFormComponent
   },
   {
     path: '',
     component: HomeComponent
   },
   {
     path: 'list',
     component: ListComponent
   },
   {
     path: 'edit',
     component: EditComponent
   },
   {
     path: 'create',
     component: CreateComponent
   }
 ]

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
