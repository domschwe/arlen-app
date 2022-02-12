// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Training, Instructor, TrainingOwner } = initSchema(schema);

export {
  Training,
  Instructor,
  TrainingOwner
};