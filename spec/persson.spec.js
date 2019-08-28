require ("../spec.helper")

describe("Person", () => {

    let person = new Person ({
        weight: 58,
        height: 161
    })
it("should have weight of 58",() => {
    expect(person.weight).to.equal(58);
})
it("should have height of 161", () => {
    expect(person.height).to.equal(161);
})

});