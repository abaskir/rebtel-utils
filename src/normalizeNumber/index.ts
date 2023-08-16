
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
      
          return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};