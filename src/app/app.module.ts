import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { MapBoxComponent }  from './mapbox/mapbox.component';
import { SmoochComponent }  from './smooch/smooch.component';
import { SocketComponent }  from './socket/socket.component';

@NgModule({

  imports: [
    BrowserModule
  ],

  declarations: [
    AppComponent,
    MapBoxComponent,
    SmoochComponent,
    SocketComponent
  ],

  bootstrap: [
      AppComponent
  ]

})

export class AppModule { }
