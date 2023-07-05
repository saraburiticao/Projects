import { Selector } from "testcafe"; 

fixture`Test structure`.page ("https://demoqa.com/text-box");

test("user must be logged  in successfully", async (t) => {

    await t.wait(1000).typeText("#userName","secret_sauce");
    await t.wait(1000).click("#submit");

    console.log("todo salió bien");
    
});
