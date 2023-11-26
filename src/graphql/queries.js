/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLandingImage = /* GraphQL */ `
  query GetLandingImage($id: ID!) {
    getLandingImage(id: $id) {
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
export const listLandingImages = /* GraphQL */ `
  query ListLandingImages(
    $filter: ModelLandingImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLandingImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const landingByDate = /* GraphQL */ `
  query LandingByDate(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLandingImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    landingByDate(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
