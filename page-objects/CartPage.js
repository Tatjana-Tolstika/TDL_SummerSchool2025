export class CartPage{
    get cartItemName() {
        return $('.inventory_item_name');
    }
    get cartItemDesc(){
        return $('.inventory_item_desc');
    }
     get cartItemPrice(){
        return $('.inventory_item_price');
    }
    get checkoutButton(){
        return $('#checkout');
    }
    

    async validateCartItemDetails (productName, productDesc, productPrice) {
        await expect(this.cartItemName).toHaveText(productName);
        await expect(this.cartItemDesc).toHaveText(productDesc);
        await expect(this.cartItemPrice).toHaveText(productPrice);
    };
}