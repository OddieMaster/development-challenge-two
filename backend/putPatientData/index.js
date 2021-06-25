"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "sa-east-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "sa-east-1",
  });

  const params = {
    TableName: "Patients",
    Item: {
        id: 1,
        agreement: "GEAP",
        bdate: "2021-06-05",
        cellphone: "3199821749",
        city: "Conselheiro Lafaiete",
        cpf: "07789808630",
        doctor: "Guilherme",
        email: "jessicaroziane@gmail.com",
        exam: "Bronchoscopy",
        nextAppointment: "2021-07-02T18:52",
        patient: "Jéssica Roziane da Silva",
        requestedBy: "Guilherme",
        residentialNumber: "34",
        residentialArea: "Carijos",
        rg: "21312312315",
        state: "MG",
        street: "Rua Carijós, 391",
    },
  };

  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
  } catch (err) {
      console.log(err);
  }
};
