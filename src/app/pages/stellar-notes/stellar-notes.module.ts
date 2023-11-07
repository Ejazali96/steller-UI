import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarNotesRoutingModule } from './stellar-notes-routing.module';
import { StellarNotesMainComponent } from './stellar-notes-main/stellar-notes-main.component';
import { StellarCreateNotesComponent } from './stellar-create-notes/stellar-create-notes.component';
import { StellarNotesFeaturesComponent } from './stellar-notes-features/stellar-notes-features.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StellarNotesMainComponent,
    StellarCreateNotesComponent,
    StellarNotesFeaturesComponent
  ],
  imports: [
    CommonModule,
    StellarNotesRoutingModule,
    SharedModule
  ]
})
export class StellarNotesModule { }
