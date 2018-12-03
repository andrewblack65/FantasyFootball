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
-- Table structure for table `fantasyleague`
--

DROP TABLE IF EXISTS `fantasyleague`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `fantasyleague` (
  `fLeagueID` bigint(20) NOT NULL AUTO_INCREMENT,
  `creationDate` date NOT NULL,
  `endDate` date NOT NULL,
  `leagueName` varchar(50) NOT NULL,
  PRIMARY KEY (`fLeagueID`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fantasyleague`
--

LOCK TABLES `fantasyleague` WRITE;
/*!40000 ALTER TABLE `fantasyleague` DISABLE KEYS */;
INSERT INTO `fantasyleague` VALUES (28,'2003-06-06','1971-07-11','Scotlanders'),(29,'2010-05-29','2004-03-03','inviolate'),(30,'1996-04-25','2005-01-05','spinelessly'),(31,'1980-05-10','2013-02-25','waulk'),(32,'1987-05-07','2017-11-21','baldie'),(33,'2012-04-22','2011-10-16','dogfood'),(34,'1984-04-24','1983-08-23','falconer'),(35,'1981-10-07','2014-12-19','bedizened'),(36,'1984-12-26','1982-10-01','cluelessly'),(37,'1988-08-30','1985-12-04','Rastafari'),(38,'1982-10-19','1983-08-25','cockatiels'),(39,'1972-03-13','1993-06-21','mysticism'),(40,'1996-08-05','1989-09-21','pine-barren'),(41,'1985-06-19','1990-02-11','consacre'),(42,'1995-08-09','1981-11-30','Maginot Line'),(43,'1981-06-19','1975-03-28','castanea'),(44,'1983-10-21','1991-09-24','vetturino'),(45,'1988-07-01','2001-02-13','engrosser'),(46,'2016-12-12','1977-02-22','clinicopathological'),(47,'1997-12-10','2009-07-05','foot-dragging'),(48,'1974-12-26','1993-10-08','leaflets'),(49,'2017-04-10','2002-12-23','stressed'),(50,'1982-04-19','1984-08-12','satisfactorily'),(51,'2005-12-13','1998-06-02','disadvantages'),(52,'1972-12-15','1988-01-12','stoneless'),(53,'2016-09-11','2012-03-18','Edward VI'),(54,'1975-11-20','1976-07-17','appreciates'),(55,'1995-01-12','1998-06-18','vireos'),(56,'1971-12-24','2012-10-17','pelletizer'),(57,'2007-09-30','1984-09-02','sandpapers'),(58,'2008-02-13','1975-02-26','concessionaires'),(59,'2010-01-06','1980-05-17','hackneyed'),(60,'1994-07-01','1970-04-10','premed'),(61,'1997-12-29','1986-01-24','hot-head'),(62,'1974-09-23','1991-05-13','caponata'),(63,'2000-05-06','1979-12-25','deified'),(64,'2005-12-15','2000-03-17','unlearn'),(65,'1973-08-12','2013-10-08','billon'),(66,'2007-02-04','1983-02-06','desaturations'),(67,'1979-06-08','2013-07-03','fridges');
/*!40000 ALTER TABLE `fantasyleague` ENABLE KEYS */;
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
