import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MySQLService } from '../mysql.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  title = 'FantasyFootball';

  constructor(private cookieService: CookieService,
              private router: Router,
              private sqlService: MySQLService ) { }

  ngOnInit() {
  }

  signIn(email: string, password: string){
    console.log(email, password);
    this.sqlService.GetUserID(email, password).subscribe(data => {
      let info: any = data;
      this.cookieService.set('ownerID', info[0].ownerID);
      this.router.navigate(['/mainpage']);
    });
  }
}
