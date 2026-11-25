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

## Trace Viewer болон зориудын алдааны туршилт

Playwright-ийн --trace on тохиргоог ашиглан
тестийн үйлдлүүдийн trace бичлэгийг үүсгэсэн.

TC-01 тестийн toHaveURL assertion-ийг зориудаар
/wrong-page.html URL шалгахаар өөрчилсөн.

| Үзүүлэлт | Үр дүн |
|---|---|
| Browser | Chromium |
| Assertion | toHaveURL |
| Expected | /wrong-page.html |
| Actual | /inventory.html |
| Timeout | 5000 ms |
| Алдаа гарсан мөр | mytest.spec.ts:30 |
| Үр дүн | 1 failed |

Систем зөв inventory хуудас руу шилжсэн боловч
assertion-ийн хүлээгдэж буй утга буруу байсан
тул тест амжилтгүй болсон.

Туршилтын дараа assertion-ийг зөв утгаар
сэргээж бүх тестийг дахин ажиллуулсан.

Нотолгоо:

- [Алдааны лог](results/intentional-failure.txt)
- [Алдаатай trace](evidence/traces/TC-01-intentional-failure.zip)
- [Алдааны зураг](evidence/intentional-failure.png)
- [Эцсийн үр дүн](results/final-test.txt)

## Locator сонголт

Үндсэн тестүүдэд getByRole, getByPlaceholder,
getByText болон CSS locator ашигласан.

XPath нь DOM-ийн бүтцээс хэт хамааралтай
бичигдсэн тохиолдолд HTML бүтэц өөрчлөгдөхөд
эвдрэх эрсдэлтэй.

Харин role, текст болон тогтвортой ID,
data-test атрибут ашиглах нь тестийн кодыг
унших, ойлгох, засварлахад хялбар болгодог.

Logout элементийг getByRole('link') ашиглан
олох боломжгүй байсан тул тогтвортой
#logout_sidebar_link ID locator ашигласан.

## Playwright ба Selenium-ийн харьцуулалт

1. Playwright болон Selenium нь веб хөтчийн
   үйлдлийг автоматжуулах нээлттэй эхийн хэрэгслүүд юм.
2. Playwright нь элемент үйлдэл хийхэд бэлэн
   болохыг автоматаар хүлээдэг auto-wait боломжтой.
3. Selenium дээр тодорхой нөхцөл хүлээхэд
   explicit wait ашиглах шаардлага гардаг.
4. Playwright-ийн getByRole, getByText зэрэг
   locator нь тестийн кодыг ойлгомжтой болгодог.
5. Codegen ашиглан хэрэглэгчийн үйлдлээс
   тестийн код хурдан үүсгэх боломжтойг
   лабораторийн туршилтаар ажигласан.
6. Trace Viewer нь тестийн үйлдлүүд,
   assertion алдаа болон хуудасны төлөвийг
   шинжлэх боломж олгодог.
7. Playwright нь олон хөтөч дээр ижил тест
   ажиллуулах тохиргоотой боловч Arch Linux
   дээр WebKit-ийн хамаарлын асуудал гарсан.
8. Selenium нь олон жилийн турш хөгжсөн,
   өргөн хэрэглээтэй автоматжуулалтын хэрэгсэл
   бол Playwright нь орчин үеийн веб тестэд
   зориулсан нэгдсэн боломжуудтай.
9. Энэ лабораторийн хүрээнд Selenium-ийг
   бодитоор ажиллуулаагүй тул харьцуулалтыг
   лабораторийн заавар болон Playwright дээр
   хийсэн туршилтад үндэслэв.

## Тест ажиллуулах заавар

Төслийг татах:

    git clone https://github.com/B232270013/lab1-csa313.git
    cd lab1-csa313

Хамааралтай сангуудыг суулгах:

    npm ci

Browser суулгах:

    npx playwright install chromium firefox

Бүх тест ажиллуулах:

    npx playwright test

Зөвхөн SauceDemo тестүүд ажиллуулах:

    npx playwright test tests/mytest.spec.ts

HTML report харах:

    npx playwright show-report

Trace Viewer нээх:

    npx playwright show-trace evidence/traces/TC-01-intentional-failure.zip

## Эцсийн тестийн үр дүн

| Тест | Chromium | Firefox |
|---|---|---|
| Has title | Passed | Passed |
| Get started link | Passed | Passed |
| Successful login | Passed | Passed |
| Invalid login | Passed | Passed |
| Add product to cart | Passed | Passed |

- Үндсэн функционал тест: 6 passed.
- Жишээ тест: 4 passed.
- Нийт ажиллуулсан тест: 10.
- Амжилттай: 10.
- Амжилтгүй: 0.
- Нийт хугацаа: 6.6 секунд.
- Workers: 8.

Нотолгоо:

- [Эцсийн тестийн лог](results/final-test.txt)
- [HTML report](playwright-report/index.html)
- [Эцсийн screenshot](evidence/final-test.png)

## Дүгнэлт

Энэхүү лабораторийн ажлаар Playwright ашиглан
веб системийн функционал тестийг автоматжуулсан.
Амжилттай нэвтрэх, амжилтгүй нэвтрэх болон
бараа сагслах гурван үндсэн тест боловсруулсан.
Тестүүдэд locator, assertion болон test.step
ашиглан үйлдэл, хүлээгдэж буй үр дүнг шалгасан.
Codegen-ээр үүсгэсэн кодыг үндсэн тестийн
кодтой харьцуулж, давхардсан үйлдэл болон
assertion дутуу байгааг тодорхойлсон.
Зориудаар буруу assertion ашиглан алдаатай
trace бичлэг үүсгэсэн.
Тестийн кодыг сэргээсний дараа Chromium болон
Firefox дээр нийт 10 тест амжилттай ажилласан.
Git ашиглан ажлын үе шат бүрийг commit хийж,
GitHub репозиторт эх код болон нотолгоог хадгалсан.
