import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedtodoPage } from './archivedtodo';

@NgModule({
  declarations: [
    ArchivedtodoPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedtodoPage),
  ],
})
export class ArchivedtodoPageModule {}
