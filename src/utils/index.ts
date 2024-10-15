function convertToMilliseconds(time: string): number {
    const match = time.match(/^(\d+)([smh]?)$/);
    if (!match) {
        throw new Error("Invalid time format");
    }

    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case 's': // seconds
            return value * 1000;
        case 'm': // minutes
            return value * 1000 * 60;
        case 'h': // hours
            return value * 1000 * 60 * 60;
        default: // default to milliseconds
            return value;
    }
}

function stringToBoolean(value: string): boolean {
    return value.toLowerCase() === 'true';
}

export default {
    convertToMilliseconds,
    stringToBoolean
}