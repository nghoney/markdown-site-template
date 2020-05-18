import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
