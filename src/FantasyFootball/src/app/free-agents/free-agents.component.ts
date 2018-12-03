import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MySQLService } from '../mysql.service';
import { Router } from '@angular/router';

export interface Position {
  val: string;
  view: string;
}

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrls: ['./free-agents.component.css']
})
export class FreeAgentsComponent implements OnInit {
  owner: any;
  players: any;
  freeagents: any;
  dropping: any;
  adding: any;
  clicked: boolean;
  index: any;

  positions : Position[] = [
    {val: 'None', view: 'None'},
    {val: 'QB', view: 'Quarterback'},
    {val: 'RB', view: 'Runningback'},
    {val: 'WR', view: 'Wide Receiver'},
    {val: 'TE', view: 'Tightend'},
    {val: 'DL', view: 'Defensive Lineman'},
    {val: 'LB', view: 'Left Back'},
    {val: 'DB', view: 'Defensive Back'},
    {val: 'K', view: 'Kicker'},
    {val: 'P', view: 'Punter'},
    {val: 'LT', view: 'Left Tackle'}
  ];

  constructor(private cookieService: CookieService,
              private sqlService: MySQLService) { }

  ngOnInit() {
    this.FetchOwnerInfo();
    this.index = 0;
  }

  FetchOwnerInfo(){
    this.sqlService.GetOwnerInfo(this.cookieService.get('ownerID')).subscribe(data => {
      let info: any = data;
      this.owner = info;
      return;
    });
  }

  FetchPlayers(fantasyID, leagueID){
    this.sqlService.GetOwnerPlayers(fantasyID).subscribe(data => {
      let info: any = data;
      this.players = info
      
      this.sqlService.GetFreeAgents(leagueID).subscribe(data => {
        let info: any = data;
        this.freeagents = info;
        return;
      });
    });
  }

  DropPlayer(player: any){
    this.dropping = player;
  }

  AddPlayer(player: any){
    this.adding = player;
  }

  AddDrop(){
    if(this.adding == null || this.dropping == null){
      alert("Please select players to add and drop");
      return;
    }
    else if(this.index == 0){
      this.sqlService.AddFreeAgent(this.adding.playerID, this.dropping.playerID, this.owner[0].fantasyID).subscribe(data => {
        let info: any = data;
        if(info.message != "Success"){
          alert("Something went wrong ...");
          return;
        }
        this.adding = null;
        this.dropping = null;
        alert("Success!");

        this.FetchPlayers(this.owner[0].fantasyID, this.owner[0].fLeagueID);
      });
    }
    else {
      this.sqlService.AddFreeAgent(this.adding.playerID, this.dropping.playerID, this.owner[1].fantasyID).subscribe(data => {
        let info: any = data;
        if(info.message != "Success"){
          alert("Something went wrong ...");
          return;
        }
        this.adding = null;
        this.dropping = null;
        alert("Success!");

        this.FetchPlayers(this.owner[1].fantasyID, this.owner[1].fLeagueID);
      });
    }
  }

  Filter(position){
    if(position == 'None' && this.index == 0){
      this.sqlService.GetFreeAgents(this.owner[0].fLeagueID).subscribe(data => {
        let info: any = data;
        this.freeagents = info;
        return;
      });
    }
    else if(position == 'None' && this.index == 1){
      this.sqlService.GetFreeAgents(this.owner[1].fLeagueID).subscribe(data => {
        let info: any = data;
        this.freeagents = info;
        return;
      });
    }
    else if(this.index == 0){
      this.sqlService.GetFreeAgentsPosition(this.owner[0].fLeagueID, position).subscribe(data => {
        let info: any = data;
        console.log(info);
        this.freeagents = info;
        return;
      });
    }
    else if (this.index == 1){
      this.sqlService.GetFreeAgentsPosition(this.owner[1].fLeagueID, position).subscribe(data => {
        let info: any = data;
        this.freeagents = info;
        return;
      });
    }
  }

  GetTeam(event){
    this.adding = null;
    this.dropping = null;
    this.players = null;
    this.freeagents = null;

    if(event.index == 0){
      this.FetchPlayers(this.owner[0].fantasyID, this.owner[0].fLeagueID);
      this.index = 0;
      return;
    } else {
      this.FetchPlayers(this.owner[1].fantasyID, this.owner[1].fLeagueID);
      this.index = 1;
      return;
    }
  }
}
