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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `address` varchar(20) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'team',
  `captain` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `address`, `role`, `captain`) VALUES
('adali', 'adali', 'adali', 'team', 'Barako'),
('bhedshi', 'bhedshi', 'bhedshi', 'team', 'Prasad'),
('dhakora', 'dhakora', 'dhakora', 'team', 'Shubham'),
('kondura', 'kondura', 'kondura', 'team', 'Gajanan'),
('malewad', 'malewad', 'malewad', 'team', 'Aditya'),
('matond', 'matond', 'matond', 'team', 'Nilesh'),
('ranbambuli', 'ranbambuli', 'ranbambuli', 'team', 'Tobo'),
('sawantwadi', 'sawantwadi', 'sawantwadi', 'team', 'Vaibhav'),
('shiroda', 'shiroda', 'shiroda', 'team', 'Mashe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
