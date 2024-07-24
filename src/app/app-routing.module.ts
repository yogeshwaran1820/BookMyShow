import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AllcardComponent } from './allcard/allcard.component';
import { SportsComponent } from './sports/sports.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:"home",component:HomeComponent}, 
  {path:"home/account/home",component:HomeComponent}, 
  {path:'signin',component:SigninComponent},
  {path:'home/account',component:AccountComponent}
    // children: [
      // { path: 'card', component: AllcardComponent },
      // {path:'allcards/sports',component:SportsComponent}]
    // },
  // {path:'allcards',component:AllcardComponent},
  // {path:'sports',component:SportsComponent},

  // {path:'',component:LoginComponent},
  // {path:"home",component:HomeComponent,  children: [
  //   { path: 'card', component: AllcardComponent },
  //   {path:'sports',component:SportsComponent}
  // ]  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
