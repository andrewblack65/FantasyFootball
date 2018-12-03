import { Component, OnInit } from '@angular/core';
import {MySQLService} from '../mysql.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {TeamListComponent} from '../team-list/team-list.component';
import {MatDialog} from '@angular/material/dialog';

export interface NFLMatchup{
  week: number,
  team1: string,
  score1: number,
  team2: string,
  score2: number

}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  private NFLMatchups;
  displayedColumns: string[] = ['Week', 'Team1', 'Score1', 'Team2', 'Score2'];
  private owner;
  private fantasyPlayers;
  private myMatchups;
  private leagueID;
  private score;
  private scoreMap;
  dialogResult;
  constructor(private sqlService: MySQLService,
    private router: Router,
    public dialog: MatDialog,
    private cookieService: CookieService
    ) { }
   

  ngOnInit() {
    this.getNFLMatchups();

    this.FetchOwnerInfo();
    this.getFantasyMatchups();
    this.leagueID=29;
    this.score=[];
    this.scoreMap= new Map();
    this.fantasyPlayers=new Map();
  }
  FetchOwnerInfo(){
    this.sqlService.GetOwnerInfo(this.cookieService.get('ownerID')).subscribe(data => {
      let info: any = data;
      this.owner = info;    
    });
  }
  getNFLMatchups(){
    this.sqlService.GetNFLMatchups().subscribe(data => {
      let info: any = data;
      this.NFLMatchups= info;
    });
  }
  FetchPlayers(fantasyID, leagueID){
    this.sqlService.GetOwnerPlayers(fantasyID).subscribe(data => {
      let info: any = data;
      
      this.fantasyPlayers.set(fantasyID, info);
    });
  }
  
  getFantasyMatchups(){
    this.sqlService.GetFantasyMatchups().subscribe(data => {
      let info: any = data;
      this.myMatchups= info;
      for(var i =0; i<info.length; i++){
        this.GetTotalScore(info[i].FantasyID1);
        this.GetTotalScore(info[i].FantasyID2);
        this.FetchPlayers(info[i].FantasyID1,this.leagueID);
        this.FetchPlayers(info[i].FantasyID2, this.leagueID);
      }
      // this.scoreMap= new Map(this.score);
    });
  }
  GetTotalScore(fantasyID){
    
    this.sqlService.GetTeamScore(fantasyID).subscribe(data => {
      let info: any = data;
      
      this.scoreMap.set(fantasyID, info[0]);
      
    })
    
  }
  openDialog(index) {
    // this.modalIndex=index;

    // this.modalItem=item;
    let dialogRef = this.dialog.open(TeamListComponent, {
      width: '600px',
      data: {playerList : this.fantasyPlayers.get(index)}
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
      // itemObs.unsubscribe();
    });
  

}


}
