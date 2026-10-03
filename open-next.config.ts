import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Set CLOUDFLARE_BUILD environment variable for Next.js conditional configurations
process.env.CLOUDFLARE_BUILD = "true";

const config = defineCloudflareConfig();
config.buildCommand = "npx next build";

export default config;
