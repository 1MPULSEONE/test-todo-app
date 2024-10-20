export const Header = () => {
  return (
    <nav
      className={
        "flex w-full items-center justify-between border-b p-4 text-xl font-semibold"
      }
    >
      <div>TODO App</div>
      <div className="flex flex-row items-center gap-x-4"></div>
    </nav>
  );
};
