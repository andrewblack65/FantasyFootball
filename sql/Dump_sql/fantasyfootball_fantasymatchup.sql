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
-- Table structure for table `fantasymatchup`
--

DROP TABLE IF EXISTS `fantasymatchup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `fantasymatchup` (
  `fantasyMatchupID` bigint(20) NOT NULL AUTO_INCREMENT,
  `team1` bigint(20) NOT NULL,
  `team1Score` bigint(20) NOT NULL,
  `team2` bigint(20) NOT NULL,
  `team2Score` bigint(20) NOT NULL,
  `week` bigint(20) NOT NULL,
  PRIMARY KEY (`fantasyMatchupID`),
  KEY `team1` (`team1`),
  KEY `team2` (`team2`),
  CONSTRAINT `fantasymatchup_ibfk_1` FOREIGN KEY (`team1`) REFERENCES `fantasyteam` (`fantasyid`),
  CONSTRAINT `fantasymatchup_ibfk_2` FOREIGN KEY (`team2`) REFERENCES `fantasyteam` (`fantasyid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fantasymatchup`
--

LOCK TABLES `fantasymatchup` WRITE;
/*!40000 ALTER TABLE `fantasymatchup` DISABLE KEYS */;
INSERT INTO `fantasymatchup` VALUES (1,2,31,921,42,1),(2,46,38,818,1,1),(3,69,9,790,11,1),(4,112,28,757,24,1),(5,140,23,664,2,1),(6,204,30,591,7,1),(7,231,49,573,42,1),(8,383,48,553,45,1),(9,459,36,550,5,1),(10,482,32,492,52,1);
/*!40000 ALTER TABLE `fantasymatchup` ENABLE KEYS */;
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
