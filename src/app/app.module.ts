import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBoxComponent } from './image-box/image-box.component';
import { TitleComponent } from './image-box/title/title.component';

//import { ImageBoxService } from './image-box/image-box.service';
import { GetDataService } from './image-box/get-data.service';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { MasterButtonComponent } from './master-button/master-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageBoxComponent,
    TitleComponent,
    TabsComponentComponent,
    MasterButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //ImageBoxService, 
    GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
