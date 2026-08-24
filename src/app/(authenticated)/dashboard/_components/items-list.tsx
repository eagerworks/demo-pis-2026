import { api } from "~/lib/trpc/server";
import { format } from "date-fns";

export default async function ItemsList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const items = await api.toDoItem.list();

  return (
    <>
      {items.length === 0 ? (
        <p className="text-sm text-foreground/60">No to-do items yet.</p>
      ) : (
        <ul className="flex flex-col gap-2 px-4">
          {items.map((item) => (
            <li key={item.id} className="list-decimal">
              <p className="font-medium">{item.title}</p>

              {item.description && (
                <p className="text-sm text-foreground/60">{item.description}</p>
              )}

              <p className="text-sm text-foreground/60">
                {format(item.createdAt, "d/M/yyyy")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
