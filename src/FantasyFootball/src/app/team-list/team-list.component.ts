import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';



@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})


export class TeamListComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<TeamListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data){}

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
