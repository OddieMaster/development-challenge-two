"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "sa-east-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "sa-east-1",
  });

  let responseBody = "";
  let statusCode = 0;

  const id = event.pathParameters;

  const params = {
    TableName: "Patients",
    Key: {
      id: id,
    },
  };
console.log("teste")
  console.log(JSON.stringify(event));
  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;
  } catch (err) {
    responseBody = `Unable to get user data`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      myHeader: "test",
    },
    body: responseBody,
  };
  return response;
};
