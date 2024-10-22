import { TodoWrapper } from "~/widgets/TodoWrapper/ui/TodoWrapper";

export default function HomePage() {
  return (
    <main className="flex min-h-page flex-col items-center justify-center gap-y-5 p-4 text-black">
      <TodoWrapper />
    </main>
  );
}
