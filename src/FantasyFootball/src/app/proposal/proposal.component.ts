import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MySQLService } from '../mysql.service'; 

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  owner: any;
  players: any;
  adding: any;
  trading: any;
  team: any;
  leagueplayers: any;
  proposals: any;
  trades: any;
  proposalVoting: any;

  constructor(private cookieService: CookieService,
              private sqlService: MySQLService) { }

  ngOnInit() {
    this.FetchOwnerInfo();
    this.team = this.owner[0].fantasyID;
  }

  FetchOwnerInfo(){
    this.sqlService.GetOwnerInfo(this.cookieService.get('ownerID')).subscribe(data => {
      let info: any = data;
      this.owner = info;
      
      this.FetchPlayers(this.owner[0].fantasyID, this.owner[0].fLeagueID);
    });
  }

  SwitchTeam(fantasyID){
    this.team = fantasyID;
    if(this.team == this.owner[0].fantasyID){
      this.FetchPlayers(this.owner[0].fantasyID, this.owner[0].fLeagueID);
      return;
    }
    else {
      this.FetchPlayers(this.owner[1].fantasyID, this.owner[1].fLeagueID);
      return;
    }
  }

  FetchPlayers(fantasyID, leagueID){
    this.sqlService.GetOwnerPlayers(fantasyID).subscribe(data => {
      let info: any = data;
      this.players = info
      
      this.sqlService.GetPlayersInLeague(leagueID, fantasyID).subscribe(data => {
        let info: any = data;
        this.leagueplayers = info;
      });
    });
  }

  Trading(player){
    this.trading = player;
  }

  Aquiring(leagueplayer){
    this.adding = leagueplayer;
  }

  SubmitProposal(){
    if(this.adding == null || this.trading == null){
      alert("Please add players...");
      return;
    }
    this.sqlService.SubmitProposal(this.adding.playerID, this.trading.playerID).subscribe(data => {
      this.adding = null;
      this.trading = null;
      alert("Proposal successfully sent");
    });
  }

  TabChanged(event){
    if(event.index == 0){
      if(this.team == this.owner[0].fantasyID){
        this.FetchPlayers(this.owner[0].fantasyID, this.owner[0].fLeagueID);
      }
      else {
        this.FetchPlayers(this.owner[1].fantasyID, this.owner[1].fLeagueID);
      }
    }
    else {
      this.GetProposals();
      this.GetTrades();
    }
  }

  GetProposals(){
    this.sqlService.GetProposals().subscribe(data =>{
      let info: any = data;
      this.proposals = info;
      this.sqlService.GetProposalIDs().subscribe(data => {
        let info: any = data;
        this.proposalVoting = info;
      })
    });
  }

  Vote(proposalID){
    this.sqlService.Vote(proposalID).subscribe(data => {
      let info: any = data;
      if(info.message == "Success"){
        alert("Vote registered!");
        this.GetProposals();
      }
      else {
        alert("Something went wrong");
      }
    });
  }

  GetTrades(){
    this.sqlService.GetTrades().subscribe(data => {
      let info: any = data;
      this.trades = info;
    })
  }
}
