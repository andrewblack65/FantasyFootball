import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MySQLService } from '../mysql.service';

@Component({
  selector: 'app-fantasy-page',
  templateUrl: './fantasy-page.component.html',
  styleUrls: ['./fantasy-page.component.css']
})
export class FantasyPageComponent implements OnInit {
  owner: any;
  players: any;
  score: any;

  constructor(private cookieService: CookieService,
              private sqlService: MySQLService) { }

  ngOnInit() {
    this.FetchOwnerInfo();
  }

  FetchOwnerInfo(){
    this.sqlService.GetOwnerInfo(this.cookieService.get('ownerID')).subscribe(data => {
      let info: any = data;
      this.owner = info;
    });
  }

  FetchPlayers(ownerID, leagueID){
    this.sqlService.GetFantasyTeam(ownerID, leagueID).subscribe(data => {
      let info: any = data;
      this.players = info
    });
  }

  TabChange(event){
    if(event.index == 0){
      this.FetchPlayers(this.owner[0].ownerID, this.owner[0].fLeagueID);
      this.GetTotalScore(this.owner[0].fantasyID);
    }
    else{
      this.FetchPlayers(this.owner[1].ownerID, this.owner[1].fLeagueID);
      this.GetTotalScore(this.owner[1].fantasyID);
    }
  }

  GetTotalScore(fantasyID){
    this.sqlService.GetTeamScore(fantasyID).subscribe(data => {
      let info: any = data;
      this.score = info[0];
    })
  }

  displayedColumns: string[] = ['name', 'position', 'nflName', 'weekNum', 'score', 'projection' , 'nflScore'];
  dataSource = this.players;

}