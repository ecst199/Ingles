import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'body', component: BodyComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

