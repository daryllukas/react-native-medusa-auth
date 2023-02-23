import Medusa from '@medusajs/medusa-js';
import { MEDUSA_BASE_URL } from '../constants';

const medusaClient = new Medusa({ baseUrl: MEDUSA_BASE_URL });

export { medusaClient };