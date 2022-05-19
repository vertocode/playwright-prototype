export class InsertAndCheckInputs {
    get textTitle() {
        return 'Playwright Testing E2E by Everton Vanoni'
    }

    get add2Inputs() {
        return '[data-cy="add-inputs"]'
    }

    getInput({ indexOfInput }: any): string {
        return `[data-cy="input-${indexOfInput}"]`
    }
}