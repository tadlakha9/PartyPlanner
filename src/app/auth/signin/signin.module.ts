import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

import { SigninComponent } from './signin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [SigninComponent],
  exports: [SigninComponent]
})
export class SigninModule {}
