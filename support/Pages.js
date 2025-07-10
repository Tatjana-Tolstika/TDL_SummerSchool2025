import { CartPage } from "../page-objects/CartPage.js";
import { CheckoutPage } from "../page-objects/CheckoutPage.js";
import { LoginPage } from "../page-objects/LoginPage.js";
import { ProductItemPage } from "../page-objects/ProductItemPage.js";
import { ProductPage } from "../page-objects/ProductPage.js";

class Pages {
    constructor(){
        this.loginPage = new LoginPage();
        this.productPage = new ProductPage();
        this.productItemPage = new ProductItemPage();
        this.cartPage = new CartPage();
        this.checkoutPage = new CheckoutPage();
    }
}

export const pages = new Pages();