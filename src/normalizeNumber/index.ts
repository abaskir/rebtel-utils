
import { noAuth } from './client';

export const normalizeNumber = async (msisdn: string, countryId: string) => {
    try {
        if (msisdn.startsWith('00')) {
            msisdn = msisdn.replace('00', '+');
          }
      
          let resource = `/v1/phonenumbers/normalize?number=${encodeURIComponent(msisdn)}`;
      
          if (countryId) {
            resource += `&countryId=${countryId}`;
          }
      
          const response = await noAuth.get(resource);
      
          if (response.data.countryId === 'DO') {
            if (response.data.endpoint.startsWith('+1809')) {
              response.data.countryCode = '1809';
            } else if (response.data.endpoint.startsWith('+1829')) {
              response.data.countryCode = '1829';
            } else if (response.data.endpoint.startsWith('+1849')) {
              response.data.countryCode = '1849';
            }
          }
      
          return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};