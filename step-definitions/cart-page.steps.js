import { When, Then} from '@wdio/cucumber-framework';
import {pages} from '../support/Pages.js';

Then(/^user sees his chosen item$/, async function(){
    await pages.cartPage.cartItemName.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Product item name was not displayed!'
    });

    await pages.cartPage.validateCartItemDetails(this.productName, this.productDesc, this.productPrice);

});

When(/^user clicks on checkout button$/, async function(){
    await pages.cartPage.checkoutButton.click();
});

