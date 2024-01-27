import Javascript from "./right-sidebar/Javascript";

const RightSidebar = () => {
  return (
    <>
      <aside className="w-2/12 bg-background-light font-roboto text-headline-2 font-normal text-text-main md-max:w-0 md-max:hidden">
        <Javascript />
      </aside>
    </>
  );
};

export default RightSidebar;
