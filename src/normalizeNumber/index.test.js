/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const {normalizeNumber } = require('../../dist/lib/es5');
jest.mock('../../dist/lib/es5', () => ({
    normalizeNumber : jest.fn(),
}));
describe('normalize number', ()=>{
    test('making request',async ()=>{
        normalizeNumber.mockImplementation(() => {
            return { response: {
                data:{
                    countryCode : "52",
                    countryId: "MX",
                    endpoint: "+523334858347",
                    formatted: "+52 33 3485 8347",
                    numberType: "FixedLine",
                    numberTypeResource: "Landline",
                    type: "number",
                  },
            },
            };
          });
          expect(normalizeNumber("+523334858347", "MX")).toEqual( {"response": {"data": {"countryCode": "52", "countryId": "MX", "endpoint": "+523334858347", "formatted": "+52 33 3485 8347", "numberType": "FixedLine", "numberTypeResource": "Landline", "type": "number"}}});
    });
});