import { Component, OnInit, Inject } from '@angular/core';
import { ConfigService } from '../_shared/service/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: string;
   isOnLoading = false;
  headerImageStyle: any = {};
  titleDescription = "this is some description will be put here";
  constructor(
  //  private confService: ConfigService ,
  //  public dialogRef: MatDialogRef<AboutComponent>,
  //  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.headerImageStyle = {
      'background-image': "url('" + 'https://arch.run' + "')",
      'background-size': 'cover'
    }
  }

  ngOnInit() {


  }

  onNoClick(): void {
  //  this.dialogRef.close();
  }

}
