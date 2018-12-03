var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var cors       = require('cors');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fantasyfootball',
    port:3306,
    multipleStatements: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var mongoose = require('mongoose');

var router = express.Router();
app.use(cors());

conn.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Connected to DB");
});

/*
 * the following route makes use of a specific select to identify information about the owner loging in
 */

router.route('/login')
    .post(function(req, res){
        var query = "select ownerID from fantasyowner where email='" + req.body.email + "' and pass='" + req.body.password +"'";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 *  once the owner has logged in, this route gets the two teams that belong to that owner for use 
 */

router.route('/getinfo/:id')
    .get(function(req, res){
        var query = "select * from teamlist join fantasyteam on teamlist.fantasyID=fantasyteam.fantasyID where teamlist.ownerID='" + req.params.id + "'";
        conn.query(query, function (err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 * this route returns the list of players on one of the owner's teams, based of the team's ID
 */

router.route('/getplayers/:id')
    .get(function(req, res){
        var query = "select * from playerlist natural join player natural join nflteam natural join weeklyscore where playerlist.fantasyID=" + req.params.id + " and weeklyscore.weekNum=1;";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 *  this route is utilized to identify all the potential free agents in a given fantasy league who are not owned by another owner
 */

router.route('/freeagents/:id')
    .get(function(req, res){
        var query = "select * from player natural join weeklyscore where weeklyscore.weekNum=1 and player.playerID not in (select player.playerID from playerlist natural join player natural join fantasyteam where fantasyteam.fLeagueID =" + req.params.id + ");";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 *  this route handles the filter by position function for free agents
 */

router.route('/getposition/:id')
    .post(function(req, res){
        var query = "select * from player natural join weeklyscore where weeklyscore.weekNum=1 and player.pos='" + req.body.position + "' and player.playerID not in (select player.playerID from playerlist natural join player natural join fantasyteam where fantasyteam.fLeagueID =" + req.params.id + ");";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 *  this route handles deleting old playerlist objects and creating new ones when an owner adds a free agent
 */

router.route('/addfreeagent')
    .post(function(req, res){
        var query = "delete from playerlist where playerID=" + req.body.dropping + " and fantasyID=" + req.body.fantasyID + ";";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }
        });
        query = "insert into playerlist (fantasyID, playerID) values (" + req.body.fantasyID + ", " + req.body.adding +");";
        conn.query(query, function(err, result, fields){
            if(err){               
                res.send(err);
                return;
            }

            res.send({message: "Success"});
            return;
        });
    });

/*
 *  this route gets all the players that are in the owners league, and not on their team, for the purpose of trading the players
 */

router.route('/getplayersinleague')
    .post(function(req, res){
        var query = "select player.playerID, player.name, player.pos, weeklyscore.score from player natural join playerlist natural join fantasyteam natural join weeklyscore where fantasyteam.fLeagueID = " + req.body.leagueID + " and weeklyscore.weekNum = 1 and player.playerID not in (select playerlist.playerID from playerlist where fantasyID = " + req.body.fantasyID + ");";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 * this route inserts a new proposal into the proposal table, via creating a trade
 */

router.route('/submitproposal')
    .post(function(req, res){
        var proposalID;
        var query = "insert into proposal (proposalDate, approval) values (CURDATE(), " + 0 + ");";
        conn.query(query, function (err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            proposalID = result.insertId;
            query = "insert into playersinvolved (proposalID, playerID) values (" + proposalID + ", " + req.body.adding + ");";
            conn.query(query, function(err, result, fields){
                if(err){
                    console.log(err);
                    res.send(err);
                    return;
                }
            });
            query = "insert into playersinvolved (proposalID, playerID) values (" + proposalID + ", " + req.body.trading + ");";
            conn.query(query, function (err, result, fields){
                if(err){
                    console.log(err);
                    res.send(err);
                    return;
                }

                res.send({message: "Success"});
                return;
            });
        });
    });

/*
 *  this query gets all current proposals
 */

router.route('/getproposals')
    .get(function(req,res){
        var query = "select * from proposal natural join playersinvolved natural join player where proposalID not in (select proposalID from trade);";
        conn.query(query, function (err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 * this route returns the ID's of all eligable proposals for the purpose of voting
 */

router.route('/getproposals/ids')
    .get(function(req, res) {
        var query = "select proposalID from proposal where proposalID not in (select proposalID from trade);";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
            return;
        });
    });

/*
 *  this route handles the voting aspect of the system, the vote table itself was removed to reduce complexity and then voting is updated accordingly within the proposal 
 */

router.route('/vote')
    .post(function(req, res){
        var query = "update proposal set approval = approval + 1 where proposalID =" + req.body.proposalID +";";
        conn.query(query, function(err, results, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send({message: "Success"});
            return;
        });
    });

/*
 * this route gets all of the past completed trades
 */

router.route('/gettrades')
    .get(function(req, res){
        var query = "select * from trade natural join proposal natural join playersinvolved natural join player;";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
        });
    });

/*
 * this route handles populating the complex table of the user's teams, utilizing projections and some fancy rand function
 */

router.route('/fantasyinfo/:ownerID/:leagueID')
    .get(function(req, res){
        var query = "select p.name, p.pos, n.nflName, w.score, w.weekNum, w.score*rand(1) as projection, case when m.team1 = p.nflID then m.team1Score when m.team2 = p.nflID then m.team2Score end as nflScore from fantasyteam f, player p, playerlist l, nflteam n, weeklyscore w, nflmatchup m where f.fantasyID = l.fantasyID and l.playerID = p.playerID and f.ownerID=" + req.params.ownerID + " and f.fLeagueID="+ req.params.leagueID +" and p.nflID = n.nflID and p.playerID = w.playerID and w.weekNum=1 and (p.nflID = m.team1 or p.nflID = m.team2) and m.week=1";

        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
        });
    });

/*
 * this route returns all of the current nfl matchups for the week
 */

router.route('/getnflmatchups')
    .get(function(req, res){
        var query = "SELECT week as Week, fhalf.nflName AS Team1, nflmatchup.team1Score AS Score1, shalf.nflName AS Team2, nflmatchup.team2score AS Score2 FROM nflmatchup INNER JOIN (select * from nflteam limit 16) as fhalf ON fhalf.nflID = nflmatchup.team1 INNER JOIN (select * from nflteam order by nflID DESC limit 16) as shalf on shalf.nflID = nflmatchup.team2;"
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
        });
    });

/*
 * this route handles getting all of the fantasy matchups for the owners specific team for the week
 */

router.route('/getfantasymatchups')
    .get(function(req, res){
        var query = "SELECT week as Week, fhalf.ownerID AS OwnerID1, fhalf.fantasyID AS FantasyID1 , fhalf.fanName AS Team1, fantasymatchup.team1Score AS Score1, shalf.ownerID AS OwnerID2, shalf.fantasyID AS FantasyID2, shalf.fanName AS Team2, fantasymatchup.team2score AS Score2 FROM fantasymatchup INNER JOIN (select * from fantasyteam where fLeagueID=29 limit 10) as fhalf ON fhalf.fantasyID = fantasymatchup.team1 INNER Join (select * from fantasyteam where fLeagueID=29 order by fantasyID DESC limit 10) as shalf on shalf.fantasyID = fantasymatchup.team2;"
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
        });
    });

/*
 * this route gets the total score of each fantasy team by summing the weeklyscores of the individual players
 */

router.route('/getscore/:id')
    .get(function(req, res){
        var query = "select sum(weeklyscore.score) as score from weeklyscore where weeklyscore.weekNum=1 && weeklyscore.playerID in (select playerlist.playerID from playerlist inner join fantasyteam on playerlist.fantasyID = fantasyteam.fantasyID where fantasyteam.fantasyID = " + req.params.id + ") ;";
        conn.query(query, function(err, result, fields){
            if(err){
                res.send(err);
                return;
            }

            res.send(result);
        });
    });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);