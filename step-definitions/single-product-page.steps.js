import {Then, When} from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees correct product details$/, async function(){
    await pages.productItemPage.productItemName.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Product item name was not displayed!'
    });

    await pages.productItemPage.validateProductItemDetails(this.productName, this.productDesc, this.productPrice);
});

Then(/^user checks data table$/, async function(dataTable){
    //console.log(dataTable.raw());
    //console.log(dataTable.rows());
    //console.log(dataTable.rowsHash());
    //console.log(dataTable.hashes());
});

//======================New code ====================
When (/^user clicks on the add to cart button$/, async function(){
    await pages.productItemPage.productAddToCartButton.click();
});
When(/^user clicks on the cart button$/, async function(){
    await pages.productItemPage.shoppingCart.click();
});