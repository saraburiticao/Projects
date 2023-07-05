import { Selector } from "testcafe"; 

fixture`Test structure`.page ("https://www.saucedemo.com/");

test("user must be logged  in successfully", async (t) => {
    
    await t.wait(1000).typeText("#user-name","standard_user")
    await t.wait(1000).typeText("#password","secret_sauce")
    await t.wait(1000).click('input[name="login-button"]')
    
});
