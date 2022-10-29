import { Blog } from "../PageObject/blog"
import { expect, test } from "@playwright/test"

const blog = new Blog()
const optionSection = 'Cypress-And-Playwright'

test.beforeEach(async ({ page } : any) => {
    await expect(page).not.toHaveURL('error')
})

test.describe('Check Vertocode blog', () => {
    test.beforeEach(async ({ page }: any) => {
        await page.goto(blog.baseUrl)
    })
    test(`Open the ${optionSection} section in the sections option menu.`, async ({ page }) => {
        await blog.openSection(page,optionSection)
    })

    test('Compare title of the Cypress VS Playwright of list with the page title.', async ({ page }) => {
        await expect(page).toHaveURL(blog.baseUrl)

        await blog.openSection(page,optionSection)

        const firstPostText: any = await page.locator(blog.titleItemList).first().textContent()
        await page.click(blog.titleItemList)
        await expect(page.locator('h1')).toHaveText(firstPostText)
    })

    test('Check element in the list by index.', async ({page}: any) => {
        const secondItem = () => page.locator(blog.titleItemList).nth(1)
        await expect(secondItem()).toBeVisible()
    })
})
