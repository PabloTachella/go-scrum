export function limitString(str, limit) {
  if (str.length > limit)
    return { string: str.slice(0, limit - 3).concat("..."), addButton: true }
  return { string: str, addButton: false }
}