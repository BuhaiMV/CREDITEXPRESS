import BasePage from '../basePage.js';
import allureReporter from '@wdio/allure-reporter'

class Home extends BasePage {
    get callFormButton() {
        return $('button#call-form-button');
    }

    get callForm(){
        return $('div#call-form');
    }

    get callTypeField(){
        return $('div#call-type')
    }

    get incomingCallRow(){
        return $('li[data-value="Incoming Call"]')
    }

    get outgoingCallRow(){
        return $('li[data-value="Outgoing Call"]')
    }

    get phoneNumberField(){
        return $('input#phone-number')
    }

    get callResultsField(){
        return $('textarea#call-result')
    }

    get callReasonField(){
        return $('div#call-reason')
    }

    get emailRowInCallReasonField(){
        return $('li[data-value="Email"]')
    }

    get resultTypeField(){
        return $('div#result-type')
    }

    get notAvailableRowInResultTypeField(){
        return $('li[data-value="Not available"]')
    }

    get firstRowInPhoneNumberList(){
        return $('div[data-popper-placement="bottom"]')
    }

    get successAlert(){
        return $('div#alert-success')
    }

    get saveButton(){
        return $('button#form-save')
    }

    get callTypeErrorField(){
        return $('.validation-error')
    }

    get phoneNumberErrorField(){
        return $('#phone-number-helper-text')
    }

    get callResultErrorField(){
        return $('#call-result-helper-text')
    }

    get callReasonErrorField(){
        return $('.validation-error')
    }

    get resultTypeErrorField(){
        return $('.validation-error')
    }

    openMainPage() {
        allureReporter.addStep('Open home page');
        return this.open();
    }

    async checkCallFormButtonIsPresent(){
        allureReporter.addStep(`Check call form button is presented`);
        await this.checkElementIsPresent(this.callFormButton)
    }

    async clickCallFormButton(){
        allureReporter.addStep('click call form button');
        await this.clickButton(this.callFormButton);
    }

    async checkCallFormIsPresent(){
        allureReporter.addStep(`Check call form is presented`);
        await this.checkElementIsPresent(this.callForm)
    }

    async checkCallFormIsNotPresent(){
        allureReporter.addStep(`Check call form is not presented`);
        await this.checkElementIsNotPresent(this.callForm)
    }

    async checkCallTypeFieldIsPresent(){
        allureReporter.addStep(`Check call type field is presented`);
        await this.checkElementIsPresent(this.callTypeField)
    }

    async checkPhoneNumberFieldIsPresent(){
        allureReporter.addStep(`Check phone Number field is presented`);
        await this.checkElementIsPresent(this.phoneNumberField)
    }

    async checkCallResultsFieldIsPresent(){
        allureReporter.addStep(`Check call Results field is presented`);
        await this.checkElementIsPresent(this.callResultsField)
    }

    async clickOnCallTypeField(){
        allureReporter.addStep(`Click on call type field`);
        await this.clickButton(this.callTypeField)
    }

    async clickOnIncomingCallRow(){
        allureReporter.addStep(`Click on incoming call row`);
        await this.clickButton(this.incomingCallRow)
    }

    async clickOnOutgoingCallRow(){
        allureReporter.addStep(`Click on outgoing call row`);
        await this.clickButton(this.outgoingCallRow)
    }

    async checkCallReasonFieldIsPresent(){
        allureReporter.addStep(`Check call Reason field is presented`);
        await this.checkElementIsPresent(this.callReasonField)
    }

    async checkResultTypeFieldIsPresent(){
        allureReporter.addStep(`Check result Type field is presented`);
        await this.checkElementIsPresent(this.resultTypeField)
    }

    async checkSuccessAlertIsPresent(){
        allureReporter.addStep(`Check Success alert is presented`);
        await this.checkElementIsPresent(this.successAlert)
    }

    async fillCallResultsField(text){
        allureReporter.addStep(`Fill Call Results field with ${text} text`);
        await this.callResultsField.setValue(text)
    }

    async clickOnCallReasonField(){
        allureReporter.addStep(`Click on Call Reason field`);
        await this.clickButton(this.callReasonField)
    }

    async clickOnEmailRowInCallReasonField(){
        allureReporter.addStep(`Click on Email row in Call Reason field`);
        await this.clickButton(this.emailRowInCallReasonField)
    }

    async clickOnResultTypeField(){
        allureReporter.addStep(`Click on Result Type field`);
        await this.clickButton(this.resultTypeField)
    }

    async clickOnNotAvailableRowInResultTypeField(){
        allureReporter.addStep(`Click on Not Available Row In Result Type field`);
        await this.clickButton(this.notAvailableRowInResultTypeField)
    }

    async clickOnPhoneNumberField(){
        allureReporter.addStep(`Click on Phone Number field`);
        await this.clickButton(this.phoneNumberField)
    }

    async clickOnFirstRowInPhoneNumberList(){
        allureReporter.addStep(`Click on first row in Phone Number List`);
        await this.clickButton(this.firstRowInPhoneNumberList)
    }

    async clickOnSaveButton(){
        allureReporter.addStep(`Click on Save button`);
        await this.clickButton(this.saveButton)
    }

    async checkErrorInTheCallTypeField(text){
        allureReporter.addStep(`Check error text in the Call Type field`);
        await this.validateFieldWithText(this.callTypeErrorField, text)
    }

    async checkErrorInThePhoneNumberField(text){
        allureReporter.addStep(`Check error text in the Phone Number field`);
        await this.validateFieldWithText(this.phoneNumberErrorField, text)
    }

    async checkErrorInTheCallResultField(text){
        allureReporter.addStep(`Check error text in the Call Result field`);
        await this.validateFieldWithText(this.callResultErrorField, text)
    }

    async checkErrorInTheCallReasonField(text){
        allureReporter.addStep(`Check error text in the Call Reason field`);
        await this.validateFieldWithText(this.callReasonErrorField, text)
    }

    async checkErrorInTheResultTypeField(text){
        allureReporter.addStep(`Check error text in the Result Type field`);
        await this.validateFieldWithText(this.resultTypeErrorField, text)
    }
}

module.exports = new Home();
