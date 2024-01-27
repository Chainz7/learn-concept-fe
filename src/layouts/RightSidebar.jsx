import Javascript from "./right-sidebar/Javascript";

const RightSidebar = () => {
  return (
    <>
      <aside className="w-2/12 h-full pb-8 font-roboto text-body font-light text-text-paragraph overflow-y-auto md-max:w-0 md-max:hidden">
        <Javascript />
      </aside>
    </>
  );
};

export default RightSidebar;
