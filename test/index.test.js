const {greetEachPerson} = require("../index.js")

test("test1 a string", () => {
    expect(greetEachPerson("string")).toEqual(["Hello there, string!"])
});

test("test2 blank space", () => {
    expect(() => {
        greetEachPerson();}).toThrow("Please provide valid names to greet")
});

test("string amd non string", () => {
    expect(() => {
        greetEachPerson("string", 1, "fart", 69, ["cheese"], {hash: "weeds"}).toEqual(["Hello there, string!", "Hello there, fart!"])
    })})

test("test4 blank space", () => {
        expect(() => {
            greetEachPerson("        ");}).toThrow("Please provide valid names to greet")
    });

 test("samemyname", () => {
        expect(greetEachPerson("69696969","mynamejeff")).toEqual(["Hello there, mynamejeff!"])
        });

test("TeStDrIvEnDeVelOpMeNt", () => {
    expect(() => {
        (greetEachPerson("69696969", "________" , "#trendu"));}).toThrow("Please provide valid names to greet")
});