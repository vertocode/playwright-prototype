import { expect, test } from '@playwright/test';
import { IndexPlaywright } from "../PageObject/Index";
import { InsertAndCheckInputs } from "../PageObject/InsertAndCheckInputs";

const playwright = new IndexPlaywright()
const insertAndCheckInputs = new InsertAndCheckInputs()


test.beforeEach(async ({ page }: any) => {
    await expect(page).not.toHaveURL('error');
})

test.describe.parallel('Group to run in parallel, describe of each test are in the title of each one.', () => {
    test('This test is responsible to check title of this screen.', async ({ page }) => {
        await page.goto(playwright.baseUrl)
        const title = await page.innerText(playwright.title)


        expect(title).toBe(insertAndCheckInputs.textTitle)
    })

    test('This test is responsible to test the add inputs button, it add 20 inputs in screen.', async ({ page }: any) => {
        await page.goto(playwright.baseUrl)
        const title = await page.innerText(playwright.title)


        expect(title).toBe(insertAndCheckInputs.textTitle)

        for (let i: number = 0; i < 10; i++) {
            await page.click(insertAndCheckInputs.add2Inputs)
        }
    })

    test('This test is responsible to fill all inputs in the screen, being 1000 inputs that will be added. Also after this, it check all inputs, if contain the value that was typed.', async ({ page }: any) => {
        await page.goto(playwright.baseUrl)
        const title = await page.innerText(playwright.title)


        expect(title).toBe(insertAndCheckInputs.textTitle)

        for (let i: number = 0; i < 100; i++) {
            await page.click(insertAndCheckInputs.add2Inputs)
        }
        for (let i: number = 0; i < 200; i++) {
            await expect(page.locator(insertAndCheckInputs.getInput({ indexOfInput: i }))).toBeEmpty()
            await page.focus(insertAndCheckInputs.getInput({ indexOfInput: i }))
        }
        for (let i: number = 0; i < 200; i++) {
            await page.locator(insertAndCheckInputs.getInput({ indexOfInput: i })).fill(`Filled: input - n:${i}`)
        }
        for (let i: number = 0; i < 200; i++) {
            // @ts-ignore
            await expect(page.locator(insertAndCheckInputs.getInput({ indexOfInput: i }))).toHaveValue(`Filled: input - n:${i}`)
            await page.focus(insertAndCheckInputs.getInput({ indexOfInput: i }))
        }
    })
});
