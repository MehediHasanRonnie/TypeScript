//enum data type helps to save constants.

//numeric dataType
enum requestData {
  readData = 2,
  saveData,
  deleteData,
}
console.log(requestData);
console.log(requestData.readData);
console.log(requestData["deleteData"]);

//enum string datatype

enum RequestString {
  readData = "READ DATA",
  deleteData = "DELETE DATA",
  updateData = "UPDATE DATA",
}
console.log(RequestString);
console.log(RequestString.updateData);
console.log(RequestString["deleteData"]);

//heterogenous datatype meaning string and number combine

enum user {
  id = 101,
  name = "Mehedi Hasan",
}
console.log(user);
