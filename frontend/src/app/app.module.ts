import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersApiService } from '../apiServices/user/users-api.service';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { SimulatorComponent } from './simulator/simulator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatTabsModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveProcedureComponent } from './components/save-procedure/save-procedure.component';
import { BlocklyEditorComponent } from './components/blockly-editor/blockly-editor.component';
import { RobotStatusComponent } from './components/robot-status/robot-status.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ModelObjectComponent } from './simulator/model-object.component';

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
    ModelObjectComponent
  ],
  imports: [
    BrowserModule,
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
