CREATE DATABASE  IF NOT EXISTS `dwec_temperaturas`;
USE `dwec_temperaturas`;

DROP TABLE IF EXISTS `temperaturas`;
CREATE TABLE `temperaturas` (
  `codigo` int(11) NOT NULL,
  `provincia` varchar(20) DEFAULT NULL,
  `temperatura` int(11) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

INSERT INTO `temperaturas` (`codigo`, `provincia`, `temperatura`,`estado`) VALUES
(5,'Ávila',8,1),
(9,'Burgos',12,2),
(24,'León',10,3),
(34,'Palencia',7,4),
(37,'Salamanca',9,5),
(40,'Segovia',6,6),
(42,'Soria',13,1),
(47,'Valladolid',11,2),
(49,'Zamora',12,3);