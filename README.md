﻿# Otel Rezervasyon Sistemi

Bu proje, Node.js ile geliştirilmiş bir otel rezervasyon sistemidir. Sistemin temel amacı, kullanıcıların otel odalarını görmesine, rezervasyon yapmasına ve yöneticilerin de bu rezervasyonları yönetmesine olanak tanımaktır.

## Teknolojiler ve Kütüphaneler

- **Node.js:** Backend için temel platform.
- **Express.js:** RESTful API'ler oluşturmak için kullanılan web framework'ü.
- **MongoDB:** Veritabanı olarak NoSQL veritabanı çözümü.
- **Mongoose:** MongoDB ile etkileşim sağlamak için kullanılan bir ODM (Object Data Modeling) kütüphanesi.
- **jsonwebtoken (JWT):** Kullanıcı kimlik doğrulaması ve yetkilendirme için kullanılan bir kütüphane.

## Kurulum

1. Repo'yu klonlayın:
git clone https://github.com/mbuturak/nodejs-rest-api.git

2. Proje dizinine gidin:
cd node-js-rest-api

3. Bağımlılıkları yükleyin:
npm install

4. MongoDB kurulumunu gerçekleştirin ve bağlantı URL'sini `config/db.js` dosyasında güncelleyin.

5. Ortam değişkenlerini ayarlayın:
cp .env.example .env

`.env` dosyasını açın ve gerekli değişkenleri doldurun.

6. Uygulamayı çalıştırın:
npm start


## Katkıda Bulunma
- Katkıda bulunmak isterseniz, lütfen bir pull talebi açın. Kabul edilmeden önce testlerin geçtiğinden emin olun.

# Hotel Reservation System

This project is a hotel reservation system developed with Node.js. The main purpose of the system is to allow users to view and book hotel rooms and administrators to manage these reservations.

## Technologies and Libraries

- **Node.js:** Basic platform for the backend.
- **Express.js:** Web framework used to create RESTful APIs.
- **MongoDB:** NoSQL database solution as a database.
- **Mongoose:** An ODM (Object Data Modeling) library used to interact with MongoDB.
- **jsonwebtoken (JWT):** A library used for user authentication and authorization.

## Installation

1. Clone the repo:
git clone https://github.com/mbuturak/nodejs-rest-api.git

2. Navigate to the project directory:
cd node-js-rest-api

3. Install the dependencies:
npm install

4. Install MongoDB and update the connection URL in `config/db.js`.

5. Set environment variables:
cp .env.example .env

Open the `.env` file and fill in the required variables.

6. Run the application:
npm start


## Contribution
- If you would like to contribute, please open a pull request. Make sure it passes the tests before it is accepted.

