// Helper functions generally having to do with strings.
export function isUndefinedOrBlank(str: string | undefined): boolean {
  if (str === undefined || str === "")
    return true
  else
    return false
}