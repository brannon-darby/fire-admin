import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ControlComponent } from './control.component';
import { ControlFormComponent } from './form/control-form.component';
import { ControlService } from './control.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ControlComponent,
    ControlFormComponent,
  ],
  entryComponents: [
    ControlFormComponent,
  ],
  exports: [
    ControlComponent,
  ],
  providers: [
    ControlService
  ]
})
export class ControlModule { }
