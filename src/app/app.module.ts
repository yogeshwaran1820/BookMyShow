import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { AllcardComponent } from './allcard/allcard.component';
import { SportsComponent } from './sports/sports.component';
import { FooterComponent } from './footer/footer.component';
import { RocmmandmoviesComponent } from './rocmmandmovies/rocmmandmovies.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardsComponent,
    AllcardComponent,
    SportsComponent,
    FooterComponent,
    RocmmandmoviesComponent,
    MoviedetailsComponent,
    SigninComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,FormsModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    MatIconModule,MatDividerModule,MatButtonModule,MymoduleModule,MatAutocompleteModule,AsyncPipe,
    MatMenuModule, MatProgressSpinnerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
