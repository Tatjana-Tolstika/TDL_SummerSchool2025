export class ProductPage{
    get productInventoryContainer() { 
        return $('.inventory_container');
    };
    get productInventoryList() {
        return $('.inventory_list').$$('.inventory_item');
    };
    get shoppingBadgeIcon() {
        return $('.shopping_cart_badge');
    };
    get productSortButton() {
        return $('.product_sort_container');
    };
    get productAddToCartButton(){
        return $('#add-to-cart');
    }

    async chooseSortingOption(sorting){
        const optionList = await this.productSortButton.$$('option');

        for(let i = 0; i < optionList.length; i++){
            const optionName = await optionList[i].getText();

            if(optionName === sorting){
                await optionList[i].click();
                break;
            }
        }
    };

    async checkProductNameById(id, productName) {
        const actualProductName = await this.productInventoryList[id].$('.inventory_item_name');

        await expect(actualProductName).toHaveText(productName);
    };

    async getProductDescription(name){
        const productList = await this.productInventoryList;

        let productDesc = null;
        for(let i = 0 ; i < productList.length; i++){
            const productName = await productList[i].$('.inventory_item_name').getText();
            if(productName === name){
                productDesc = await productList[i].$('.inventory_item_desc').getText();
                break;
            }
        }
        return productDesc;
    };
    async getProductPrice(name){
const productList = await this.productInventoryList;

        let productPrice = null;
        for(let i = 0 ; i < productList.length; i++){
            const productName = await productList[i].$('.inventory_item_name').getText();
            if(productName === name){
                productPrice = await productList[i].$('.inventory_item_price').getText();
                break;
            }
        }
        return productPrice;
    };

    async selectProductItem(name){
        const productList = await this.productInventoryList;
        for(let i = 0 ; i < productList.length; i++){
            const productName = await productList[i].$('.inventory_item_name').getText();
            if(productName === name){
                await productList[i].$('.inventory_item_name').click();
                break;
            }
        }
    };

    //======================New code=========================

    
}