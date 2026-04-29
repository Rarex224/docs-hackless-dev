import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src="/brand/hackless-penguin.png" className="h-6 w-6" alt="Hackless" />
        Hackless Docs
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "API",
      url: "/docs/api",
    },
    {
      text: "SDK",
      url: "/docs/sdk/typescript",
    },
    {
      text: "MCP",
      url: "/docs/mcp/go-server",
    },
  ],
};
