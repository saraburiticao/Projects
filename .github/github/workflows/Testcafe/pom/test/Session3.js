import { Selector } from "testcafe"; 

fixture`Test structure`.page ("https://student.openenglish.com/login.html");

test("user must be logged  in successfully", async (t) => {

    await t.wait(1000).typeText("#login-email","SARA");
    await t.wait(1000).typeText("#login-password","SARABURI");


    console.log("todo salió bien");
    
});