import Square from "./calculareSquare"

describe('Ability to multiply a number by itself', () => {
    it('should multiply a number by the same number'), () => {
        expect(square(5)).toEqual(25)
    }
    
    it('should return positive when given a negative number'), () => {
        expect(square(-5)).toEqual(25)
    }
})