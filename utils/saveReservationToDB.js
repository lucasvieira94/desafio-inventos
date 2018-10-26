const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = () => {
  const date = JSON.stringify(new Date());
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      name:null,
      email:null,
      phone:null,
      reservedAt: date
      //add rest of the parameters from a reservation here
    }
  };

  dynamoDb.put(params, error => {
    if (error) {
      console.error(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
      return Promise.reject(
        `Error saving data to DynamoDB: ${JSON.stringify(error)}`
      );
    } else {
      return Promise.resolve(params.Item);
    }
  });
};
