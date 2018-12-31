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
  `user` int(11) NOT NULL,
  `tipoDataSet` varchar(45) NOT NULL,
  `job` int(11) NOT NULL,
  PRIMARY KEY (`iddataSet`),
  KEY `fk_dataSet_user_idx` (`user`),
  CONSTRAINT `fk_dataSet_user` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1546258417 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataSet`
--

LOCK TABLES `dataSet` WRITE;
/*!40000 ALTER TABLE `dataSet` DISABLE KEYS */;
INSERT INTO `dataSet` VALUES (1,'dataSetNormaliced.csv','2018-12-29 08:52:29','2018-12-29 08:52:29',1,'CLUSTERING',1),(2,'dataSetNormaliced.csv','2018-12-29 09:57:17','2018-12-29 09:57:17',1,'PREDICTION',2),(1546179446,'dataSetClustering.csv','2018-12-30 11:17:27','2018-12-30 11:17:27',1,'CLUSTERING',1546179446),(1546179600,'dataSetNormaliced.csv','2018-12-30 11:20:00','2018-12-30 11:20:00',1,'CLUSTERING',1546179600),(1546180320,'dataSetNormaliced.csv','2018-12-30 11:32:00','2018-12-30 11:32:00',1,'CLUSTERING',1546180320),(1546180558,'dataSetNormaliced.csv','2018-12-30 11:35:58','2018-12-30 11:35:58',1,'CLUSTERING',1546180558),(1546215061,'dataFull.csv','2018-12-30 21:11:01','2018-12-30 21:11:01',1,'CLASSIFICATION',1546215061),(1546215277,'dataFull.csv','2018-12-30 21:14:37','2018-12-30 21:14:37',1,'CLASSIFICATION',1546215277),(1546215741,'dataFull.csv','2018-12-30 21:22:21','2018-12-30 21:22:21',1,'CLASSIFICATION',1546215741),(1546217532,'dataFull.csv','2018-12-30 21:52:13','2018-12-30 21:52:13',1,'CLASSIFICATION',1546217532),(1546217696,'dataFull.csv','2018-12-30 21:54:56','2018-12-30 21:54:56',1,'CLASSIFICATION',1546217696),(1546217951,'dataFull.csv','2018-12-30 21:59:12','2018-12-30 21:59:12',1,'CLASSIFICATION',1546217951),(1546218124,'dataFull.csv','2018-12-30 22:02:04','2018-12-30 22:02:04',1,'CLASSIFICATION',1546218124),(1546218236,'dataFull.csv','2018-12-30 22:03:56','2018-12-30 22:03:56',1,'CLASSIFICATION',1546218236),(1546218391,'dataFull.csv','2018-12-30 22:06:31','2018-12-30 22:06:31',1,'CLASSIFICATION',1546218391),(1546218571,'dataFull.csv','2018-12-30 22:09:32','2018-12-30 22:09:32',1,'CLASSIFICATION',1546218571),(1546219849,'dataFull.csv','2018-12-30 22:30:49','2018-12-30 22:30:49',1,'CLASSIFICATION',1546219849),(1546219961,'dataFull.csv','2018-12-30 22:32:41','2018-12-30 22:32:41',1,'CLASSIFICATION',1546219961),(1546220041,'dataFull.csv','2018-12-30 22:34:02','2018-12-30 22:34:02',1,'CLASSIFICATION',1546220041),(1546225989,'dataFull.csv','2018-12-31 00:13:09','2018-12-31 00:13:09',1,'CLASSIFICATION',1546225989),(1546226379,'dataFull.csv','2018-12-31 00:19:39','2018-12-31 00:19:39',1,'CLASSIFICATION',1546226379),(1546226454,'dataFull.csv','2018-12-31 00:20:55','2018-12-31 00:20:55',1,'CLASSIFICATION',1546226454),(1546226553,'dataFull.csv','2018-12-31 00:22:33','2018-12-31 00:22:33',1,'CLASSIFICATION',1546226553),(1546226826,'dataFull.csv','2018-12-31 00:27:07','2018-12-31 00:27:07',1,'CLASSIFICATION',1546226826),(1546227438,'dataFull.csv','2018-12-31 00:37:20','2018-12-31 00:37:20',1,'CLASSIFICATION',1546227438),(1546227588,'dataFull.csv','2018-12-31 00:39:48','2018-12-31 00:39:48',1,'CLASSIFICATION',1546227588),(1546227786,'dataFull.csv','2018-12-31 00:43:07','2018-12-31 00:43:07',1,'CLASSIFICATION',1546227786),(1546228105,'dataFull.csv','2018-12-31 00:48:25','2018-12-31 00:48:25',1,'CLASSIFICATION',1546228105),(1546228788,'dataFull.csv','2018-12-31 00:59:48','2018-12-31 00:59:48',1,'CLASSIFICATION',1546228788),(1546229034,'dataFull.csv','2018-12-31 01:03:55','2018-12-31 01:03:55',1,'CLASSIFICATION',1546229034),(1546229122,'dataFull.csv','2018-12-31 01:05:22','2018-12-31 01:05:22',1,'CLASSIFICATION',1546229122),(1546229147,'dataFull.csv','2018-12-31 01:05:47','2018-12-31 01:05:47',1,'CLASSIFICATION',1546229147),(1546254158,'dataFull.csv','2018-12-31 08:02:38','2018-12-31 08:02:38',1,'CLASSIFICATION',1546254158),(1546254775,'dataFull.csv','2018-12-31 08:12:55','2018-12-31 08:12:55',1,'CLASSIFICATION',1546254775),(1546256452,'dataFull.csv','2018-12-31 08:40:52','2018-12-31 08:40:52',1,'CLASSIFICATION',1546256452),(1546257173,'dataFull.csv','2018-12-31 08:52:53','2018-12-31 08:52:53',1,'CLASSIFICATION',1546257173),(1546257431,'dataFull.csv','2018-12-31 08:57:11','2018-12-31 08:57:11',1,'CLASSIFICATION',1546257431),(1546257785,'dataFull.csv','2018-12-31 09:03:05','2018-12-31 09:03:05',1,'CLASSIFICATION',1546257785),(1546258416,'dataFull.csv','2018-12-31 09:13:36','2018-12-31 09:13:36',1,'CLASSIFICATION',1546258416);
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
  `tipo_job` varchar(45) NOT NULL,
  PRIMARY KEY (`idjob`),
  KEY `fk_job_user1_idx` (`user`),
  CONSTRAINT `fk_job_user1` FOREIGN KEY (`user`) REFERENCES `user` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1546258417 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,'Testing','description','2018-12-28 23:19:19','2018-12-28 23:19:19',1,'dataSetNormaliced.csv','FINISH','CLASSIFICATION'),(2,'Testing Prediction Spatial','Testing','2018-12-29 09:56:30','2018-12-30 10:12:39',1,'dataSetNormaliced.csv','FINISH','PREDICTION'),(1541973767,'Testing Job Full','Description Demo','2018-11-11 19:02:47','2018-11-11 19:02:47',1,'dataSet.csv','FINISH','CLUSTERING'),(1541973898,'Testing Job Full','Description Demo','2018-12-02 00:00:00','2018-11-11 19:04:58',1,'dataSet.csv','CANCELED','CLUSTERING'),(1541974514,'Testing Job Full','Description Demo','2018-11-11 19:15:14','2018-11-11 19:15:14',1,'dataSet.csv','FINISH','CLUSTERING'),(1541974595,'Testing Job Full','Description Demo','2018-11-30 00:00:00','2018-11-11 19:16:35',1,'dataSet.csv','FINISH','CLUSTERING'),(1541974652,'Testing Job Full','Description Demo','2018-11-11 19:17:32','2018-11-11 19:17:32',1,'dataSet.csv','FINISH','CLUSTERING'),(1541974741,'Testing Job Full','Description Demo','2018-11-11 19:19:01','2018-11-11 19:19:01',1,'dataSet.csv','FINISH','CLUSTERING'),(1541975498,'Testing Job Full','Description Demo','2018-11-11 19:31:38','2018-11-11 19:31:38',1,'dataSet.csv','FINISH','CLUSTERING'),(1541976467,'Testing Job Full','Description Demo','2018-11-11 19:47:47','2018-11-11 19:47:47',1,'dataSet.csv','FINISH','CLUSTERING'),(1541976516,'Testing Job Full','Description Demo','2018-12-02 00:00:00','2018-11-11 19:48:36',1,'dataSet.csv','CANCELED','CLUSTERING'),(1541976568,'Testing Job Full','Description Demo','2018-11-11 19:49:28','2018-11-11 19:49:28',1,'dataSet.csv','FINISH','CLUSTERING'),(1541976615,'Testing Job Full','Description Demo','2018-11-11 19:50:15','2018-11-11 19:50:15',1,'dataSet.csv','FINISH','CLUSTERING'),(1541977242,'Testing Job Full','Testing Module','2018-12-16 23:45:55','2018-12-16 23:57:55',1,'dataSet.csv','START','CLUSTERING'),(1545312701,'Testing Job Full','Testing','2018-12-20 10:31:41','2018-12-20 10:31:41',1,'dataSetClustering.csv','START','CLUSTERING'),(1546179446,'Testing Job Clustering','Evaluate functionality','2018-12-30 11:17:26','2018-12-30 11:17:26',1,'dataSetClustering.csv','START','CLUSTERING'),(1546179600,'Testing Job Clustering','Evaluate functionality','2018-12-30 11:20:00','2018-12-30 11:20:02',1,'dataSetNormaliced.csv','FINISH','CLUSTERING'),(1546180320,'Testing ','Testing','2018-12-30 11:32:00','2018-12-30 11:32:02',1,'dataSetNormaliced.csv','FINISH','CLUSTERING'),(1546180558,'123ewq','123ewq','2018-12-30 11:35:58','2018-12-30 11:35:59',1,'dataSetNormaliced.csv','FINISH','CLUSTERING'),(1546215061,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:11:01','2018-12-30 21:11:01',1,'dataFull.csv','START','CLASSIFICATION'),(1546215277,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:14:37','2018-12-30 21:14:37',1,'dataFull.csv','START','CLASSIFICATION'),(1546215741,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:22:21','2018-12-30 22:00:34',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546217532,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:52:12','2018-12-30 21:52:15',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546217696,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:54:56','2018-12-30 21:54:58',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546217951,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 21:59:11','2018-12-30 21:59:14',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546218124,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:02:04','2018-12-30 22:02:06',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546218236,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:03:56','2018-12-30 22:03:56',1,'dataFull.csv','START','CLASSIFICATION'),(1546218391,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:06:31','2018-12-30 22:06:31',1,'dataFull.csv','START','CLASSIFICATION'),(1546218571,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:09:32','2018-12-30 22:09:35',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546219849,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:30:49','2018-12-30 22:30:53',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546219961,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:32:41','2018-12-30 22:32:45',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546220041,'Testing Adaboost','Testing adaboost algorithm','2018-12-30 22:34:01','2018-12-30 22:34:05',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546225989,'Testing Adaboost','Testing adaboost algorithm','2018-12-31 00:13:09','2018-12-31 00:13:20',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546226379,'Testing Adaboost','Testing adaboost algorithm','2018-12-31 00:19:39','2018-12-31 00:19:40',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546226454,'Testing Adaboost','Testing adaboost algorithm','2018-12-31 00:20:54','2018-12-31 00:20:54',1,'dataFull.csv','START','CLASSIFICATION'),(1546226553,'Testing Adaboost','Testing adaboost algorithm','2018-12-31 00:22:33','2018-12-31 00:22:36',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546226826,'Testing Adaboost','Testing adaboost algorithm','2018-12-31 00:27:06','2018-12-31 00:27:06',1,'dataFull.csv','START','CLASSIFICATION'),(1546227438,'Testing Bernoulli','Testing bernoulli algorithm','2018-12-31 00:37:18','2018-12-31 00:37:22',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546227588,'Testing Bernoulli','Testing bernoulli algorithm','2018-12-31 00:39:48','2018-12-31 00:39:50',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546227786,'Testing Gaussian','Testing gaussian algorithm','2018-12-31 00:43:07','2018-12-31 00:43:08',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546228105,'Testing Bagging','Testing Bagging algorithm','2018-12-31 00:48:25','2018-12-31 00:49:00',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546228788,'Testing Decision Tree','Testing Decision Tree algorithm','2018-12-31 00:59:48','2018-12-31 00:59:53',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546229034,'Testing Decision Tree','Testing Decision Tree algorithm','2018-12-31 01:03:55','2018-12-31 01:03:57',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546229122,'Testing Decision Tree','Testing Decision Tree algorithm','2018-12-31 01:05:22','2018-12-31 01:05:24',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546229147,'Testing Decision Tree','Testing Decision Tree algorithm','2018-12-31 01:05:47','2018-12-31 01:05:49',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546254158,'Testing Gradient','Testing gradient algorithm','2018-12-31 08:02:38','2018-12-31 08:02:58',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546254775,'Testing KNN','Testing knn algorithm','2018-12-31 08:12:55','2018-12-31 08:13:11',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546256452,'Testing MLP','Testing mlp algorithm','2018-12-31 08:40:52','2018-12-31 08:40:54',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546257173,'Testing NuSVC','Testing NuSVC algorithm','2018-12-31 08:52:53','2018-12-31 08:52:56',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546257431,'Testing SVC','Testing svc algorithm','2018-12-31 08:57:11','2018-12-31 08:57:11',1,'dataFull.csv','START','CLASSIFICATION'),(1546257785,'Testing SVC','Testing svc algorithm','2018-12-31 09:03:05','2018-12-31 09:03:10',1,'dataFull.csv','FINISH','CLASSIFICATION'),(1546258416,'Testing Random Forest','Testing random forest algorithm','2018-12-31 09:13:36','2018-12-31 09:14:04',1,'dataFull.csv','FINISH','CLASSIFICATION');
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

-- Dump completed on 2018-12-31 10:09:56
