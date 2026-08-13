import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * MDX element map, Rocket AI design system.
 * Two faces only — Space Grotesk (display) for headings, Be Vietnam Pro for
 * everything else. There is no monospace face, so inline code keeps the body
 * face on a tinted inset surface instead of importing a third family.
 */

const LINK_CLASS =
  "text-text-accent underline decoration-hairline-accent underline-offset-4 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:decoration-current";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display mt-[var(--space-8)] mb-[var(--space-4)] text-[length:var(--size-h1)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-h1)] text-text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display mt-[var(--space-8)] mb-[var(--space-3)] text-[length:var(--size-h2)] font-bold leading-[var(--leading-snug)] tracking-[var(--tracking-h2)] text-text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display mt-[var(--space-6)] mb-[var(--space-2)] text-[length:var(--size-h3)] font-bold leading-[var(--leading-snug)] text-text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display mt-[var(--space-6)] mb-[var(--space-2)] text-[length:var(--size-h4)] font-medium leading-[var(--leading-snug)] text-text-primary">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="my-[var(--space-4)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-[var(--space-4)] ml-[var(--space-5)] list-disc space-y-[var(--space-2)] marker:text-text-tertiary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-[var(--space-4)] ml-[var(--space-5)] list-decimal space-y-[var(--space-2)] marker:text-text-tertiary">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
        {children}
      </li>
    ),
    /* The one place a purple left edge is allowed: it is a quote rule, not card emphasis. */
    blockquote: ({ children }) => (
      <blockquote className="my-[var(--space-6)] border-l border-hairline-accent pl-[var(--space-5)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-primary">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-sans rounded-[var(--radius-xs)] border border-hairline bg-surface-inset px-[var(--space-2)] py-[2px] text-[length:var(--size-body-s)] text-text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="font-sans my-[var(--space-6)] overflow-x-auto rounded-[var(--radius-md)] border border-hairline bg-surface-inset p-[var(--space-5)] text-[length:var(--size-body-s)] leading-[var(--leading-normal)] text-text-secondary">
        {children}
      </pre>
    ),
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href as string} className={LINK_CLASS}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {children}
        </a>
      );
    },
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src as string}
        alt={alt as string}
        className="my-[var(--space-6)] w-full rounded-[var(--radius-lg)] border border-hairline"
        loading="lazy"
      />
    ),
    hr: () => <hr className="my-[var(--space-8)] border-0 border-t border-hairline" />,
    table: ({ children }) => (
      <div className="my-[var(--space-6)] overflow-x-auto rounded-[var(--radius-md)] border border-hairline">
        <table className="min-w-full border-collapse text-[length:var(--size-body-s)]">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-hairline bg-surface-inset px-[var(--space-4)] py-[var(--space-3)] text-left font-medium text-text-primary">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-hairline px-[var(--space-4)] py-[var(--space-3)] text-text-secondary">
        {children}
      </td>
    ),

    /* Custom components used inside MDX content */
    Callout: ({
      children,
      type = "info",
    }: {
      children: React.ReactNode;
      type?: "info" | "warning" | "success" | "error";
    }) => {
      const tone = {
        info: "text-status-info",
        warning: "text-status-warning",
        success: "text-status-positive",
        error: "text-status-critical",
      };
      return (
        <div className="my-[var(--space-6)] rounded-[var(--radius-md)] border border-hairline bg-surface-inset p-[var(--space-5)]">
          <span aria-hidden="true" className={`mb-[var(--space-2)] block h-px w-8 ${tone[type]} bg-current`} />
          <div className="text-[length:var(--size-body)] leading-[var(--leading-loose)] text-text-secondary">
            {children}
          </div>
        </div>
      );
    },
    Button: ({
      children,
      href,
      variant = "primary",
    }: {
      children: React.ReactNode;
      href: string;
      variant?: "primary" | "secondary";
    }) => {
      const styles = {
        primary:
          "bg-rocket text-stone hover:bg-rocket-hover hover:shadow-glow-sm active:bg-rocket-press active:scale-[var(--press-scale)]",
        secondary:
          "border border-hairline-strong text-text-primary hover:bg-surface-overlay hover:border-hairline-accent",
      };
      return (
        <Link
          href={href}
          className={`inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] px-[var(--space-5)] font-medium no-underline transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] ${styles[variant]}`}
        >
          {children}
        </Link>
      );
    },
    Card: ({ children, title, href }: { children?: React.ReactNode; title: string; href: string }) => (
      <Link href={href} className="rk-card rk-card-interactive block p-[var(--space-5)] no-underline">
        <h4 className="font-display mb-[var(--space-2)] text-[length:var(--size-h4)] font-bold text-text-primary">
          {title}
        </h4>
        {children && (
          <p className="text-[length:var(--size-body-s)] leading-[var(--leading-loose)] text-text-secondary">
            {children}
          </p>
        )}
      </Link>
    ),
    ...components,
  };
}
