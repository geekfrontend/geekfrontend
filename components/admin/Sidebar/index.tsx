import { FC, useRef, useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Route, routes } from "@/utils/route";
import Link from "next/link";
import Me from "@/public/me.png";
import Image from "next/image";

interface SidebarProps {
  setExpand: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ setExpand }) => {
  const [openedMenu, setOpenedMenu] = useState<
    Record<string, { open: boolean; height: string }>
  >({});
  const [activeName, setActiveName] = useState<string>("");
  const [isExpand, setIsExpand] = useState<boolean>(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState<boolean>(false);
  const activeLink =
    typeof window !== "undefined" ? window.location.pathname : "";

  const listRef = useRef<Record<string, HTMLUListElement | null>>({});

  useEffect(() => {
    const foundRoute = routes.find(
      (item) => activeName === "" && activeLink.includes(item.link as string)
    );
    if (foundRoute) {
      setActiveName(foundRoute.name);
    }
  }, [activeLink, activeName]);

  const handleHoverExpand = (value: boolean) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  const handleNavigate = (path: string) => {
    setActiveName(path);
  };

  const handleToggle = (name: string) => {
    const rootEl = name.split(".")[0];
    const isOpen = openedMenu[name]?.open ?? false;

    setOpenedMenu((prevState) => ({
      ...prevState,
      [name]: {
        open: !isOpen,
        height: isOpen ? "0px" : `${listRef.current[name]?.scrollHeight}px`,
      },
      [rootEl]: {
        open: rootEl === name ? !isOpen : true,
        height: `${
          (listRef.current[rootEl]?.scrollHeight ?? 0) +
          (isOpen
            ? -listRef.current[name]?.scrollHeight
            : listRef.current[name]?.scrollHeight)
        }px`,
      },
    }));
  };

  const generateMenu = (item: Route, index: number, recursive: number = 0) => {
    const classesActive = activeName === item.name ? "active" : "";
    const isChild = "child" in item && item.child;

    const handleClick = () => {
      if (isChild) {
        handleToggle(item.name);
      } else {
        handleNavigate(item.name);
      }
    };

    return (
      <li key={index}>
        <a
          href={item.link as string}
          tabIndex={0}
          id={item.id}
          onClick={handleClick}
          onKeyDown={(event) => {
            if (event.code === "Space") {
              handleClick();
            }
          }}
          className={[
            "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
            recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
            classesActive,
            activeName === item.name || activeName.split(".")[0] === item.name
              ? `text-blue-600 font-semibold ${
                  item.parent ? "bg-blue-200/20" : "bg-transparent"
                }`
              : "text-slate-500",
            "hover:bg-slate-300/20",
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            <div
              className={`truncate ${
                isExpand || isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {item.title}
            </div>
          </div>
          {isChild && (
            <div
              className={`${
                isExpand || isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </a>
        {isChild && (
          <ul
            ref={(el) => (listRef.current[item.name] = el)}
            className={[
              "transition-max-height overflow-hidden duration-300 ease-in-out",
              isExpand || isExpandOnHover ? "" : "h-0",
            ].join(" ")}
            style={{ maxHeight: `${openedMenu[item.name]?.height ?? "0px"}` }}
            key={item.name}
          >
            {item.child?.map((childItem, idx) =>
              generateMenu(childItem, idx, recursive + 1)
            )}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav
      role="navigation"
      className={[
        "bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
        "transition-all h-screen duration-300 ease-in-out md:fixed",
        `${
          isExpand
            ? "bg-slate-50 w-72"
            : isExpandOnHover
            ? "bg-slate-50/70 w-72 backdrop-blur-md"
            : "bg-slate-50 w-20"
        }`,
      ].join(" ")}
    >
      <button
        className="absolute z-50 top-16 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200"
        onClick={() => {
          setIsExpand((prevState) => {
            setExpand(!prevState);
            return !prevState;
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isExpand ? "rotate-0" : "rotate-180"
          } transform transition duration-500 h-4 w-4`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        onMouseEnter={() => handleHoverExpand(true)}
        onMouseLeave={() => handleHoverExpand(false)}
        className="relative h-screen overflow-hidden"
      >
        <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
          <div className="flex flex-col justify-between min-h-screen mb-0 list-none text-slate-500">
            <div
              className={`my-8 h-1/5 flex flex-col items-center overflow-x-hidden duration-300 ${
                isExpand || isExpandOnHover ? "px-3" : "px-5"
              }`}
            >
              <a
                href="/"
                className={`flex items-center rounded-lg w-full h-20 duration-300 ${
                  isExpand || isExpandOnHover
                    ? "bg-slate-300/25 px-4 gap-3"
                    : ""
                }`}
              >
                <div className="w-10 h-10 overflow-hidden duration-300 rounded-full shrink-0">
                  <Image src={Me} alt="Me" />
                </div>
                <div
                  className={`flex flex-col ${
                    isExpand || isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                  }`}
                >
                  <div className="text-base font-semibold truncate duration-300 text-slate-700">
                    Harke Wauran
                  </div>
                  <div className="text-sm truncate text-slate-500">
                    Frontend Developer
                  </div>
                </div>
              </a>
            </div>
            <div className="p-0 mt-3 mb-10 overflow-y-auto leading-10 ">
              <ul className="px-3 text-sm font-normal list-none">
                {routes.map((item, index) => generateMenu(item, index))}
              </ul>
            </div>
            <div className="px-4 py-2 my-8 h-1/5">
              <button className="block w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                Keluar
              </button>
            </div>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
};

export default Sidebar;
