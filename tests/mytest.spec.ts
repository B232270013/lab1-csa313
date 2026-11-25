import { test, expect } from '@playwright/test';

// TC-01: Амжилттай нэвтрэх болон системээс гарах
test('successful login', async ({ page }) => {

    await test.step('Нэвтрэх хуудас нээх', async () => {
        await page.goto('https://www.saucedemo.com/');

        await expect(
            page.getByPlaceholder('Username')
        ).toBeVisible();
    });

    await test.step('Хэрэглэгчийн мэдээлэл оруулах', async () => {
        await page.getByPlaceholder('Username')
            .fill('standard_user');

        await page.getByPlaceholder('Password')
            .fill('secret_sauce');
    });

    await test.step('Нэвтрэх', async () => {
        await page.getByRole('button', {
            name: 'Login'
        }).click();
    });

    await test.step('Нэвтрэлт амжилттай эсэхийг шалгах', async () => {
        await expect(page)
            .toHaveURL(/\/inventory\.html$/);

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();
    });

    await test.step('Үндсэн цэс нээх', async () => {
        await page.locator('#react-burger-menu-btn')
            .click();
    });

    await test.step('Системээс гарах', async () => {
        const logout = page.locator('#logout_sidebar_link');

        await expect(logout).toBeVisible();

        await logout.click();
    });

    await test.step('Нэвтрэх хуудас руу буцсаныг шалгах', async () => {
        await expect(page)
            .toHaveURL('https://www.saucedemo.com/');

        await expect(
            page.getByPlaceholder('Username')
        ).toBeVisible();

        await expect(
            page.getByRole('button', { name: 'Login' })
        ).toBeVisible();
    });
});