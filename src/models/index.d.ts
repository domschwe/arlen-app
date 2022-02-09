import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TrainingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InstructorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Training {
  readonly id: string;
  readonly name: string;
  readonly instructor?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Training, TrainingMetaData>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training, TrainingMetaData>) => MutableModel<Training, TrainingMetaData> | void): Training;
}

export declare class Instructor {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Instructor, InstructorMetaData>);
  static copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor, InstructorMetaData>) => MutableModel<Instructor, InstructorMetaData> | void): Instructor;
}