import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TrainingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Training {
  readonly id: string;
  readonly name: string;
  readonly instructor?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Training, TrainingMetaData>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training, TrainingMetaData>) => MutableModel<Training, TrainingMetaData> | void): Training;
}