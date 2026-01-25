import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements with custom components
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium mt-6 mb-2 text-foreground">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-coral pl-4 my-6 italic text-muted-foreground bg-card/50 py-2 pr-4 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-coral">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm">
        {children}
      </pre>
    ),
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href as string} className="text-coral hover:underline">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral hover:underline"
        >
          {children}
        </a>
      );
    },
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-border">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">{children}</th>
    ),
    td: ({ children }) => <td className="border border-border px-4 py-2">{children}</td>,
    // Custom components for MDX content
    Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "success" | "error" }) => {
      const colors = {
        info: "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
        warning: "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20",
        success: "border-l-green-500 bg-green-50 dark:bg-green-950/20",
        error: "border-l-red-500 bg-red-50 dark:bg-red-950/20",
      };
      return (
        <div className={`border-l-4 pl-4 py-3 my-6 rounded-r ${colors[type]}`}>
          {children}
        </div>
      );
    },
    Button: ({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) => {
      const styles = {
        primary: "bg-coral text-white hover:bg-coral-dark",
        secondary: "border-2 border-coral text-coral hover:bg-coral/10",
      };
      return (
        <Link
          href={href}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${styles[variant]}`}
        >
          {children}
        </Link>
      );
    },
    Card: ({ children, title, href }: { children?: React.ReactNode; title: string; href: string }) => (
      <Link href={href} className="block p-4 border border-border rounded-lg hover:border-coral/50 transition-colors">
        <h4 className="font-semibold mb-2">{title}</h4>
        {children && <p className="text-sm text-muted-foreground">{children}</p>}
      </Link>
    ),
    ...components,
  };
}
