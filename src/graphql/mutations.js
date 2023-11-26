/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createLandingImage = /* GraphQL */ `
  mutation CreateLandingImage(
    $input: CreateLandingImageInput!
    $condition: ModelLandingImageConditionInput
  ) {
    createLandingImage(input: $input, condition: $condition) {
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
export const updateLandingImage = /* GraphQL */ `
  mutation UpdateLandingImage(
    $input: UpdateLandingImageInput!
    $condition: ModelLandingImageConditionInput
  ) {
    updateLandingImage(input: $input, condition: $condition) {
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
export const deleteLandingImage = /* GraphQL */ `
  mutation DeleteLandingImage(
    $input: DeleteLandingImageInput!
    $condition: ModelLandingImageConditionInput
  ) {
    deleteLandingImage(input: $input, condition: $condition) {
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
