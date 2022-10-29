import {expect} from "@playwright/test";

export class Blog {
    get baseUrl() {
        return 'https://blog.vertocode.com/#/'
    }

    get titleItemList() {
        return '[data-test="title-item"]'
    }

    get sectionMenu() {
        return '#navbarDropdownMenuLink'
    }

    get sectionItem() {
        return '.dropdown-item'
    }

    async openSection(page: any, optionSection: string) {
        await page.click(this.sectionMenu)
        const rightOption = page.locator(this.sectionItem, { hasText: optionSection })
        await rightOption.click()
        await expect(page.locator('.display-4')).toContainText(optionSection.toLowerCase())
    }
}
