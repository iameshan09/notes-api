import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export default {
  get: (params) => docClient.send(new GetCommand(params)),
  put: (params) => docClient.send(new PutCommand(params)),
  query: (params) => docClient.send(new QueryCommand(params)),
  update: (params) => docClient.send(new UpdateCommand(params)),
  delete: (params) => docClient.send(new DeleteCommand(params)),
};
