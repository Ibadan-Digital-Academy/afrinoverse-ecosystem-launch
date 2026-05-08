// Lightweight analytics wrapper. Works with Plausible or PostHog if their
// scripts are loaded; otherwise no-ops gracefully and logs in dev.
declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
    posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
  }
}

export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
    window.posthog?.capture(event, props);
    if (import.meta.env.DEV) console.debug("[analytics]", event, props);
  } catch {
    /* ignore */
  }
}
