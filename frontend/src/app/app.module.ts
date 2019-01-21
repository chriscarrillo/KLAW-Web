import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {UsersApiService} from '../apiServices/user/users-api.service';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { SimulatorComponent } from './simulator/simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
