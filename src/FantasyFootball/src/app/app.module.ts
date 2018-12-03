import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { CookieService } from 'ngx-cookie-service';
import { MySQLService } from './mysql.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDialogModule
} from '@angular/material';
import { FreeAgentsComponent } from './free-agents/free-agents.component';
import { FantasyPageComponent } from './fantasy-page/fantasy-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProposalComponent } from './proposal/proposal.component';
import { FormsModule } from '@angular/forms';
import { TeamListComponent } from './team-list/team-list.component';

const appRoutes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'freeagents', component: FreeAgentsComponent},
  { path: 'mainpage', component: MainpageComponent},
  { path: 'fantasyinfo', component: FantasyPageComponent},
  { path: 'proposal', component: ProposalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    MainpageComponent,
    FreeAgentsComponent,
    FantasyPageComponent,
    ProposalComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    NgbModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  entryComponents:[TeamListComponent],
  providers: [CookieService, 
              MySQLService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
