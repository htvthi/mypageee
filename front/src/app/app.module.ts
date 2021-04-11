import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './pages/photos/photos.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxBootstrapIconsModule, allIcons} from 'ngx-bootstrap-icons';
import { AboutComponent } from './pages/about/about.component';
import { FormComponent } from './pages/photos/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";

const icons = {
  allIcons,
}

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AboutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
