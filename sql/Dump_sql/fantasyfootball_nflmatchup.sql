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
-- Table structure for table `nflmatchup`
--

DROP TABLE IF EXISTS `nflmatchup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `nflmatchup` (
  `nflMatchupID` bigint(20) NOT NULL AUTO_INCREMENT,
  `team1` int(11) NOT NULL,
  `team1Score` bigint(20) NOT NULL,
  `team2` int(11) NOT NULL,
  `team2Score` bigint(20) NOT NULL,
  `week` bigint(20) NOT NULL,
  PRIMARY KEY (`nflMatchupID`),
  KEY `team1` (`team1`),
  KEY `team2` (`team2`),
  CONSTRAINT `nflmatchup_ibfk_1` FOREIGN KEY (`team1`) REFERENCES `nflteam` (`nflid`),
  CONSTRAINT `nflmatchup_ibfk_2` FOREIGN KEY (`team2`) REFERENCES `nflteam` (`nflid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nflmatchup`
--

LOCK TABLES `nflmatchup` WRITE;
/*!40000 ALTER TABLE `nflmatchup` DISABLE KEYS */;
INSERT INTO `nflmatchup` VALUES (2,1,38,32,41,1),(3,2,42,31,24,1),(4,3,45,30,25,1),(5,4,28,29,51,1),(6,5,12,28,37,1),(7,6,45,27,56,1),(8,7,36,26,10,1),(9,8,47,25,23,1),(10,9,17,24,52,1),(11,10,16,23,39,1),(12,11,28,22,19,1),(13,12,31,21,43,1),(14,13,49,20,27,1),(15,14,0,19,47,1),(16,15,10,18,24,1),(17,16,52,17,61,1);
/*!40000 ALTER TABLE `nflmatchup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-20 15:09:04
