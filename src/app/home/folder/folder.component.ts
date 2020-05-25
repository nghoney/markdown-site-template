import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() dir: string;
  @Input() sidenav: MatSidenav;
  @Output() onDeleted = new EventEmitter<boolean>();

  files: any[];
  isShow = true;

  
  constructor() { }

  ngOnInit(): void {
  }

}
