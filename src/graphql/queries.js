/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainings = /* GraphQL */ `
  query SyncTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
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
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncInstructors = /* GraphQL */ `
  query SyncInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTrainingOwner = /* GraphQL */ `
  query GetTrainingOwner($id: ID!) {
    getTrainingOwner(id: $id) {
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
export const listTrainingOwners = /* GraphQL */ `
  query ListTrainingOwners(
    $filter: ModelTrainingOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainingOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        trainingID
        instructorID
        training {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrainingOwners = /* GraphQL */ `
  query SyncTrainingOwners(
    $filter: ModelTrainingOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainingOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        trainingID
        instructorID
        training {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
