import Javascript from "./left-sidebar/Javascript";

const LeftSidebar = () => {
  return (
    <>
      <aside className="w-3/12 h-full pb-8 font-roboto text-body font-light text-text-paragraph overflow-y-auto lay-max:hidden md-max:text-caption">
        <Javascript />
      </aside>
    </>
  );
};

export default LeftSidebar;
