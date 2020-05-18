import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule
    ]
})
export class SharedModule { }
