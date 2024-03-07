# Otel Rezervasyon Sistemi

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
