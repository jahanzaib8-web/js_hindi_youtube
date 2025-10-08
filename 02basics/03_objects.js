// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Jahanziab",
    "full name": "Jahanzaib Ahmad",
    [mySym]: "mykey1",
    age: 18,
    location: "Khushab",
    email: "Jahanziab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Jahanzaib@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "Jahanziab@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
