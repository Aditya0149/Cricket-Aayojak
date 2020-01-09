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
-- Table structure for table `join_requests`
--

CREATE TABLE `join_requests` (
  `id` int(11) NOT NULL,
  `fromTeamId` varchar(20) NOT NULL,
  `fromTeamName` varchar(20) NOT NULL,
  `toTournamentId` int(11) NOT NULL,
  `toTournamentName` varchar(100) NOT NULL,
  `toTeamId` varchar(20) NOT NULL DEFAULT 'Pending',
  `status` varchar(20) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `join_requests`
--

INSERT INTO `join_requests` (`id`, `fromTeamId`, `fromTeamName`, `toTournamentId`, `toTournamentName`, `toTeamId`, `status`) VALUES
(23, 'ranbambuli', 'ranbambuli', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(24, 'kondura', 'kondura', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(25, 'bhedshi', 'bhedshi', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(26, 'adali', 'adali', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(27, 'shiroda', 'shiroda', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(28, 'matond', 'matond', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(29, 'dhakora', 'dhakora', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(30, 'sawantwadi', 'sawantwadi', 57, 'Malewad Tournament 2019', 'malewad', 'accepted'),
(31, 'malewad', 'malewad', 58, 'adali Tournament 2019', 'adali', 'pending'),
(32, 'malewad', 'malewad', 57, 'Malewad Tournament 2019', 'malewad', 'accepted');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `join_requests`
--
ALTER TABLE `join_requests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `join_requests`
--
ALTER TABLE `join_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
