export class UserError extends Error {
    constructor(message) {
        super(message);
        this.name = "UserError";
    }
}

export class ApiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiError";
    }
}

export class NotFoundError extends ApiError {
    constructor(message = "Ресурс не найден") {
        super(message);
    }
}