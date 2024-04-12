import NextAuth from "next-auth"
import { DiscordProfile } from "next-auth/providers/discord"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: {
        name: string,
        image?: string,
        email?: string,
        discord?: DiscordProfile,
    }
  }
}