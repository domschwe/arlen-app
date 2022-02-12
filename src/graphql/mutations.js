/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      name
      instructors {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      name
      instructors {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      name
      instructors {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $input: CreateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    createInstructor(input: $input, condition: $condition) {
      id
      fName
      lName
      trainings {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $input: UpdateInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    updateInstructor(input: $input, condition: $condition) {
      id
      fName
      lName
      trainings {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $input: DeleteInstructorInput!
    $condition: ModelInstructorConditionInput
  ) {
    deleteInstructor(input: $input, condition: $condition) {
      id
      fName
      lName
      trainings {
        items {
          id
          trainingID
          instructorID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTrainingOwner = /* GraphQL */ `
  mutation CreateTrainingOwner(
    $input: CreateTrainingOwnerInput!
    $condition: ModelTrainingOwnerConditionInput
  ) {
    createTrainingOwner(input: $input, condition: $condition) {
      id
      trainingID
      instructorID
      training {
        id
        name
        instructors {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      instructor {
        id
        fName
        lName
        trainings {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTrainingOwner = /* GraphQL */ `
  mutation UpdateTrainingOwner(
    $input: UpdateTrainingOwnerInput!
    $condition: ModelTrainingOwnerConditionInput
  ) {
    updateTrainingOwner(input: $input, condition: $condition) {
      id
      trainingID
      instructorID
      training {
        id
        name
        instructors {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      instructor {
        id
        fName
        lName
        trainings {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTrainingOwner = /* GraphQL */ `
  mutation DeleteTrainingOwner(
    $input: DeleteTrainingOwnerInput!
    $condition: ModelTrainingOwnerConditionInput
  ) {
    deleteTrainingOwner(input: $input, condition: $condition) {
      id
      trainingID
      instructorID
      training {
        id
        name
        instructors {
          nextToken
          startedAt
        }
        date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      instructor {
        id
        fName
        lName
        trainings {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
