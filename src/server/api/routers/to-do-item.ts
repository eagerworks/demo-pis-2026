import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const toDoItemRouter = createTRPCRouter({
  list: protectedProcedure.query(({ ctx }) => {
    return ctx.db.toDoItem.findMany({
      where: { createdBy: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),

  count: protectedProcedure.query(({ ctx }) => {
    return ctx.db.toDoItem.count({
      where: { createdBy: ctx.session.user.id },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.toDoItem.create({
        data: {
          title: input.title,
          description: input.description,
          createdBy: ctx.session.user.id,
        },
      });
    }),
});
