import { gql } from "apollo-server-express";
const Schema = gql`
  type Card {
    id: ID!
    qtitle: String
    qAnswer: String
    description: String
    category: String
  }
  type Query {
    getAllCards: [Card]
    getCard(id: String): Card
  }
  type Mutation {
    addCard(
      id:  String
      qtitle: String
      qAnswer: String
      description: String
      category: String
    ): Card
  }
`;
export default Schema;
