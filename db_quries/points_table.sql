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
-- Table structure for table `points_table`
--

CREATE TABLE `points_table` (
  `id` int(20) NOT NULL,
  `teamId` varchar(20) NOT NULL,
  `teamName` varchar(100) NOT NULL,
  `tournamentId` int(20) NOT NULL,
  `points` int(100) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `points_table`
--

INSERT INTO `points_table` (`id`, `teamId`, `teamName`, `tournamentId`, `points`) VALUES
(20, 'ranbambuli', 'ranbambuli', 57, 0),
(21, 'kondura', 'kondura', 57, 0),
(22, 'bhedshi', 'bhedshi', 57, 0),
(23, 'adali', 'adali', 57, 0),
(24, 'shiroda', 'shiroda', 57, 0),
(25, 'matond', 'matond', 57, 0),
(26, 'dhakora', 'dhakora', 57, 0),
(27, 'sawantwadi', 'sawantwadi', 57, 0),
(28, 'malewad', 'malewad', 57, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `points_table`
--
ALTER TABLE `points_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `points_table`
--
ALTER TABLE `points_table`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
