export function fixName(str) {
    if ( str === 'HDD Capacity'){
        return str
    }
    return str.replace("_", " ").toLowerCase().split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
}