// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Training, Instructor } = initSchema(schema);

export {
  Training,
  Instructor
};