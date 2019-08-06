import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageGalleryModule} from './image-gallexy/image-gallexy.module';
import {GalleryConfig} from './image-gallexy/token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
