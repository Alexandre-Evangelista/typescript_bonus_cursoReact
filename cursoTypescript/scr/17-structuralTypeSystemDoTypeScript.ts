type User={userName:string,
    password:string,
}
type VerifyUserFn= (user:User,sentValue:User) => boolean;

const verifyUser:VerifyUserFn = (user,sentValue) => {
    return user.userName === sentValue.userName && user.password === sentValue.password;
}
const bdUser: User = {
    userName: "luiz",
    password: "123456",
}
const sentValue: User = {
    userName: "luiz",
    password:"123456",
}
const login= verifyUser(bdUser,sentValue);
console.log(login); // true