import { FrontModule } from './front/front.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./front/front.module#FrontModule",
    },
  {
    path: "**",
    redirectTo: "lander"
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FrontModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
