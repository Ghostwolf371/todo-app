const Header = ({ todoNumber }: { todoNumber: number }) => {
  return (
    <header>
      <h1 className="text-gradient">
        You have{" "}
        {todoNumber != 1
          ? todoNumber + " open tasks."
          : todoNumber + " open task."}
      </h1>
    </header>
  );
};
export default Header;
