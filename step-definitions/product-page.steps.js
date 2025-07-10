import { When, Then} from '@wdio/cucumber-framework';
import { pages } from '../support/Pages.js';

Then(/^user sees Products page$/, async function(){
    await pages.productPage.productInventoryContainer.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'Product inventory was not displayed',
    });

    const  productInventoryList = await pages.productPage.productInventoryList;

    await expect (productInventoryList).toBeElementsArrayOfSize(6);
    await pages.productPage.shoppingBadgeIcon.waitForExist({
        timeout: 5000,
        reverse: true,
        timeoutMsg: 'Shopping cart is not empty!'
    });
});

Then(/^user clicks on the Sorting button$/, async function(){
    await pages.productPage.productSortButton.waitForDisplayed({
        timeout: 5000,
        timeoutMsg: 'sort container was not displayed!',
    })
    await pages.productPage.productSortButton.click();
});
When(/^user chooses to sort by "([^"]*)"$/, async function(sorting){
    //  await pages.productPage.productSortButton.waitForDisplayed({
    //     timeout: 5000,
    //     timeoutMsg: 'sort container was not displayed!',
    // });
    // await pages.productPage.productSortButton.click();
    await pages.productPage.chooseSortingOption(sorting);
});

Then(/^user sees product "([^"]*)"$/, async function(productName){
    //  await pages.productPage.productSortButton.waitForDisplayed({
    //     timeout: 5000,
    //     timeoutMsg: 'sort container was not displayed!',
    // });
    await pages.productPage.checkProductNameById(0, productName);
});

When (/^user selects product item - "([^"]*)"$/, async function(productName){
    this.productName = productName;
    this.productDesc = await pages.productPage.getProductDescription(productName);
    this.productPrice = await pages.productPage.getProductPrice(productName);

    await pages.productPage.selectProductItem(productName);
});

//====================New code===================================




