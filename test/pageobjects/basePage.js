let { serverEnvironmentVariables } = require('../../env.variables');
const BASE_URL = serverEnvironmentVariables.domain;

module.exports = class BasePage {
    open (path = "/") {
        return browser.url(BASE_URL + path)
    }

    async checkElementIsPresent(element){
        await expect(element).toBePresent()
    }

    async clickButton(button){
        await button.click()
    }

    async checkElementIsNotPresent(element){
        await expect(element).toBePresent(false)
    }

    async validateFieldWithText (field, text){
        await expect(field).toHaveText(text)
    }
}
