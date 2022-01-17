/**
 * ### Run time exception.
 * @param {string} message Error message.
 */
export function RunTimeException(message) {
  this.message = message;
  this.name = "RunTimeException";
}
