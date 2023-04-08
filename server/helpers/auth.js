const bcrypt = require("bcrypt");

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, salt) => {
        if (err) {
          reject(err);
        }
        resolve(bcrypt.hash);
      });
    });
  });
};
console.log("hashPassword",hashPassword);

export const comparePassword = (password,hashed)=>{
    return bcrypt.compare(password,hashed);

}
console.log("comparePassword",comparePassword);


