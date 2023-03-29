const MainPage = require('../../pageobjects/home/home.page')
let testData = require('../../../test-data/home/home.data')

suite('Test for home page', () => {
    test('Check Call Form button is present', async () => {
        await MainPage.openMainPage()
        await MainPage.checkCallFormButtonIsPresent()
    })

    test('Check Call Form is appears after clicking', async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.checkCallFormIsPresent()
    })

    test(`Check Call Type field is present`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.checkCallTypeFieldIsPresent()
        })

    test(`Check Phone Number field is present`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.checkPhoneNumberFieldIsPresent()
    })

    test(`Check Call Results field is present`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.checkCallResultsFieldIsPresent()
    })

    test(`Check Call Reason field is present`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnIncomingCallRow()
        await MainPage.checkCallReasonFieldIsPresent()
    })

    test(`Check Result Type field is present`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnOutgoingCallRow()
        await MainPage.checkResultTypeFieldIsPresent()
    })

    test(`Check Successful Alert and form is hide after filing all fields with choosing Incoming Call`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnIncomingCallRow()
        await MainPage.clickOnPhoneNumberField()
        await MainPage.clickOnFirstRowInPhoneNumberList()
        await MainPage.clickOnCallReasonField()
        await MainPage.clickOnEmailRowInCallReasonField()
        await MainPage.fillCallResultsField(testData.RANDOM_TEXT_25_CHARACTERS)
        await MainPage.checkCallFormIsNotPresent()
        await MainPage.clickOnSaveButton()
        await MainPage.checkSuccessAlertIsPresent()
    })

    test(`Check Successful Alert and form is hide after filing all fields with choosing Outgoing Call`, async () => {
        await MainPage.openMainPage()
        await MainPage.clickCallFormButton()
        await MainPage.clickOnCallTypeField()
        await MainPage.clickOnOutgoingCallRow()
        await MainPage.clickOnPhoneNumberField()
        await MainPage.clickOnFirstRowInPhoneNumberList()
        await MainPage.clickOnResultTypeField()
        await MainPage.clickOnNotAvailableRowInResultTypeField()
        await MainPage.fillCallResultsField(testData.RANDOM_TEXT_25_CHARACTERS)
        await MainPage.checkCallFormIsNotPresent()
        await MainPage.clickOnSaveButton()
        await MainPage.checkSuccessAlertIsPresent()
    })
})


