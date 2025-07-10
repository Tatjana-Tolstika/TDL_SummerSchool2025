export class CheckoutPage {
    get itemName(){
        return $('.inventory_item_name').$$
    };
    get checkoutInfoContainer(){
        return $('.checkout_info');
    }
    get continueButton(){
        return $('#continue');
    }
    get firstNameInputField(){
        return $('#first-name');
    }
    get lastNameInputField(){
        return $('#last-name');
    }
    get postalCodeInputField(){
        return $('#postal-code');
    }
    get summaryContainer(){
        return $('.checkout_summary_container');
    }
    get summaryItemName(){
        return $('.inventory_item_name');
    }
    get summaryItemPrice(){
        return $('.inventory_item_price');
    }
    get summaryItemDesc(){
        return $('.inventory_item_desc');
    }
    get finishButton(){
        return $('#finish');
    }
   get checkoutSummaryContainer(){
    return $('#checkout_summary_container');
   }
   get checkoutComplete(){
    return $('#checkout_complete_container');
   }
   get checkoutItemContainer(){
    return $('.cart_list').$$('.cart_item');
   }

     async validateSummaryItemDetails (productName, productDesc, productPrice) {
        await expect(this.summaryItemName).toHaveText(productName);
        await expect(this.summaryItemDesc).toHaveText(productDesc);
        await expect(this.summaryItemPrice).toHaveText(productPrice);
    };

    async sumAndTax(){
        let sumPrice =0;
        for(let i =0 ; i < this.checkoutItemContainer.length; i++){
            sumPrice=+ this.checkoutInfoContainer[i];
        }
    }

}