# Lab 01 — UI автомат тест: Playwright

## Оюутны мэдээлэл

- Оюутан: Б.Мөнгөншагай
- Оюутны код: B232270013
- Хичээл: F.CSA313
- Огноо: 2026-11-25

## Зорилго

Playwright ашиглан веб системийн функционал
тестийг автоматжуулах, locator, assertion,
Codegen болон Trace Viewer ашиглаж сурах.

## Ажлын орчин

| Хэрэгсэл | Хувилбар |
|---|---|
| OS | Arch Linux |
| Kernel | 6.18.60-1-lts |
| Node.js | v26.13.0 |
| npm | 12.2.2 |
| Git | 2.56.0 |
| Playwright | 1.65.1 |

Ажлын орчны дэлгэрэнгүй мэдээлэл:
[environment.txt](results/environment.txt)

## Browser тохиргоо

Анхны туршилтаар Chromium, Firefox, WebKit
хөтчүүд дээр нийт 6 тест ажиллуулсан.
Үүнээс 4 тест амжилттай, 2 тест амжилтгүй болсон.

WebKit нь Arch Linux орчинд шаардлагатай
системийн сангууд дутуу байснаас ажиллаагүй.

Иймээс лабораторийн цаашдын тестүүдийг Chromium
болон Firefox хөтөч дээр ажиллуулахаар болсон.

Анхны үр дүн: [example-test.txt](results/example-test.txt)

## TC-01 — Амжилттай нэвтрэх болон гарах

SauceDemo сайтад standard_user хэрэглэгчээр
амжилттай нэвтрэх, Products хуудас руу шилжих,
системээс гарах үйлдлийг автоматжуулсан.

### Шалгалтууд

- Нэвтрэх хуудас харагдах.
- Зөв хэрэглэгчийн мэдээллээр нэвтрэх.
- Inventory URL шалгах.
- Products гарчиг харагдах.
- Үндсэн цэс нээх.
- Logout үйлдэл хийх.
- Нэвтрэх хуудас руу буцах.

### Илэрсэн асуудал ба засвар

Анхны тест Logout элементийг getByRole('link')
locator-аар олох үед 30 секундын timeout
алдаагаар амжилтгүй болсон.

Алдааны логийг шалгаж, test.step() ашиглан
алдаа гарсан алхмыг тодорхойлсон.

Logout элементийг #logout_sidebar_link
CSS ID locator ашиглан олж, асуудлыг зассан.

### Эцсийн үр дүн

| Browser | Result | Duration |
|---|---|---|
| Chromium | Passed | 2.0s |
| Firefox | Passed | 3.0s |

Нийт: 2 passed, 0 failed.
Нийт хугацаа: 4.1 секунд.

### Нотолгоо

- [Анхны алдаа](results/TC-01-failed.txt)
- [Logout timeout](results/TC-01-logout-timeout.txt)
- [Debug үр дүн](results/TC-01-debug.txt)
- [Эцсийн үр дүн](results/TC-01-final.txt)
- [Chromium trace](evidence/traces/TC-01-chromium.zip)
- [Firefox trace](evidence/traces/TC-01-firefox.zip)
- [HTML report screenshot](evidence/07-login-report.png)
