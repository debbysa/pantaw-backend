-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 16 Okt 2019 pada 14.25
-- Versi Server: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.22-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pantaw`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`) VALUES
(1, 'deby', 'deby'),
(3, 'alvin', 'alvin123');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_workshop`
--

CREATE TABLE `detail_workshop` (
  `id_detail_workshop` int(11) NOT NULL,
  `id_workshop` int(11) NOT NULL,
  `id_peserta` varchar(255) NOT NULL,
  `id_status` int(11) NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `detail_workshop`
--

INSERT INTO `detail_workshop` (`id_detail_workshop`, `id_workshop`, `id_peserta`, `id_status`) VALUES
(3, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 3),
(4, 1, 'eyJhbGciOiJIUzI1NiJ9.a2luY2k.yyxWrAYr6vtRoIT4ntuSw-0BQtig2ANtuyzju3T7AR0', 3),
(6, 1, 'eyJhbGciOiJIUzI1NiJ9.YWRpdA.jVxuS_ocsVVc-wW3Jai5OcVEKOcniDGITMbvU7kwpY8', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemateri`
--

CREATE TABLE `pemateri` (
  `id_pemateri` int(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `pemateri`
--

INSERT INTO `pemateri` (`id_pemateri`, `nama`, `username`, `password`) VALUES
(1, 'neila', 'neila', 'neila123'),
(2, 'lupi', 'lupi', 'lupi123'),
(3, 'rara', 'rara', 'rara123');

-- --------------------------------------------------------

--
-- Struktur dari tabel `percakapan`
--

CREATE TABLE `percakapan` (
  `id_percakapan` int(11) NOT NULL,
  `id_workshop` int(11) NOT NULL,
  `id_pengirim` varchar(255) NOT NULL,
  `pesan` text NOT NULL,
  `tanggal_waktu` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `percakapan`
--

INSERT INTO `percakapan` (`id_percakapan`, `id_workshop`, `id_pengirim`, `pesan`, `tanggal_waktu`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'saya ingin bertanya', '2019-05-07 20:33:19'),
(2, 1, '1', 'tanya apa ?', '2019-05-07 20:33:19'),
(3, 2, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'apa perbedaan state dan props', '2019-05-08 14:08:58'),
(4, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'apa itu rest api?', '2019-05-10 14:55:50'),
(5, 2, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'saya mau bertanya tentang sesuatu', '2019-05-11 12:56:46'),
(6, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'saya mau bertanya tentang..', '2019-05-12 08:09:57'),
(7, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auw auw auw aem', '2019-05-12 08:11:34'),
(8, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'miauw miauw masuk ke tas', '2019-05-12 08:13:41'),
(9, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'miauw miauw masuk ke tas', '2019-05-12 08:14:53'),
(10, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auw auw auw puk puk', '2019-05-13 14:32:41'),
(11, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'mintak puk puk', '2019-05-14 13:16:30'),
(12, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auw auw cemplung', '2019-05-16 14:09:47'),
(13, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auw auw cemplung', '2019-05-16 14:11:41'),
(14, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auw auw cemplung', '2019-05-16 14:13:54'),
(15, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'ruba aem kinci', '2019-05-16 14:18:51'),
(16, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'ruba aem kinci', '2019-05-16 14:18:55'),
(17, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'ruba aem kinci', '2019-05-16 14:18:56'),
(18, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'glundung glundung', '2019-05-16 14:20:29'),
(19, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'glundung glundung', '2019-05-16 14:21:24'),
(20, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'hahahihihi', '2019-05-21 14:13:48'),
(21, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'hahahihihi', '2019-05-21 14:14:37'),
(22, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'hahahihihi', '2019-05-21 14:26:33'),
(23, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'bismillah', '2019-05-21 14:30:10'),
(24, 1, '1', 'ayo ada yang tanya lagi ?', '2019-05-21 15:58:59'),
(25, 1, '1', 'gak ada yang mau tanya a rek ?', '2019-05-21 16:06:56'),
(26, 1, '1', 'ayo ayo tanya', '2019-05-21 16:08:13'),
(27, 1, '1', 'kiy kuy', '2019-05-21 16:08:50'),
(28, 1, '1', 'woooooooooooooooooooooyyyyyyyyyyyyyyyyyyyyyyy', '2019-05-21 16:09:57'),
(29, 1, '1', 'iye iye', '2019-05-21 16:14:14'),
(30, 1, '1', 'woi, uwouwouwo', '2019-05-21 16:15:29'),
(31, 1, '1', 'hup hap tap tap boing boing cemplung', '2019-05-21 16:18:17'),
(32, 1, '1', 'glundung glundung aem', '2019-05-21 16:18:38'),
(33, 1, '1', 'puk puk kinci aem', '2019-05-21 16:21:43'),
(34, 1, '1', 'puk puk lompat2', '2019-05-21 16:22:09'),
(35, 1, '1', 'di puk puk diculik dimasukin tas', '2019-05-21 16:22:54'),
(36, 1, '1', 'ayo bertanya', '2019-05-22 12:01:16'),
(37, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'auuuwww, maauu tanyaakkkk', '2019-05-22 13:48:55'),
(38, 1, '1', 'tanya apa toh ?', '2019-05-22 14:09:12'),
(39, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieWVtb24.6k_EkhxAuI_shcHTmXnUjw93zrctsqtILDZgNOm08gc', 'ruba udah aemm ?', '2019-05-22 14:09:24'),
(40, 1, '1', 'udah, aemm kinci', '2019-05-22 14:09:34'),
(41, 1, 'eyJhbGciOiJIUzI1NiJ9.UnViYQ.MnRpJZ6F1UOnp3HFY6oWaI8QUt9HsxiB7bxXTxja13U', 'Auw Auwwwwwwwwwww ruba masukk', '2019-05-22 23:57:55'),
(42, 1, '1', 'Auw Auw', '2019-05-23 00:43:07'),
(43, 1, 'eyJhbGciOiJIUzI1NiJ9.cnViYQ.WnHK24fc3-O3u53FqsnD1SiqnjTG0zOboDvlx09NDbw', 'auw auw auw', '2019-05-23 01:01:02'),
(44, 1, 'eyJhbGciOiJIUzI1NiJ9.cnViYQ.WnHK24fc3-O3u53FqsnD1SiqnjTG0zOboDvlx09NDbw', 'auw auw auw auuuwwww', '2019-05-23 01:09:47'),
(45, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieQ.Ul0zeuSUcXnjHRuafFjiz5fR3pRoZV1OuBcAcIm8_7c', 'kenapa axios saya error ya?', '2019-05-23 01:12:47'),
(46, 1, '1', 'mungkin belum kamu import axiosnya', '2019-05-23 01:13:04'),
(47, 1, 'eyJhbGciOiJIUzI1NiJ9.a2lraQ.hmN3Sc4UpjUsEsI5kKitvw3Hieffu9J5HfgErZYaxNo', 'permisi, saya mau bertanya', '2019-05-23 01:57:23'),
(48, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieQ.Ul0zeuSUcXnjHRuafFjiz5fR3pRoZV1OuBcAcIm8_7c', 'halo', '2019-10-16 06:49:04'),
(49, 1, 'eyJhbGciOiJIUzI1NiJ9.ZGVieQ.Ul0zeuSUcXnjHRuafFjiz5fR3pRoZV1OuBcAcIm8_7c', 'aku deby', '2019-10-16 06:49:16'),
(50, 1, '1', 'haloo', '2019-10-16 06:49:34'),
(51, 1, 'eyJhbGciOiJIUzI1NiJ9.YWRpdA.jVxuS_ocsVVc-wW3Jai5OcVEKOcniDGITMbvU7kwpY8', 'deb', '2019-10-16 07:00:00'),
(52, 1, '1', 'opo hee', '2019-10-16 07:01:19');

-- --------------------------------------------------------

--
-- Struktur dari tabel `status`
--

CREATE TABLE `status` (
  `id_status` int(10) NOT NULL,
  `status` varchar(100) NOT NULL,
  `keterangan` text NOT NULL,
  `warna` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `status`
--

INSERT INTO `status` (`id_status`, `status`, `keterangan`, `warna`) VALUES
(1, 'selesai', 'sudah menyelesaikan tugas', 'hijau'),
(2, 'error', 'masih terdapat error', 'orange'),
(3, 'belum', 'belum menyelesaikan tugas', 'merah');

-- --------------------------------------------------------

--
-- Struktur dari tabel `workshop`
--

CREATE TABLE `workshop` (
  `id_workshop` int(10) NOT NULL,
  `id_pemateri` varchar(10) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `workshop`
--

INSERT INTO `workshop` (`id_workshop`, `id_pemateri`, `judul`, `deskripsi`) VALUES
(1, '1', 'workshop react native', 'cara membangun enviroment android menggunakan react native'),
(2, '1', 'workshop big data', 'pengolahan data pada big data');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `detail_workshop`
--
ALTER TABLE `detail_workshop`
  ADD PRIMARY KEY (`id_detail_workshop`);

--
-- Indexes for table `pemateri`
--
ALTER TABLE `pemateri`
  ADD PRIMARY KEY (`id_pemateri`);

--
-- Indexes for table `percakapan`
--
ALTER TABLE `percakapan`
  ADD PRIMARY KEY (`id_percakapan`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`);

--
-- Indexes for table `workshop`
--
ALTER TABLE `workshop`
  ADD PRIMARY KEY (`id_workshop`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `detail_workshop`
--
ALTER TABLE `detail_workshop`
  MODIFY `id_detail_workshop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `pemateri`
--
ALTER TABLE `pemateri`
  MODIFY `id_pemateri` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `percakapan`
--
ALTER TABLE `percakapan`
  MODIFY `id_percakapan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `workshop`
--
ALTER TABLE `workshop`
  MODIFY `id_workshop` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
