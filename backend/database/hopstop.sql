-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Júl 27. 18:34
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
(7, 'admin@admin.com', '$2a$12$WSMOJMaXJUTYbzeTwbk91eljXOybBDGGy2grn9A9n21SiRwiTqX2e', 'Admin Admin', '1111 Admin, Admin utca 1', '06301234567', 1);


CREATE TABLE room_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    size INT NOT NULL,
    capacity INT NOT NULL,
    pets BOOLEAN NOT NULL,
    breakfast BOOLEAN NOT NULL,
    featured BOOLEAN NOT NULL,
    description TEXT NOT NULL,
    extras TEXT NOT NULL,
    images TEXT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;



INSERT INTO room_type (name, slug, type, price, size, capacity, pets, breakfast, featured, description, extras, images)
VALUES
    ('Standard Egyágyas', 'single-standard', 'Egyágyas', 1999, 60, 1, 0, 0, 0, 'Kényelmes, 60 m2 alapterületű egyágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', '["Törölköző", "Hajszárító", "Wi-fi"]', '["https://i.ibb.co/CbcQ1yn/single-standard.jpg"]'),
    ('Superior Egyágyas', 'single-superior', 'Egyágyas', 2399, 80, 1, 0, 0, 0, 'Minden igényt kielégítő 80 m2-es beltér, franciaággyal. A szobában minibár található. A fürdőszobában kényelmes ülőkád található.', '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/bWP9t25/single-superior.jpg"]'),
    ('Deluxe Egyágyas', 'single-deluxe', 'Egyágyas', 2899, 100, 1, 1, 0, 0, 'Kényelmes, tágas, 100 m2 alapterületű franciaágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár és LCD TV is a vendégek rendelkezésére áll.', '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/LCxGmNj/single-deluxe.jpg"]'),
     ('Egyágyas Lakosztály', 'single-apartment', 'Egyágyas', 3499, 120, 1, 1, 1, 0, 'Kényelmes, tágas, 120 m2 alapterületű franciaágyas szoba 1 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár és LCD TV is a vendégek rendelkezésére áll.', '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/GW5dcK2/single-apartment.jpg"]'),    
      ('Standard Kétágyas', 'double-standard', 'Kétágyas', 2499, 70, 2, 0, 0, 0, 'Minden igényt kielégítő 70 m2-es beltér, két különálló ággyal. A fürdőszobában kényelmes ülőkád található.', '["Törölköző", "Hajszárító", "Wi-fi"]', '["https://i.ibb.co/T4nM7P6/double-standard.jpg"]'),
      ('Superior Kétágyas', 'double-superior', 'Kétágyas', 2899, 80, 2, 0, 0, 0, 'Minden igényt kielégítő 80 m2-es beltér, franciaággyal. A szobában minibár és LCD Tv áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található.', '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/HrV7NB3/double-superior.jpg"]'),
      ('Deluxe Kétágyas', 'double-deluxe', 'Kétágyas', 3399, 100, 2, 1, 0, 0, 'Kényelmes, tágas, 100 m2 alapterületű franciaágyas szoba 2 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/pZNZVGH/double-deluxe.jpg"]'),
      ('Kétágyas Lakosztály', 'double-apartment', 'Kétágyas', 3999, 130, 2, 1, 1, 1, 'Kényelmes, tágas, 130 m2 alapterületű franciaágyas szoba 2 fő részére. A fürdőszobában ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', '[ "pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/DrhgWft/double-apartment.jpg"]'),
        ('Standard Családi', 'family-standard', 'Családi', 2999, 80, 3, 0, 0, 0, 'Kényelmes, tágas, 80 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 3 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható.', '["Törölköző", "Hajszárító", "Wi-fi"]', '["https://i.ibb.co/PMsprmF/family-standard.jpg"]'),
        ('Superior Családi', 'family-superior', 'Családi', 3399, 100, 4, 0, 0, 0, 'Kényelmes, tágas, 100 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 4 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár is a vendégek rendelkezésére áll.', '["Törölköző", "Hajszárító", "Wi-fi", "Kényelmes ágyak"]', '["https://i.ibb.co/HCq0nvk/family-superior.jpg"]'),
        ('Deluxe Családi', 'family-deluxe', 'Családi', 3899, 130, 5, 1, 0, 0, 'Kényelmes, tágas, 130 m2 alapterületű kétágyas szoba egy franciaággyal és egy külön ággyal 5 fő részére. A fürdőszobában kényelmes ülőkád található. A szoba ablakaiból a csodálatos nyíregyházi belváros látható. A szobában minibár és LCD Tv áll a vendégek rendelkezésére.', '["Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/YNWRbRx/family-deluxe.jpg"]'),
        ('Családi Lakosztály', 'family-apartment', 'Családi', 4499, 160, 6, 1, 1, 1, 'Két helyiségből álló családi szobánkat a családos vendégeink igényei szerint alakítottuk ki. Tágas 160 m2-es beltér, négy ággyal. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád található.', '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/qg9TPjy/family-apartment.jpg"]'),
         ('Elnöki', 'presidential-room', 'Elnöki', 5499, 200, 10, 1, 1, 1, 'Elegáns stílusú, két helyiségből álló elnöki szobánkat különleges alkalmakhoz alakítottuk ki. A hálószobában franciaágy, a nappaliban két egyszemélyes ágy (+2 fő részére), és LCD TV. A szobában minibár áll a vendégek rendelkezésére. A fürdőszobában kényelmes ülőkád valamint kétszemélyes mosdók találhatóak. Az ablakokból a nyíregyházi Kossuth tér panorámájában gyönyörködhet.', '["pH-kiegyensúlyozott piperecikkek",
        "Ingyenes frissítők",
        "Megfelelő biztonság/biztonság",
        "Plüss párnák és légáteresztő ágyneműk",
        "Puha, túlméretezett fürdőlepedők",
        "Törölköző",
        "Hajszárító",
        "Wi-fi",
        "Kényelmes ágyak"]', '["https://i.ibb.co/TT6yx2k/presidential.jpg"]');
--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
