import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersApiService } from '../apiServices/user/users-api.service';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { SimulatorComponent } from './simulator/simulator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatTabsModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveProcedureComponent } from './components/save-procedure/save-procedure.component';
import { BlocklyEditorComponent } from './components/blockly-editor/blockly-editor.component';
import { RobotStatusComponent } from './components/robot-status/robot-status.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BannerComponent } from './components/banner/banner.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        component: MainComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    SimulatorComponent,
    SaveProcedureComponent,
    BlocklyEditorComponent,
    RobotStatusComponent,
    ProfileSettingsComponent,
    PageNotFoundComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
