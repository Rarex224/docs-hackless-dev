export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground">
      <section className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8">
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          These documentation pages are provided for developers integrating with
          Hackless. Use the API, SDK, and MCP server responsibly and only against
          accounts, keys, and challenge environments you are authorized to use.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Acceptable Use</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Do not use Hackless documentation, API examples, SDKs, or MCP tools to
          attack third-party systems, bypass access controls, harvest data, or
          automate abuse. Challenge infrastructure is intended for training and
          permitted CTF workflows.
        </p>
        <h2 className="mt-8 text-xl font-semibold">API Keys</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          You are responsible for protecting API keys and session credentials.
          Revoke keys that are exposed or no longer needed.
        </p>
      </section>
    </main>
  );
}
