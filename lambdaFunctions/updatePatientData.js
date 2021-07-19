const AWS = require('aws-sdk');
let awsConfig = {
  region: "sa-east-1",
  endpoint: "http://dynamodb.sa-east-1.amazonaws.com",

};
AWS.config.update(awsConfig);

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

 const { id,requestedBy,rg,stateq,street,residentialNumber,residentialArea,nextAppointment, patient, agreement, bdate, cellphone, city, cpf, doctor, email, exam } = JSON.parse(event.body);


  const params = {
    TableName: "Patients",
    Key: {
      id: id
    },
    UpdateExpression: "SET patient = :p, requestedBy = :rb, rg = :rg, stateq = :st, street = :sr, residentialNumber = :rn, residentialArea = :ra, nextAppointment = :na, agreement = :ag, bdate = :bd, cellphone = :cp, city = :ci, cpf = :cpf, doctor = :doc, email = :e, exam = :ex  ",
    ExpressionAttributeValues: {
      ":p": patient,
      ":rb": requestedBy,
      ":rg": rg,
      ":st": stateq,
      ":sr": street,
      ":rn": residentialNumber,
      ":ra": residentialArea,
      ":na": nextAppointment,
      ":ag": agreement,
      ":bd": bdate,
      ":cp": cellphone,
      ":ci": city,
      ":cpf": cpf,
      ":doc": doctor,
      ":e": email,
      ":ex": exam,

    },
    ReturnValues: "UPDATED_NEW"
  };

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch(err) {
    responseBody = `Unable to update patient: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH, DELETE"
    },
    body: responseBody
  };

  return response;
};