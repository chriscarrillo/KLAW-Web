import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SimulatorComponent } from './simulator/simulator.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatTabsModule, MatSnackBarModule, MatButtonModule, MatDialogModule, MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveProcedureComponent } from './components/save-procedure/save-procedure.component';
import { BlocklyEditorComponent } from './components/blockly-editor/blockly-editor.component';
import { RobotConnectionComponent } from './components/robot-connection/robot-connection.component';
import { RobotConnectionDialogComponent } from './components/robot-connection-dialog/robot-connection-dialog.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StartControlComponent } from './components/start-control/start-control.component';
import { RobotConnectionService } from './services/robot-connection/robot-connection.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SimulatorComponent,
    PageNotFoundComponent,
    SaveProcedureComponent,
    BlocklyEditorComponent,
    RobotConnectionComponent,
    ProfileSettingsComponent,
    RobotConnectionDialogComponent,
    StartControlComponent
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
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule
  ],
  entryComponents: [
    RobotConnectionDialogComponent
  ],
  providers: [RobotConnectionService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
