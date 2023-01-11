import * as calculator from "./calculator";
import * as business from "./business"

jest.mock("./business", () => ({
    isLowerThan: jest.fn(),
    max: 15
}))

describe("calculator function", () => {
    test("should return 4 when passing a equals 2 and b equals 2", () => {
        const a = 2;
        const b = 2;

        const result = calculator.add(a, b);

        expect(result).toEqual(4);
    })

    test("should call to isLowerThan when passing a equals and b equals 2", () => {
        const a = 2;
        const b = 2;

        const result = calculator.add(a, b);
        expect(business.isLowerThan).toHaveBeenCalled();
        expect(business.isLowerThan).toHaveBeenCalledWith(4, 10);
    })

    test("should return 9 when passing a and b equals 3", () => {
        const a = 3;
        const b = 3;

        const result = calculator.multiple(a, b);

        expect(result).toEqual(9);
    })

    test("should return 12 and call isLowerTHan function when passing a and b equals 3", () => {
        const a = 3;
        const b = 3;

        const result = calculator.multipleAndAdd(a, b);


        expect(result).toEqual(12);
        expect(business.isLowerThan).toHaveBeenCalled();
        expect(business.isLowerThan).toHaveBeenCalledWith(12, 15);
    })
})