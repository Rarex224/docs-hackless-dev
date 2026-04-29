"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Braces,
  Code2,
  Database,
  FileJson,
  Github,
  KeyRound,
  Network,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const sections = [
  {
    icon: FileJson,
    title: "Public REST API",
    body: "OpenAPI-backed routes for challenges, profiles, leaderboard data, writeups, health checks, and authenticated flag submission.",
    href: "/docs/api",
    cta: "Read API docs",
  },
  {
    icon: Code2,
    title: "TypeScript SDK",
    body: "A thin typed client that mirrors the public REST API and keeps integrations close to the platform contract.",
    href: "/docs/sdk/typescript",
    cta: "Use the SDK",
  },
  {
    icon: Bot,
    title: "Go MCP Server",
    body: "A local stdio MCP bridge for Claude and other MCP clients, backed by the Hackless public API.",
    href: "/docs/mcp/go-server",
    cta: "Install MCP",
  },
];

const stack = [
  { label: "Next.js", icon: Braces },
  { label: "Prisma", icon: Database },
  { label: "PostgreSQL", icon: Database },
  { label: "Docker", icon: Network },
  { label: "OpenAPI", icon: FileJson },
  { label: "Go MCP", icon: Bot },
];

export default function DocsLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-[#f3efe7]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#24313a] bg-[#050607]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/hackless-penguin.png"
              width={34}
              height={34}
              alt="Hackless"
              className="drop-shadow-[0_0_12px_rgba(0,200,255,0.45)]"
            />
            <div>
              <div className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[#00c8ff]">
                Hackless
              </div>
              <div className="text-xs text-[#9ca7ad]">Developer Docs</div>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-[#c6d1d7] md:flex">
            <Link href="/docs/api" className="transition hover:text-[#00c8ff]">
              API
            </Link>
            <Link href="/docs/sdk/typescript" className="transition hover:text-[#00c8ff]">
              SDK
            </Link>
            <Link href="/docs/mcp/go-server" className="transition hover:text-[#00c8ff]">
              MCP
            </Link>
            <a
              href="https://github.com/Rarex224/hackless-dev"
              className="inline-flex items-center gap-2 rounded-md border border-[#2c3c45] px-3 py-2 transition hover:border-[#00ff41] hover:text-[#00ff41]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <section className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00c8ff]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#00ff41]/30 bg-[#00ff41]/5 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-[#00ff41]">
            <ShieldCheck className="h-4 w-4" />
            Docs for builders
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#f3efe7] sm:text-6xl lg:text-7xl">
            Hackless Docs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aeb9bf]">
            Public API, TypeScript SDK, and Go MCP server documentation for the
            Hackless cybersecurity training platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-md border border-[#00c8ff] bg-[#00c8ff]/10 px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-[#00c8ff] shadow-[0_0_24px_rgba(0,200,255,0.12)] transition hover:bg-[#00c8ff]/16"
            >
              Open docs
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/openapi/openapi.json"
              className="inline-flex items-center gap-2 rounded-md border border-[#344650] px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] text-[#d6e0e5] transition hover:border-[#00ff41] hover:text-[#00ff41]"
            >
              OpenAPI JSON
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative z-10"
        >
          <div className="overflow-hidden rounded-lg border border-[#24313a] bg-[#071016]/92 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-[#24313a] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs uppercase tracking-[0.18em] text-[#77858d]">
                public-api.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-7 text-[#00ff41]">
{`import { createHacklessClient } from "hackless-sdk";

const hackless = createHacklessClient({
  baseURL: "https://hackless.dev",
  apiKey: process.env.HACKLESS_API_KEY,
});

const challenges = await hackless.listChallenges();
const board = await hackless.getLeaderboard();
await hackless.submitFlag("cryptovault", flag);`}
            </pre>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-[#1e2a31] bg-[#071016]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3 text-[#d6e0e5]">
            <KeyRound className="h-5 w-5 text-[#00ff41]" />
            API-key and session-aware endpoints
          </div>
          <div className="flex items-center gap-3 text-[#d6e0e5]">
            <Trophy className="h-5 w-5 text-[#00c8ff]" />
            Challenges, solves, profiles, rankings
          </div>
          <div className="flex items-center gap-3 text-[#d6e0e5]">
            <Bot className="h-5 w-5 text-[#d97757]" />
            MCP tools for Claude workflows
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-[#24313a] bg-[#071016] p-6 transition hover:border-[#00c8ff]/70 hover:bg-[#091a22]"
            >
              <item.icon className="h-6 w-6 text-[#00c8ff]" />
              <h2 className="mt-5 text-xl font-semibold text-[#f3efe7]">{item.title}</h2>
              <p className="mt-3 min-h-24 text-sm leading-6 text-[#aeb9bf]">{item.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#00ff41]">
                {item.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#d97757]">
            Platform shape
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-[#f3efe7]">
            Built around CTF operations and automation.
          </h2>
          <p className="mt-4 leading-7 text-[#aeb9bf]">
            Hackless combines challenge hosting, per-user progress, leaderboard
            logic, writeups, uptime monitoring, and MCP automation. These docs
            expose the stable public surfaces for external tools.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {stack.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-[#24313a] bg-[#071016] px-4 py-4"
            >
              <item.icon className="h-5 w-5 text-[#00c8ff]" />
              <span className="text-sm text-[#d6e0e5]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
