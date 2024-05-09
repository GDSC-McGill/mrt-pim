
export class IconNotSupportedError extends Error {
    constructor(icon: string) {
        super(`Icon ${icon} is not supported`);
    }
}

export class IconSizeNotSupportedError extends Error {
    constructor(size: string) {
        super(`Icon size ${size} is not supported`);
    }
}
