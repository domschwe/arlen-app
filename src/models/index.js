// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Training } = initSchema(schema);

export {
  Training
};