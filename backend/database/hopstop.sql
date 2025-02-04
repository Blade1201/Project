-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 01. 14:42
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `hopstop`
--

CREATE DATABASE IF NOT EXISTS `hopstop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `hopstop`;


-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `booking`
--

CREATE TABLE `booking` (
  `booking_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `night_number` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `booking`
--

INSERT INTO `booking` (`booking_id`, `user_id`, `room_id`, `check_in`, `check_out`, `night_number`, `amount`) VALUES
(4, 11, 2, '2024-03-12', '2024-03-16', 1, 2399);


-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `room`
--

CREATE TABLE `room` (
  `room_id` int(11) NOT NULL,
  `room_type_id` int(11) NOT NULL,
  `room_number` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `room`
--

INSERT INTO `room` (`room_id`, `room_type_id`, `room_number`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 5),
(4, 4, 7),
(5, 5, 9),
(6, 6, 11),
(7, 7, 13),
(8, 8, 15),
(9, 9, 17),
(10, 10, 19),
(11, 11, 21),
(12, 12, 23),
(13, 13, 25);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `room_type`
--

CREATE TABLE `room_type` (
  `room_type_id` int(11) NOT NULL,
  `room_type_name` varchar(30) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `description` text NOT NULL,
  `size` INT NOT NULL,
  `space` int(1) NOT NULL,
  `price_night` int(10) NOT NULL,
  `pets` BOOLEAN NOT NULL,
  `breakfast` BOOLEAN NOT NULL,
  `featured` BOOLEAN NOT NULL,
  `extras` TEXT NOT NULL,
  `images` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `room_type`
--

INSERT INTO `room_type` (`room_type_id`, `room_type_name`, `slug`, `type` , `description`, `size` , `space`, `price_night`, `pets`, `breakfast`, `featured`, `extras`, `images`) VALUES
(1,'Standard Egyágyas', 'single-standard', 'Egyágyas', 'Kényelmes, 60 m2 alapterületű egyágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 60, 1, 1999, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi"]','["https://i.ibb.co/CbcQ1yn/single-standard.jpg"]'),
(2,'Superior Egyágyas', 'single-superior', 'Egyágyas', 'Minden igényt kielégítő 80 m2-es beltér, franciaággyal. A szobában minibár található. A fürdőszobában kényelmes ülőkád található.', 80, 1, 2399, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/bWP9t25/single-superior.jpg"]'),
(3,'Deluxe Egyágyas', 'single-deluxe', 'Egyágyas', 'Kényelmes, tágas, 100 m2 alapterületű franciaágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható.', 100, 1, 2899,  1, 0, 0, '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/LCxGmNj/single-deluxe.jpg"]'),
 (4,'Egyágyas Lakosztály', 'single-apartment', 'Egyágyas', 'Kényelmes, tágas, 120 m2 alapterületű franciaágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár és LCD TV is a vendégek rendelkezésére áll.', 120, 1, 3499, 1, 1, 0, '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/GW5dcK2/single-apartment.jpg"]'),    
  (5,'Standard Kétágyas', 'double-standard', 'Kétágyas', 'Minden igényt kielégítő 70 m2-es beltér, két különálló ággyal. A fürdőszobában kényelmes ülőkád található.', 70, 2, 2499, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi"]', '["https://i.ibb.co/T4nM7P6/double-standard.jpg"]'),
  (6,'Superior Kétágyas', 'double-superior', 'Kétágyas', 'Minden igényt kielégítő 80 m2-es beltér, franciaággyal. A szobában minibár és LCD Tv áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található.', 80, 2, 2899, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/HrV7NB3/double-superior.jpg"]'),
  (7,'Deluxe Kétágyas', 'double-deluxe', 'Kétágyas', 'Kényelmes, tágas, 100 m2 alapterületű franciaágyas szoba 2 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 100, 2, 3399, 1, 0, 0, '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/pZNZVGH/double-deluxe.jpg"]'),
  (8,'Kétágyas Lakosztály', 'double-apartment', 'Kétágyas', 'Kényelmes, tágas, 130 m2 alapterületű franciaágyas szoba 2 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 130, 2, 3999, 1, 1, 1, '[ "pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/DrhgWft/double-apartment.jpg"]'),
    (9,'Standard Családi', 'family-standard', 'Családi', 'Kényelmes, tágas, 80 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 3 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható.', 80, 3, 2999, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi"]', '["https://i.ibb.co/PMsprmF/family-standard.jpg"]'),
    (10,'Superior Családi', 'family-superior', 'Családi', 'Kényelmes, tágas, 100 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 4 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', 100, 4, 3399, 0, 0, 0, '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/HCq0nvk/family-superior.jpg"]'),
    (11,'Deluxe Családi', 'family-deluxe', 'Családi', 'Kényelmes, tágas, 130 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 5 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár és LCD Tv áll a vendégek rendelkezésére.', 130, 5, 3899, 1, 0, 0, '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/YNWRbRx/family-deluxe.jpg"]'),
    (12,'Családi Lakosztály', 'family-apartment', 'Családi', 'Két helyiségből álló családi szobánkat a családos vendégeink igényei szerint alakítottuk ki. Tágas 160 m2-es beltér, négy ággyal. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található.', 160, 6, 4499, 1, 1, 1, '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/qg9TPjy/family-apartment.jpg"]'),
     (13,'Elnöki', 'presidential-room', 'Elnöki', 'Elegáns stílusú, két helyiségből álló elnöki szobánkat különleges alkalmakhoz alakítottuk ki. A hálószobában franciaágy, a nappaliban két egyszemélyes ágy (+2 fő részére), és LCD TV. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád valamint kétszemélyes mosdók találhatóak. Az ablakokból a nyíregyházi Kossuth tér panorámájában gyönyörködhet.', 200, 10, 5499, 1, 1, 1, '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/TT6yx2k/presidential.jpg"]');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(40) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `name`, `address`, `phone_number`, `is_admin`) VALUES
(7, 'admin@admin.com', '$2a$12$iqYoq/UNaXS/Q2qU2ltutez2l.1gzj9zCxQwigA8kQOV8HA0I8t1u', 'Admin Admin', '1111 Admin, Admin utca 1', '06301234567', 1),
(11, 'user@user.com', '$2a$12$CfRGPiODgmtBpn9O7CMuq.kpj7C00eJENncP/5.PPIRgIvUTIYwKm', 'User User', '1111 User, User utca 1.', '06301239876', 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `room_id` (`room_id`);

--
-- A tábla indexei `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- A tábla indexei `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`room_type_id`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `booking`
--
ALTER TABLE `booking`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `room_type`
--
ALTER TABLE `room_type`
  MODIFY `room_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`);

--
-- Megkötések a táblához `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`room_type_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
