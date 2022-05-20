import { expect, test } from '@playwright/test';
import { IndexPlaywright } from "../PageObject/Index";
import { InsertAndCheckElements } from "../PageObject/InsertAndCheckElements";

const playwright = new IndexPlaywright()
const insertAndCheckInputs = new InsertAndCheckElements()


test.beforeEach(async ({ page }: any) => {
    await expect(page).not.toHaveURL('error');
})

test.describe.parallel('Group to run in parallel, describe of each test are in the title of each one.', () => {
    test('This test is responsible to check text input, fill and check the all values.', async ({ page }) => {
        await page.goto(playwright.baseUrl)
        const title = await page.innerText(playwright.title)


        expect(title).toBe(insertAndCheckInputs.textTitle)

        for (let i: number = 0; i < 100; i++) {
            await page.click(insertAndCheckInputs.add2Inputs)
        }
        for (let i: number = 0; i < 200; i++) {
            await expect(page.locator(insertAndCheckInputs.getInput({ index: i }))).toBeEmpty()
            await page.focus(insertAndCheckInputs.getInput({ index: i }), { timeout: 30000 })
        }
        for (let i: number = 0; i < 200; i++) {
            await page.locator(insertAndCheckInputs.getInput({ index: i })).fill(`Filled: input - n:${i}`)
        }
        setInterval(async () => {
            for (let i: number = 0; i < 200; i++) {
                // @ts-ignore
                await expect(page.locator(insertAndCheckInputs.getInput({ index: i }))).toHaveValue(`Filled: input - n:${i}`)
                await page.focus(insertAndCheckInputs.getInput({ index: i }), { timeout: 30000 })
            }
        }, 1000)
    })

    test('This test is responsible to check checkbox input, fill and check the all values.', async ({ page }: any) => {
        await page.goto(playwright.baseUrl)
        const title = await page.innerText(playwright.title)


        expect(title).toBe(insertAndCheckInputs.textTitle)

        for (let i: number = 0; i < 100; i++) {
            await page.click(insertAndCheckInputs.add2Checkbox)
        }
        for (let i: number = 0; i < 200; i++) {
            await expect(page.locator(insertAndCheckInputs.getCheckbox({ index: i }))).not.toBeChecked()
            await page.focus(insertAndCheckInputs.getCheckbox({ index: i }), { timeout: 30000 })
        }
        for (let i: number = 0; i < 200; i++) {
            await page.locator(insertAndCheckInputs.getCheckbox({ index: i })).click()
        }
        setInterval(async () => {
            for (let i: number = 0; i < 200; i++) {
                await expect(page.locator(insertAndCheckInputs.getCheckbox({ index: i }))).toBeChecked()
                await expect(page.locator(insertAndCheckInputs.getCheckboxText({ index: i }))).toContainText(`Test checkbox n:${i}`)
                await page.focus(insertAndCheckInputs.getCheckbox({ index: i }), { timeout: 30000 })
            }
        }, 1000)
    })
});
