import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d882f19024575703b161b948e5888db3@o4508134667911168.ingest.de.sentry.io/4508134671908944",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
