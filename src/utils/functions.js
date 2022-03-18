export const extractNestedValue = (object, nestedKeys) => {
    return nestedKeys.split('.').reduce((obj, key) => obj[key], object)
}