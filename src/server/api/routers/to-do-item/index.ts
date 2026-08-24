import { createTRPCRouter } from "~/server/api/trpc";

import { countByAuthor } from "./count-by-author";
import { create } from "./create";
import { listByAuthor } from "./list-by-author";

export { countByAuthor, create, listByAuthor };

export const toDoItemRouter = createTRPCRouter({
  list: listByAuthor,
  count: countByAuthor,
  create,
});
