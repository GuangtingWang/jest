

describe('test beforeEach',() => {
    let a = 1;
    beforeEach(() => {
        console.log('before each');
        return a = a + 4;
    });

    describe('inner1', () => {
        beforeAll(() => {
            console.log('before all 1');
        })

        it('a == 1 ?' ,() => {
            expect(a).toBe(5);
        })
    })

    describe('inner2', () => {
        beforeAll(() => {
            console.log('before all 2');
        })

        it('a == 1 ?' ,() => {
            expect(a).toBe(9);
        })
    })

})