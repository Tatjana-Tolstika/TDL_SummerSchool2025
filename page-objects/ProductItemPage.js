export class ProductItemPage{
    get productItemName() {
        return $('.inventory_details_name');
    }
    get productItemDesc(){
        return $('.inventory_details_desc');
    }
     get productItemPrice(){
        return $('.inventory_details_price');
    }
    get shoppingCart(){
        return $('.shopping_cart_link');
    }
     get productAddToCartButton(){
        return $('#add-to-cart');
    }

    async validateProductItemDetails (productName, productDesc, productPrice) {
        await expect(this.productItemName).toHaveText(productName);
        await expect(this.productItemDesc).toHaveText(productDesc);
        await expect(this.productItemPrice).toHaveText(productPrice);
    };

    
}