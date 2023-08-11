const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`)
}

export {
    REQUEST_TIMEOUT,
    send,
}

console.log('Hello from request.mjs!')