import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  { path: 'photos', component: PhotosComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
