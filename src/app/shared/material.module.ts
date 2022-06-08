import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule],
})
export class MaterialModule {}
