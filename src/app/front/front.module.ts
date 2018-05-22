import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavbarComponent, FooterComponent, HomeComponent, ContactComponent],
  exports: [NavbarComponent, FooterComponent, HomeComponent, ContactComponent]})
export class FrontModule { }
