/**
 * This stub is provided to make it straightforward to get started.
 */

/* export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me.`
} */
export function twoFer(name?: string): string {
  return `One for ${name ?? "you"}, one for me.`
}
