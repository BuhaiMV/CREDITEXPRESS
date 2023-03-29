const MainPage = require('../../pageobjects/home/home.page')
let testData = require('../../../test-data/home/home.data')

suite('Negative test for home page', () => {
    test('Check error in Call Type field', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnSaveButton()
        await MainPage.checkErrorInTheCallTypeField(testData.REQUIRED_ERROR_TEXT)
    })

    test('Check error in Phone Number field', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnSaveButton()
        await MainPage.checkErrorInThePhoneNumberField(testData.REQUIRED_ERROR_TEXT)
    })

    test('Check error in Call Result field', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnSaveButton()
        await MainPage.checkErrorInTheCallResultField(testData.REQUIRED_ERROR_TEXT)
    })

    test('Check error in Call Reason field', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnIncomingCallRow()
        await MainPage.clickOnSaveButton()
        await MainPage.checkErrorInTheCallReasonField(testData.REQUIRED_ERROR_TEXT)
    })

    test('Check error in Result Type field', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnOutgoingCallRow()
        await MainPage.clickOnSaveButton()
        await MainPage.checkErrorInTheResultTypeField(testData.REQUIRED_ERROR_TEXT)
    })

})
