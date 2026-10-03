import type { PrismaClient } from '@prisma/client';

// Safeguard for Edge and Cloudflare Workers environments.
// Native SQLite engines cannot be bundled or run in Cloudflare Workers edge runtime.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const isCloudflare =
    process.env.CLOUDFLARE_BUILD === 'true' ||
    process.env.NEXT_RUNTIME === 'edge';

  if (isCloudflare) {
    return new Proxy({} as PrismaClient, {
      get(_target, prop) {
        return () => {
          throw new Error(`Prisma SQLite operation '${String(prop)}' is not supported on Cloudflare edge runtime.`);
        };
      },
    });
  }

  try {
    // Dynamic require so static bundling for Cloudflare doesn't pull native binary engines
    const { PrismaClient: PrismaClientConstructor } = require('@prisma/client');
    return new PrismaClientConstructor({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  } catch (e) {
    console.warn('PrismaClient unavailable:', e);
    return new Proxy({} as PrismaClient, {
      get(_target, prop) {
        return () => {
          throw new Error(`PrismaClient is unavailable for '${String(prop)}'.`);
        };
      },
    });
  }
}

export const db: PrismaClient =
  globalForPrisma.prisma ?? (typeof window === 'undefined' ? createPrismaClient() : ({} as PrismaClient));

if (process.env.NODE_ENV !== 'production' && typeof window === 'undefined') {
  globalForPrisma.prisma = db;
}