import { gql } from "apollo-server-express";
const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    userId:String
    title: String
    detail: String
    date: Date
  }

  type User {
    id: ID
    name: String
    hobby: String
  }

  type Query {
    welcome: String
    getTodos: [Todo]
    getTodo: Todo
    getUsers: [User]
    getUser:User
  }

  type Mutation {
    addTodo(title: String, detail: String, date: Date, userId: String): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, title: String, detail: String, date: Date): Todo
    addUser(name: String, hobby: String): User
  }
`;
export default typeDefs;
