import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import { NavBarComponent } from './navbar.component';
import { SharedModule } from '../ngmodules';

@NgModule({
  declarations: [NavBarComponent],
    imports: [
      CommonModule,
      MatButtonModule,
      MatMenuModule,
      RouterModule,
      SharedModule
    ],
    exports: [NavBarComponent],

  })
  export class NavBarModule {}