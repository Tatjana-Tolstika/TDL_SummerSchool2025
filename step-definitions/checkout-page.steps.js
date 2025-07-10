import { When, Then} from '@wdio/cucumber-framework';
import {pages} from '../support/Pages.js';

Then(/^user is on the checkout page$/, async function(){
     await pages.checkoutPage.checkoutInfoContainer.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'checkout container was not displayed!',

    });
})

When(/^user inputs first name - "([^"]*)"$/, async function(firstName){
    await pages.checkoutPage.firstNameInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'First name input field was not displayed!',
    });
    await pages.checkoutPage.firstNameInputField.setValue(firstName);

});
When(/^user inputs last name - "([^"]*)"$/, async function(lastName){
    await pages.checkoutPage.lastNameInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Last name input field was not displayed!',
    });
    await pages.checkoutPage.lastNameInputField.setValue(lastName);

});

When(/^user inputs postal code - "([^"]*)"$/, async function(postalCode){
    await pages.checkoutPage.postalCodeInputField.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Postal code input field was not displayed!',
    });
    await pages.checkoutPage.postalCodeInputField.setValue(postalCode);

});

When(/^user clicks on continue button$/, async function(){
    await pages.checkoutPage.continueButton.click();
});



Then(/^user sees checkout information$/, async function(){
    await pages.checkoutPage.checkoutSummaryContainer.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Product item name was not displayed!'
    });
    await pages.checkoutPage.validateSummaryItemDetails(this.productName, this.productDesc, this.productPrice);

});

When(/^user clicks on the button finish$/, async function(){
    await pages.checkoutPage.finishButton.click();
});
Then(/^user sees succesfull order$/, async function(){
    await pages.checkoutPage.checkoutComplete.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Product item name was not displayed!'
    });
})