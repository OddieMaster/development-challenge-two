
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

  const { id,requestedBy,rg,state,street,residentialNumber,residentialArea,nextAppointment, patient, agreement, bdate, cellphone, city, cpf, doctor, email, exam } = JSON.parse(event.body);

  const params = {
    TableName: "Patients",
    Item: {
      agreement: agreement,
        bdate: bdate,
        cellphone: cellphone,
        city: city,
        cpf: cpf,
        doctor: doctor,
        email: email,
        exam: exam,
        id: id,
        nextAppointment:nextAppointment,
        patient: patient,
        requestedBy: requestedBy,
        residentialArea: residentialArea,
        residentialNumber: residentialNumber,
        rg: rg,
        state: state,
        street: street,
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put product: ${err}`;
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