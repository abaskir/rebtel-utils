/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const {normalizeNumber } = require('../../../dist/lib/es5');

describe('normalize number', ()=>{
    test('basic', ()=>{
        expect(normalizeNumber()).toBe(false);
    });
});