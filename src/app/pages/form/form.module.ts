import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { FormRoutingModule } from './form.routing';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  declarations: [FormComponent,]
})
export class FormModule { }
