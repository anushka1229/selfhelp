import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatInputModule, MatSelectModule,MatAutocompleteModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchComponent } from './components/search/search.component';
import { UploadComponent } from './components/upload/upload.component';
import { UsermanualComponent } from './components/usermanual/usermanual.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent,
    UsermanualComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule ,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
