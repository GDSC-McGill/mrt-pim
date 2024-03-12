export class MissingEnvironmentVariableError extends Error {
    constructor(name: string) {
        super(`Missing environment variable ${name}`);
    }
}
