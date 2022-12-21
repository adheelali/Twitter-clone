import { useEffect, useRef } from "react";

function SidebarLink({ Icon, text }) {

  const sidebar = useRef(null);

  const classSwitch = () => {
    const sidebarCurrent = document.querySelectorAll('.sidebarLink')
    sidebarCurrent.forEach(element => element.classList.remove('sidebarLink--active'))

    sidebar.current.classList += ' sidebarLink--active'
  }

  useEffect(() => {
    if (text == 'Home') {
      sidebar.current.classList += ' sidebarLink--active'
    }
  }, []);

  return (
    <div
    ref={sidebar}
    onClick={classSwitch}
      className={`sidebarLink || text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
