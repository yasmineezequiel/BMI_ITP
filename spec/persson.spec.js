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
it ("should calculate BMI value", () => {
    person.calculate_bmi();
    expect(person.bmiValue).to.equal("26.01");
})
it ("should calculate BMI value", () => {
    person.calculate_bmi();
    expect(person.bmiMessage).to.equal("Overweight");
})

})
