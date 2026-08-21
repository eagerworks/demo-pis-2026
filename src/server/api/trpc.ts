import { initTRPC } from "@trpc/server";

import { prisma } from "~/lib/prisma";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    db: prisma,
    ...opts,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
