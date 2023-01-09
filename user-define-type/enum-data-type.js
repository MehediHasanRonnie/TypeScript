//enum data type helps to save constants.
//numeric dataType
var requestData;
(function (requestData) {
    requestData[requestData["readData"] = 2] = "readData";
    requestData[requestData["saveData"] = 3] = "saveData";
    requestData[requestData["deleteData"] = 4] = "deleteData";
})(requestData || (requestData = {}));
console.log(requestData);
console.log(requestData.readData);
console.log(requestData["deleteData"]);
//enum string datatype
var RequestString;
(function (RequestString) {
    RequestString["readData"] = "READ DATA";
    RequestString["deleteData"] = "DELETE DATA";
    RequestString["updateData"] = "UPDATE DATA";
})(RequestString || (RequestString = {}));
console.log(RequestString);
console.log(RequestString.updateData);
console.log(RequestString["deleteData"]);
//heterogenous datatype meaning string and number combine
var user;
(function (user) {
    user[user["id"] = 101] = "id";
    user["name"] = "Mehedi Hasan";
})(user || (user = {}));
console.log(user);
