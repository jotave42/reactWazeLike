module.exports = (stringToArray, separator) => {
    return stringToArray.split(separator).map(tech => tech.trim());
};