export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground">
      <section className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8">
        <h1 className="text-3xl font-semibold">Privacy</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          This documentation site is a developer reference for Hackless. It does
          not require a Hackless account to read public pages.
        </p>
        <h2 className="mt-8 text-xl font-semibold">API Data</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Authenticated API and MCP requests are processed by the Hackless
          platform. Public profile and leaderboard endpoints intentionally expose
          only public-facing profile and solve metadata.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Secrets</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Do not paste API keys, session cookies, or challenge flags into public
          issues, logs, screenshots, or shared prompts.
        </p>
      </section>
    </main>
  );
}
