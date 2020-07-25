function verifyRequest(request) {
    if (!request) {
        throw new Error("An input object is required.");
    }
    if (!request.location) {
        throw new Error("A location input is required.");
    }
    if (!request.phone) {
        throw new Error("A phone number input is required.");
    }
    return true
}

module.exports = verifyRequest;