/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      rating
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      rating
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      rating
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLandingImage = /* GraphQL */ `
  subscription OnCreateLandingImage(
    $filter: ModelSubscriptionLandingImageFilterInput
  ) {
    onCreateLandingImage(filter: $filter) {
      id
      name
      description
      image
      sequence
      type
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const onUpdateLandingImage = /* GraphQL */ `
  subscription OnUpdateLandingImage(
    $filter: ModelSubscriptionLandingImageFilterInput
  ) {
    onUpdateLandingImage(filter: $filter) {
      id
      name
      description
      image
      sequence
      type
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const onDeleteLandingImage = /* GraphQL */ `
  subscription OnDeleteLandingImage(
    $filter: ModelSubscriptionLandingImageFilterInput
  ) {
    onDeleteLandingImage(filter: $filter) {
      id
      name
      description
      image
      sequence
      type
      updatedAt
      createdAt
      __typename
    }
  }
`;
