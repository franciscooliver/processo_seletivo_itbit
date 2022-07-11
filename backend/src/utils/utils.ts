import bcrypt from "bcrypt";

export function getPasswordHash(password: string, callback): void {
    const saltRounds = 10;
    const plaintextPassword = password;

    let passwordHash = '';
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
            passwordHash = hash;
            callback(err, passwordHash);
        })
    });
}