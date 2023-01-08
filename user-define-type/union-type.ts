let userID: string | number;

userID = 101;
userID = "101";

console.log(userID);

function displayUserInfo(userId: number | string) {
  console.log(userId);
}
displayUserInfo(1010);
displayUserInfo("Mehedi Hasan");
