import { MissingEnvironmentVariableError } from "@/errors/utilsErrors";


/**
 * Gets environment variable by name.
 * @throws{MissingEnvironmentVariableError} if var doesnt exist
 */
export function getEnvironmentVariable(name: string): string {
    const val = process.env[name];
    if (!val) throw new MissingEnvironmentVariableError(name);
    return val;
}
