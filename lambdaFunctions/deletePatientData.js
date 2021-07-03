const AWS = require('aws-sdk');
let awsConfig = {
  region: "sa-east-1",
  endpoint: "http://dynamodb.sa-east-1.amazonaws.com",
  accessKeyId: "AKIAVAOH6Q7SO4UMIJUG",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { id } = event.pathParameters;

  const params = {
    TableName: "Patients",
    Key: {
      id: id
    }
  };

  try {
    const data = await documentClient.delete(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch(err) {
    responseBody = `Unable to delete product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE"
    },
    body: responseBody
  };

  return response;
};