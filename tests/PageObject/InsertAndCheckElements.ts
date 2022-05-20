export class InsertAndCheckElements {
    get textTitle() {
        return 'Playwright Testing E2E by Everton Vanoni'
    }

    get add2Inputs() {
        return '[data-cy="add-input"]'
    }

    get add2Checkbox() {
        return '[data-cy="add-checkbox"]'
    }

    getInput({ index }: any): string {
        return `[data-cy="input-${index}"]`
    }

    getCheckbox({ index }: any): string {
        return `[data-cy="checkbox-${index}"]`
    }

    getCheckboxText({ index }: any): string {
        return `[data-cy="checkbox-text-${index}"]`
    }
}