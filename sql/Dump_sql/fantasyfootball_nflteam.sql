-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: fantasyfootball
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `nflteam`
--

DROP TABLE IF EXISTS `nflteam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `nflteam` (
  `nflID` int(11) NOT NULL AUTO_INCREMENT,
  `nflName` varchar(50) NOT NULL,
  PRIMARY KEY (`nflID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nflteam`
--

LOCK TABLES `nflteam` WRITE;
/*!40000 ALTER TABLE `nflteam` DISABLE KEYS */;
INSERT INTO `nflteam` VALUES (1,'New England Patriots'),(2,'Miami Doplhins'),(3,'New York Jets'),(4,'Buffalo Bills'),(5,'Pittsburh Steelers'),(6,'Cincinnati Bengals'),(7,'Baltimore Ravens'),(8,'Los Angeles Chargers'),(9,'Denver Broncos'),(10,'Oakland Raiders'),(11,'Washington Redskins'),(12,'Philidelphia Eagles'),(13,'Dallas Cowboys'),(14,'New York Giants'),(15,'Chicago Bears'),(16,'Minnesota Vikings'),(17,'Green Bay Packers'),(18,'Detroit Lions'),(19,'New Orleans Saints'),(20,'Atlanta Falcons'),(21,'Tampa Bay Buccaneers'),(22,'Los Angeles Rams'),(23,'Arizona Cardinals'),(24,'San Francisco 49ers'),(25,'Cleveland Browns'),(26,'Tennessee Titans'),(27,'Jacksonville Jaguars'),(28,'Indianapolis Colts'),(29,'Kansas City Chiefs'),(30,'Houston Texans'),(31,'Carolina Panthers'),(32,'Seattle Seahawks');
/*!40000 ALTER TABLE `nflteam` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-20 15:09:01
