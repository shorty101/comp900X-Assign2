import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ArticleComponent } from './article/article.component';
import { CalculatorComponent } from './calculator/calculator.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FrontPageComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'article', component: ArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    SidebarMenuComponent,
    ArticleComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
