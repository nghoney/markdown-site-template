import { Component, OnInit, Inject } from '@angular/core';
import { ConfService } from '../_shared/service/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: string;
  isOnLoading = true;

  constructor(
  //  private confService: ConfService,
  //  public dialogRef: MatDialogRef<AboutComponent>,
  //  @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {


  }

  onNoClick(): void {
  //  this.dialogRef.close();
  }

}
