/**
 * Gift Types
 *
 * Type definitions for the gift claim feature.
 */

/**
 * A downloadable gift item
 */
export interface Gift {
  id: string
  title: string
  description: string
  icon: string
  driveUrl: string
  category: string
}
