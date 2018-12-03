import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MySQLService {
  private url = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  GetUserID(email: string, password: string){
    let body = {email: email, password: password};
    return this.http.post(this.url + '/login', body);
  }

  GetOwnerInfo(ownerID: string){
    return this.http.get(this.url + '/getinfo/' + ownerID);
  }

  GetOwnerPlayers(fantasyID: string){
    return this.http.get(this.url + '/getplayers/' + fantasyID);
  }

  GetFreeAgents(leagueID: string){
    return this.http.get(this.url + '/freeagents/' + leagueID);
  }
  
  GetNFLMatchups(){
    return this.http.get(this.url + '/getnflmatchups');
  }
  
  GetFantasyMatchups(){
    return this.http.get(this.url + '/getfantasymatchups');
  }

  GetFantasyTeam(ownerID: string, leagueID: string){
    return this.http.get(this.url + '/fantasyinfo/' + ownerID + '/' + leagueID);
  }

  GetFreeAgentsPosition(leagueID: string, position: string){
    let body = {position: position};
    return this.http.post(this.url + '/getposition/' + leagueID, body);
  }

  AddFreeAgent(adding: any, dropping: any, fantasyID: string){
    let body = {adding: adding, dropping: dropping, fantasyID: fantasyID};
    return this.http.post(this.url + '/addfreeagent', body);
  }

  GetPlayersInLeague(leagueID: string, fantasyID: string){
    let body = {leagueID: leagueID, fantasyID: fantasyID};
    return this.http.post(this.url + '/getplayersinleague', body);
  }

  SubmitProposal(adding: any, trading: any){
    let body = {adding: adding, trading: trading};
    return this.http.post(this.url + '/submitproposal', body);
  }

  GetProposals(){
    return this.http.get(this.url + '/getproposals');
  }

  GetProposalIDs(){
    return this.http.get(this.url + '/getproposals/ids');
  }

  Vote(proposalID){
    let body = {proposalID: proposalID};
    return this.http.post(this.url + '/vote', body);
  }

  GetTrades(){
    return this.http.get(this.url + "/gettrades");
  }

  GetTeamScore(fantasyID){
    return this.http.get(this.url + '/getscore/' + fantasyID);
  }
}
