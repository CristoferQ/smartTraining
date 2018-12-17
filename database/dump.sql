-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: smartTrainingDB
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `idcountry` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `createdCountry` datetime NOT NULL,
  `modifiedCountry` datetime NOT NULL,
  PRIMARY KEY (`idcountry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'CHILE','2018-12-16 23:08:44','2018-12-16 23:08:44'),(2,'EEUU','2018-12-16 23:09:00','2018-12-16 23:09:00');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dataSet`
--

DROP TABLE IF EXISTS `dataSet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dataSet` (
  `iddataSet` int(11) NOT NULL AUTO_INCREMENT,
  `nameDataSet` varchar(45) NOT NULL,
  `createdDataSet` datetime NOT NULL,
  `modifiedDataSet` datetime NOT NULL,
  `classExist` varchar(45) NOT NULL,
  `user` int(11) NOT NULL,
  PRIMARY KEY (`iddataSet`),
  KEY `fk_dataSet_user_idx` (`user`),
  CONSTRAINT `fk_dataSet_user` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataSet`
--

LOCK TABLES `dataSet` WRITE;
/*!40000 ALTER TABLE `dataSet` DISABLE KEYS */;
/*!40000 ALTER TABLE `dataSet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature` (
  `idfeature` int(11) NOT NULL AUTO_INCREMENT,
  `nameFeature` varchar(45) NOT NULL,
  `kind` varchar(45) NOT NULL,
  `dataSet` int(11) NOT NULL,
  PRIMARY KEY (`idfeature`),
  KEY `fk_feature_dataSet1_idx` (`dataSet`),
  CONSTRAINT `fk_feature_dataSet1` FOREIGN KEY (`dataSet`) REFERENCES `dataSet` (`iddataSet`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institution`
--

DROP TABLE IF EXISTS `institution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `institution` (
  `idinstitution` int(11) NOT NULL,
  `nameInstitution` varchar(45) NOT NULL,
  `createdInstitution` datetime NOT NULL,
  `modifiedInstitution` datetime NOT NULL,
  `country` int(11) NOT NULL,
  PRIMARY KEY (`idinstitution`),
  KEY `fk_institution_country_idx` (`country`),
  CONSTRAINT `fk_institution_country` FOREIGN KEY (`country`) REFERENCES `country` (`idcountry`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institution`
--

LOCK TABLES `institution` WRITE;
/*!40000 ALTER TABLE `institution` DISABLE KEYS */;
INSERT INTO `institution` VALUES (1,'UNIVERSIDAD DE CHILE','2018-12-16 23:12:01','2018-12-16 23:12:01',1),(2,'UNIVERSIDAD DE SANTIAGO','2018-12-16 23:12:10','2018-12-16 23:12:10',1),(3,'UNIVERSIDAD DE CONCEPCION','2018-12-16 23:12:21','2018-12-16 23:12:21',1);
/*!40000 ALTER TABLE `institution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job` (
  `idjob` int(11) NOT NULL AUTO_INCREMENT,
  `nameJob` varchar(45) NOT NULL,
  `descriptionJob` varchar(450) NOT NULL,
  `createdJob` datetime NOT NULL,
  `modifiedJob` datetime NOT NULL,
  `user` int(11) NOT NULL,
  `nameDataset` varchar(450) NOT NULL,
  `statusJob` varchar(45) NOT NULL,
  PRIMARY KEY (`idjob`),
  KEY `fk_job_user1_idx` (`user`),
  CONSTRAINT `fk_job_user1` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1541977243 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1541973767,'Testing Job Full','Description Demo','2018-11-11 19:02:47','2018-11-11 19:02:47',1,'dataSet.csv','FINISH'),(1541973898,'Testing Job Full','Description Demo','2018-12-02 00:00:00','2018-11-11 19:04:58',1,'dataSet.csv','CANCELED'),(1541974514,'Testing Job Full','Description Demo','2018-11-11 19:15:14','2018-11-11 19:15:14',1,'dataSet.csv','FINISH'),(1541974595,'Testing Job Full','Description Demo','2018-11-30 00:00:00','2018-11-11 19:16:35',1,'dataSet.csv','FINISH'),(1541974652,'Testing Job Full','Description Demo','2018-11-11 19:17:32','2018-11-11 19:17:32',1,'dataSet.csv','FINISH'),(1541974741,'Testing Job Full','Description Demo','2018-11-11 19:19:01','2018-11-11 19:19:01',1,'dataSet.csv','FINISH'),(1541975498,'Testing Job Full','Description Demo','2018-11-11 19:31:38','2018-11-11 19:31:38',1,'dataSet.csv','FINISH'),(1541976467,'Testing Job Full','Description Demo','2018-11-11 19:47:47','2018-11-11 19:47:47',1,'dataSet.csv','FINISH'),(1541976516,'Testing Job Full','Description Demo','2018-12-02 00:00:00','2018-11-11 19:48:36',1,'dataSet.csv','CANCELED'),(1541976568,'Testing Job Full','Description Demo','2018-11-11 19:49:28','2018-11-11 19:49:28',1,'dataSet.csv','FINISH'),(1541976615,'Testing Job Full','Description Demo','2018-11-11 19:50:15','2018-11-11 19:50:15',1,'dataSet.csv','FINISH'),(1541977242,'Testing Job Full','Testing Module','2018-12-16 23:45:55','2018-12-16 23:57:55',1,'dataSet.csv','START');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobUsedataSet`
--

DROP TABLE IF EXISTS `jobUsedataSet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobUsedataSet` (
  `job` int(11) NOT NULL,
  `dataSet` int(11) NOT NULL,
  PRIMARY KEY (`job`,`dataSet`),
  KEY `fk_job_has_dataSet_dataSet1_idx` (`dataSet`),
  KEY `fk_job_has_dataSet_job1_idx` (`job`),
  CONSTRAINT `fk_job_has_dataSet_dataSet1` FOREIGN KEY (`dataSet`) REFERENCES `dataSet` (`iddataSet`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_job_has_dataSet_job1` FOREIGN KEY (`job`) REFERENCES `job` (`idjob`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobUsedataSet`
--

LOCK TABLES `jobUsedataSet` WRITE;
/*!40000 ALTER TABLE `jobUsedataSet` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobUsedataSet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `nameUser` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `emailUser` varchar(45) NOT NULL,
  `statusUser` varchar(45) NOT NULL,
  `createdUser` datetime NOT NULL,
  `modifiedUser` datetime NOT NULL,
  `institution` int(11) NOT NULL,
  `fullName` varchar(450) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'demoUser','demo','demoUser@gmail.com','WAITING','2018-11-11 12:24:01','2018-12-16 23:32:43',1,'Full Name Demo');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-16 23:59:27
