import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { auditcomponent } from './audit/audit.component';
import { homecomponent } from './home/home.component';
import { logoutcomponent } from './logout/logout.component';
import { parameterscomponent } from './parameters/parameters.component';
import { archivecomponent } from './archive/archive.component';
import { inpmcomponent } from './inpm/inpm.component';
import { inpmicomponent } from './inpmi/inpmi.component';
const appRoute: Routes = [
  {path: '',component: homecomponent},
  {path: 'HOME',component: homecomponent},
  {path: 'AUDIT',component: auditcomponent},
  {path: 'PARAMETERS',component: parameterscomponent},
  {path: 'LOGOUT',component: logoutcomponent},
  {path: 'Archive-Screen',component: archivecomponent},
  {path: 'INPM-Pockets',component: inpmcomponent},
  {path: 'INPM-Inserts',component: inpmicomponent}
]



@NgModule({
  declarations: [
    AppComponent,
    auditcomponent,
    homecomponent,
    logoutcomponent,
    parameterscomponent,
    archivecomponent,
    inpmcomponent,
    inpmicomponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
