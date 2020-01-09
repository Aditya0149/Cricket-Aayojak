-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2020 at 11:51 AM
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
-- Table structure for table `fixtures`
--

CREATE TABLE `fixtures` (
  `id` int(11) NOT NULL,
  `team1Id` varchar(20) NOT NULL,
  `team1Name` varchar(100) NOT NULL,
  `team2Id` varchar(20) NOT NULL,
  `team2Name` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL DEFAULT current_timestamp(),
  `time` varchar(20) NOT NULL,
  `tournamentId` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'Yet to start'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fixtures`
--

INSERT INTO `fixtures` (`id`, `team1Id`, `team1Name`, `team2Id`, `team2Name`, `date`, `time`, `tournamentId`, `status`) VALUES
(35, 'malewad', 'malewad', 'shiroda', 'shiroda', '2020-01-10T18:30:00Z', '19:30', 57, 'Running'),
(36, 'sawantwadi', 'sawantwadi', 'dhakora', 'dhakora', '2020-01-10T18:30:00Z', '19:30', 57, 'Yet to start');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fixtures`
--
ALTER TABLE `fixtures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fixtures`
--
ALTER TABLE `fixtures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
