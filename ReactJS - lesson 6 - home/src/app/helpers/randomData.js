export function makeRandomString(length) {
    let result = "";
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i = 0; i < length; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    return result;
}