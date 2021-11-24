-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: wongso-db.cilapmewhv5h.ap-southeast-1.rds.amazonaws.com    Database: wongso
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('03fc626b-0176-4595-86d6-7b9c28596b11','tentis','Yi Tentis','\r',NULL),('07fccdce-d7e5-4788-9f57-ff1da5a8d393','kowiwi','Ko wiwi','Teluk Betung\r',NULL),('096a86f7-c90c-48a4-92ff-6f417bbbb201','siska','Bu Siska','\r',NULL),('0a314ac5-9b04-4522-830e-9a88dc43352b','caf','Caf','Antasari\r',NULL),('0ba5be67-b270-4012-aa69-db32c7fc3704','filia','Yi Filia','Way Halim\r',NULL),('0bf66ee1-b87d-49e3-8621-3564d2d0a836','cuhung','Yi Cu Hung','Gg Cantik Manis\r',NULL),('0d4f8669-de58-43cc-8772-a9d01b9f4825','gading','Gading Jaya','Teluk Betung\r',NULL),('12f4f370-cba4-4804-82ec-d68cc95596dd','wenny','Ci Wenny','Villa Citra\r',NULL),('187d382e-e56a-40fb-ad53-519004fd6b43','akiau','Yi Akiau','\r',NULL),('22bfcd50-ebe6-47e2-9554-12b0de495a3a','abral','Ibu Haji Abral','Pasar\r',NULL),('28eb9ab4-2bad-4105-82f2-ec73d2c58356','ilai','Yi Yilai','Teluk Betung\r',NULL),('294ca958-83ce-4552-aa0d-045937d8756a','chenchen','Yi Chen Chen','\r',NULL),('2c35240c-f653-450c-9ca1-04e4911775c4','Enen','Yi En En','Citra Land\r',NULL),('331ad644-2110-4c36-84b4-62dfaedd6656','maya','Bu Maya','Tanjung Karang\r',NULL),('3478278e-79db-4bdb-add0-8cc10573daf8','ayetj','mama Jojo','Tanjung Damai\r',NULL),('3648938e-bc8e-44b3-9806-00cdf734fd44','awi','Ci Awi','Villa Citra\r',NULL),('3b608fb3-6034-4f43-b0f6-c4f24e327d6a','dayat','Pak Dayat','Teluk Betung\r',NULL),('403e3b8f-5daf-4c66-a067-794fd648f70a','yeni','Yi Yeni','\r',NULL),('4427e3c7-0a29-44c0-9429-25fb06296007','aye','Yi Aye','Villa Citra\r',NULL),('44d77b8c-0147-4962-b72a-607f2c9cdc8a','kui Hao','Bapak Kui Hao','Antasari\r',NULL),('4598b1df-520d-4682-880a-38e4e3d6e5cf','tekim','Yi Tekim','\r',NULL),('45ba2351-db51-4c2e-bf03-bd631e9f9acf','liongpin','Engku Liong P','Way Halim\r',NULL),('48e1645a-c04b-4290-a82b-44e39922f7aa','taqian','Suk Taqian','Teluk Betung\r',NULL),('49e882a4-2968-46f8-ae15-684bc13a6899','ina-yos','Ibu Ina-Yos','\r',NULL),('4acc88ae-2da1-4114-9e07-409a3822e3c5','essy','Ibu Essy','\r',NULL),('4b6b0519-2608-4187-ad77-0e68cf3d2dc2','naice','Suk Naice','Palapa\r',NULL),('4d13046a-e4f5-487e-9714-ac765c823d0c','acenhokben','Ibu Acen Antasari','Antasari\r',NULL),('4d72dbe6-6c72-4ba4-9ab4-f9954c6c5856','kholil','Pak Kholil','Kebon\r',NULL),('4f0552da-3da4-4828-8c53-2c2bd43820f6','lucia','Ibu Lucia','Kedamaian\r',NULL),('55052022-68d2-4644-912e-bdf766f96d82','rosid','Rosid','Villa Citra\r',NULL),('57748fdb-6b1d-4bc4-bf64-df2ed737cb83','ango','Yi Ango','Tanjung Karang\r',NULL),('58dabe95-32c7-4325-a691-35c6ba9b8780','amuk','Ibu Amuk','\r',NULL),('596845b5-c4ee-4148-83f3-27ed61d3c587','sunuh','Pak Sunuh','Pasar\r',NULL),('5ca04d69-3e0b-4747-ad80-6eb6f8d21d4e','P3vc','P3VC','Villa Citra\r',NULL),('5d8ba02e-928c-4bdd-b29f-5646db9d86ef','gembira','Wr Kopi Gembira','Teluk Betung\r',NULL),('5e7e8851-ee11-4e6c-ace8-284de6f0f6ff','sari rasa','Sari Rasa','Villa Citra\r',NULL),('630105bd-a457-4330-99a6-e7cd1d5992d9','chr','Chandra','Kedamaian\r',NULL),('64561c4e-5eee-4264-84df-24ad5c55def8','asiu','Ibu Asiu','Tanjung Karang \r',NULL),('67255618-a872-47c2-b471-d37b2bf5953b','acen','Yi Acen Villa','Villa Citra\r',NULL),('690975fb-a5a7-4cee-b7fe-2bf4c2d0f758','erlina','Ibu Erlina','Tanjung Damai\r',NULL),('6ec375cc-a4c2-40b6-a4a2-91aaceffa8d2','Beatrice','Ibu Beatrice','Tanjung Karang\r',NULL),('6ee82eb5-6748-4b87-8ed1-dc5861b0d1d3','niman','Ibu Niman','Villa Citra\r',NULL),('72cee117-49e2-45bf-82ee-345e2b38489c','jodi','Bapak Jodi','Villa Citra\r',NULL),('73018422-7aa3-4732-a73e-a4a7b47458b6','Acun','Yi Acun','Villa Citra\r',NULL),('73a012ef-c7c5-4757-b61a-195fe9ba7cd1','igr','Indogrosir','Soekarno Hatta\r',NULL),('74109cc1-f50e-4d52-9196-d96fc6bf7ce6','iing','Yi Ing Ing','Teluk Betung\r',NULL),('765868ef-d3f2-4445-940c-f710083e32d1','anyuk','Yi Anyuk','Bukit Kencana\r',NULL),('79e026eb-4766-4483-9497-9b8737144d21','cencen','Yi cencen','\r',NULL),('7d49944e-ed59-494e-8698-11e6d42715a2','idm','Indomaret','Soekarno Hatta\r',NULL),('7ddb589d-73d7-4de6-905d-f9b4176c3022','yek ing','Yi Yek Ing','Villa Citra\r',NULL),('7f698516-b30d-4096-a146-acd23fd64e52','oka','Bapak Oka','Teluk Betung\r',NULL),('8618c388-4f52-452d-9e05-ef627efd900e','aceng','Suk Aceng','Metro\r',NULL),('8959f180-8489-4b49-867f-74a06bcc3d2f','giok ing','Yi Giok Ing','Villa Citra\r',NULL),('8f55c81a-4e6e-41bb-8ec9-8e2e333174b2','abi','Suk Abi Villa Citra','Villa Citra\r',NULL),('95f23549-eb5c-4b70-be5b-40a78622d55a','cece','Yi cece','Teluk Betung\r',NULL),('95fdea33-d25b-40a6-b7f0-5361edfdb3b6','david','David','Teluk Betung\r',NULL),('9b085d08-deb1-4621-b77a-864817fba87e','cafe1','Caf','Jl. Kartini\r',NULL),('9ce7be7e-f888-415f-9f6e-81389f18dd4b','Dhanny','Bpk. Dhanny','Perum. Puri Perwata\r',NULL),('a164c05e-9ae0-4ec5-ade3-2f64dc8fb9f9','acun','Yi Acun','Villa Citra\r',NULL),('a2bb52a6-dce7-422e-b0aa-b12b36afa57d','feikian','Yi feikian','Bukit Kencana\r',NULL),('a7ee50d0-31d9-46a9-bba2-1d2d74122426','feiling','Bu Feiling','Citra Garden\r',NULL),('ab10d7c9-9cf6-4f1c-999c-52984016baed','rosid','Pak Rosid','Villa Citra\r',NULL),('ad098400-304a-4458-8390-e0bd4ba0989a','panji','Alpukat Bang Panji','Jl. Urip\r',NULL),('ad896ff3-78ca-44ca-acbf-4e78746bd250','leni','Yi Leni','\r',NULL),('b2c1f576-9863-495b-9195-5129e45484d5','meli','Yipo Meli','Teluk Betung\r',NULL),('b564a51c-6cad-4da1-bafe-30ee711853ac','lanicg','Bu Lani CG','Citra Garden\r',NULL),('b6d39a28-3f9f-4669-a024-c9574c74bba3','afung','Yi Afung','\r',NULL),('b6eaf1e3-bbea-4ade-9b4c-fc713af1cfe7','Kinkong','Suk Kinkong','Teluk Betung\r',NULL),('b7520835-7fb7-4677-902d-71efea415234','acung','Suk Acung Metro','Metro\r',NULL),('bff11ccd-162a-45d7-b499-ce9a86c893a8','basir','Pak Basir','Pasar\r',NULL),('c0665d4e-3bf9-4a23-9f05-5d0ce724f116','yonas','yonas','Villa Citra\r',NULL),('c2b01f62-f5b9-4635-bd9a-4fc59cfe83a7','acong','Acong','Tanjung Karang\r',NULL),('c4a5a08b-00bf-43c6-be6a-2bf1da87de62','lili','Yi lili','Villa Citra\r',NULL),('c864e675-2834-41e6-9b58-8b5e29a7f924','apin','Suk me Apin','Villa Citra\r',NULL),('c8b21954-4dd2-438b-baef-ba347862292a','ina','Bu Ina','Gor ABC\r',NULL),('caff6049-f7c9-483f-bfb5-2b1125de8ed4','murah jaya','murah jaya','\r',NULL),('cbb729dd-67e8-4330-a440-4556492e582b','lien ing','Yi Lien Ying','Villa Citra\r',NULL),('d747a498-1e8c-42ec-a625-3af9c57bc751','sansan','Yi Sansan','\r',NULL),('da44e245-89c3-47df-a381-00758aa9d236','rose','Bu Ros','Teluk Betung\r',NULL),('e688533d-1984-41f8-bc7b-8e0e520afe6f','ciwiwi','Ci wiwi','Teluk Betung\r',NULL),('e9e97265-88fa-4e99-a17c-8b239bf37c09','atmos','Suk Atmos','Villa Citra\r',NULL),('e9eae0be-d51e-40e4-9cda-ff55fe677256','aca','Pak Aca','Kebon\r',NULL),('edec3d62-911c-4284-93a0-fa13247bd25b','lingling','Ibu Ling Ling','Villa Citra\r',NULL),('ee71c0e2-4653-44ae-8572-c7ad6bb9c9ce','apak','Suk Apak','Tanjung Karang\r',NULL),('f30effe9-6ca8-4458-ac51-5e0ce7651f7f','acu','Yi Acu','\r',NULL),('f5881462-8c8d-45dc-a6eb-e3be81af3ade','ame','Yi Ame','Villa Citra\r',NULL),('f92b3cf1-2005-454e-a7d2-bef07c8cc012','Lidya','Yi lidya','Teluk Betung\r',NULL),('fb17fea0-97ef-48c5-921b-a2943ab68167','sendy','Sendy','Teluk Betung\r',NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-24 11:46:01
