import moment from "moment";

/**
 * Removes null, undefined, and empty values from an object recursively.
 * @param {Object} object - The object to clean.
 * @returns {Object} The cleaned object.
 */
export const removeNullValues = (object) => {
  Object.entries(object).forEach(([k, v]) => {
    if (v && typeof v === "object") removeNullValues(v);
    if (
      (v && typeof v === "object" && !Object.keys(v).length) ||
      v === null ||
      v === undefined ||
      v.length === 0
    ) {
      if (Array.isArray(object)) object.splice(k, 1);
      else if (!(v instanceof Date)) delete object[k];
    }
  });
  return object;
};

/**
 * Compares a date string plus a duration against the current date.
 * @param {string} duration - ISO 8601 duration format (e.g., PT1H).
 * @param {string} dateStr - The starting date string.
 * @returns {boolean} True if current date is greater than the calculated date.
 */
export const compareDateWithDuration = (duration, dateStr) => {
  const currentDate = new Date();
  const providedDate = new Date(dateStr);
  // Parse the duration
  const durationInMilliseconds = parseDuration(duration);
  // Add the duration to the provided date
  const newDate = new Date(providedDate.getTime() + durationInMilliseconds);
  // Compare the new date with the current date
  return currentDate.getTime() > newDate.getTime();
}

/**
 * Parse ISO 8601 duration format (PT1H, PT30S, etc.) to milliseconds.
 * @param {string} duration - The duration string.
 * @returns {number} Duration in milliseconds.
 */
export function parseDuration(duration) {
  return moment.duration(duration).asMilliseconds();
}

/**
 * Converts an array of key-value pair objects into a single object.
 * @param {Array<{keyItem: string, valueItem: any}>} keyPairs - Array of objects with keyItem and valueItem.
 * @returns {Object} The resulting object.
 */
export const convertKeyValueToObject = (keyPairs) => {
  return [...keyPairs].reduce((data, pair) => {
    const key = pair.keyItem;
    const value = pair.valueItem;

    if (key === '') return data;
    return {
      ...data,
      [key]: value,
    };
  }, {});
};
