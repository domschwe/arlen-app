import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TrainingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InstructorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainingOwnerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Training {
  readonly id: string;
  readonly name: string;
  readonly instructors?: (TrainingOwner | null)[];
  readonly date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Training, TrainingMetaData>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training, TrainingMetaData>) => MutableModel<Training, TrainingMetaData> | void): Training;
}

export declare class Instructor {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly trainings?: (TrainingOwner | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Instructor, InstructorMetaData>);
  static copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor, InstructorMetaData>) => MutableModel<Instructor, InstructorMetaData> | void): Instructor;
}

export declare class TrainingOwner {
  readonly id: string;
  readonly training: Training;
  readonly instructor: Instructor;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TrainingOwner, TrainingOwnerMetaData>);
  static copyOf(source: TrainingOwner, mutator: (draft: MutableModel<TrainingOwner, TrainingOwnerMetaData>) => MutableModel<TrainingOwner, TrainingOwnerMetaData> | void): TrainingOwner;
}