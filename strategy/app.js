////////////////////////////// Basic
const usernamePass = "samanezzaty/123456";
const base64Data = Buffer.from(usernamePass).toString("base64");
console.log(base64Data);

//username:password
const decodedData = Buffer.from(base64Data, "base64").toString("ascii");
console.log(decodedData);

const [username, password] = decodedData.split("/");
console.log(username, password);
//////////////////////////////// Bearer
// req(login) => (verify) res => token jwt(xxx.yyy.zzz) => client
// headers : {authrization : "Bearer <Token>"}

//////////////////////////////// Api key
//////////////////////////////// digest
//////////////////////////////// OAuth1.0 OAuth2.0
// google auth, guthub auth, ...
