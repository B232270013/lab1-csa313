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

## TC-02 — Амжилтгүй нэвтрэх

Буруу нууц үгээр нэвтрэх оролдлого хийж,
алдааны мессеж болон нэвтрэх эрх олгогдоогүй
байдлыг assertion ашиглан шалгасан.

Үр дүн: 2 passed, 0 failed.

Нотолгоо: [TC-02](results/TC-02-invalid-login.txt)

## TC-03 — Бараа сагслах

Sauce Labs Backpack барааг сагсанд нэмэх,
сагсны тоо, барааны нэр, тоо ширхгийг шалгах,
барааг сагснаас хасах болон logout үйлдлийг
автоматжуулсан.

Үр дүн: 2 passed, 0 failed.

Нотолгоо: [TC-03](results/TC-03-add-to-cart.txt)

## Функционал тестийн нэгдсэн үр дүн

| Test case | Chromium | Firefox |
|---|---|---|
| TC-01 Successful login | Passed | Passed |
| TC-02 Invalid login | Passed | Passed |
| TC-03 Add product to cart | Passed | Passed |

Нийт: 6 passed, 0 failed.

Тест бүр тусдаа browser context ашиглан
бие даан ажиллахаар бичигдсэн.

Нотолгоо: [Нэгдсэн үр дүн](results/all-functional-tests.txt)

## Codegen туршилт

Playwright Codegen ашиглан SauceDemo сайтын нэвтрэх,
бараа сагслах, сагснаас хасах болон logout үйлдлийг
бичүүлж автомат тестийн код үүсгэсэн.

Үүсгэсэн кодыг үндсэн тестийн кодтой diff командаар
харьцуулсан.

| Үзүүлэлт | Codegen | Үндсэн тест |
|---|---|---|
| Кодын мөр | 32 | 212 |
| Тестийн тоо | 1 | 3 |
| Assertion | Байхгүй | Байгаа |
| test.step() | Байхгүй | Байгаа |
| Сөрөг тест | Байхгүй | Байгаа |
| Илүүдэл үйлдэл | Байгаа | Харьцангуй бага |

### Ажиглалт

1. Codegen нь хэрэглэгчийн үйлдлийг автоматаар
   бичиж, тестийн эхний хувилбарыг хурдан үүсгэдэг.
2. Үүсгэсэн код data-test болон getByRole
   locator ашигласан.
3. div элементийг nth(4)-өөр сонгосон нь
   HTML бүтэц өөрчлөгдөхөд эвдрэх эрсдэлтэй.
4. Username талбар дээр давхардсан click
   үйлдлүүд бичигдсэн.
5. Үүсгэсэн код expect импортолсон боловч
   assertion ашиглаагүй.
6. Үндсэн тестүүд URL, текст, элемент болон
   сагсны тоо ширхгийг assertion-аар шалгасан.
7. Үндсэн тестүүд test.step() ашигласан тул
   алдаа гарсан алхмыг тодорхойлох боломжтой.
8. Codegen нь тестийн эхлэл үүсгэхэд ашигтай
   боловч үүсгэсэн кодыг хянаж, assertion нэмж,
   шаардлагагүй үйлдлийг хасах хэрэгтэй.

### Нотолгоо

- [Codegen код](codegen/login-generated.ts)
- [Кодын харьцуулалт](results/codegen-comparison.txt)
