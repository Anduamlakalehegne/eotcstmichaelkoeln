/**
 * Calculates the estimated reading time in minutes for a given text
 * @param text The text to calculate reading time for
 * @param wordsPerMinute The average reading speed in words per minute (default: 200)
 * @returns The estimated reading time in minutes
 */
export function calculateReadTime(text: string, wordsPerMinute = 200): number {
  // Remove HTML tags
  const plainText = text.replace(/<[^>]*>/g, "")

  // Count words (split by spaces and filter out empty strings)
  const words = plainText.split(/\s+/).filter(Boolean)

  // Calculate reading time
  const minutes = Math.ceil(words.length / wordsPerMinute)

  // Return at least 1 minute
  return Math.max(1, minutes)
}
