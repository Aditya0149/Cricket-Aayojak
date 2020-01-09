-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2020 at 11:52 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cricket_ayojak`
--

-- --------------------------------------------------------

--
-- Table structure for table `tournaments`
--

CREATE TABLE `tournaments` (
  `id` int(10) NOT NULL,
  `teamId` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `playerCount` int(11) NOT NULL DEFAULT 11,
  `entryFee` int(11) NOT NULL DEFAULT 200,
  `reEntryFee` int(11) NOT NULL DEFAULT 300,
  `firstPrize` varchar(20) NOT NULL DEFAULT '1000',
  `secondPrize` varchar(20) NOT NULL DEFAULT '500',
  `startDate` varchar(100) NOT NULL DEFAULT current_timestamp(),
  `endDate` varchar(100) NOT NULL DEFAULT current_timestamp(),
  `time` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tournaments`
--

INSERT INTO `tournaments` (`id`, `teamId`, `name`, `playerCount`, `entryFee`, `reEntryFee`, `firstPrize`, `secondPrize`, `startDate`, `endDate`, `time`, `status`) VALUES
(57, 'malewad', 'Malewad Tournament 2019', 7, 100, 200, '5000', '3000', '2020-01-11', '2020-01-12', '19:30', 'approved'),
(58, 'adali', 'adali Tournament 2019', 11, 500, 700, '20000', '10000', '2019-12-30', '2020-01-02', '10:0', 'approved'),
(59, 'ranbambuli', 'Ranbambuli Tournament 2019', 7, 100, 200, '5000', '2500', '2019-12-31', '2019-12-31', '5:30', 'approved');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tournaments`
--
ALTER TABLE `tournaments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tournaments`
--
ALTER TABLE `tournaments`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
