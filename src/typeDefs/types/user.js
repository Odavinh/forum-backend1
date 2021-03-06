import {gql} from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    login: String!
    image: Upload
    email: String!
    sudo: Boolean!
    createdAt: String!
    additionalInfo: additionalUserInfo!
  }

  type additionalUserInfo {
    birthday: String
    residence: String
    links: [String!]
    skills: [String!]
    company: [String]
    position: String
    description: String
  }

  type userImage {
    id: ID!
    image: String!
    owner: User!
  }
`;
