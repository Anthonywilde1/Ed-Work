const {greetEachPerson} = require("../index.js")

test("test1 a string", () => {
    expect(greetEachPerson("string")).toEqual(["Hello there, string!"])
});

test("test2 blank space", () => {
    expect(() => {
        greetEachPerson();}).toThrow("Please provide valid names to greet")
});
