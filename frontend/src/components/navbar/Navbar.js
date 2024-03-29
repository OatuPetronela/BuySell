import { Disclosure } from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { logout } from "actions/userAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          {" "}
          <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div class="logo">
                  <Link to="/">
                    <h3>
                      Buy
                      <span className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                        Sell
                      </span>
                    </h3>
                  </Link>
                </div>
              </div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-20 xl:col-span-6">
                <div className="flex items-center px-6 py-9 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                  <div className="w-5/6">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-0 lg:block">
                <div className="flex items-center">
                  <Link to="/message">
                    <button className="inline-flex items-center rounded-md border border-transparent  text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 text-md font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Mesaje
                      <ChatBubbleLeftIcon
                        className="ml-2 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </Link>
                  <Link to="/favourite">
                    <button className="ml-1 mr-4">
                      <HeartIcon className=" block w-10 h-10 rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"></HeartIcon>
                    </button>
                  </Link>
                  <Link to="/new-product">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4  py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Adauga anunt nou
                      <PlusIcon
                        className="ml-2 -mr-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </Link>
                  {userInfo ? (
                    <>
                      <span className="text-white ml-4 mr-6">
                        Bine ai venit <b>{userInfo.fname}</b>
                      </span>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <span className="sr-only">Options</span>
                            <EllipsisVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="0"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Setari cont
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="0"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Suport
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    onClick={logoutHandler}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Deconectare
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <Link to="/login">
                      <button className="inline-flex items-center rounded-md border border-transparent  text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 text-md font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <UserIcon
                          className="ml-2 mr-2 h-6 w-6"
                          aria-hidden="true"
                        />
                        Conecteaza-te
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            {" "}
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/message"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Mesaje
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/favourite"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Favorite
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/new-product"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Adauga anunt nou
              </Disclosure.Button>
              {userInfo ? (
                <>
                  <span className="text-white ml-4 mr-6">
                    Bine ai venit <b>{userInfo.fname}</b>
                  </span>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <span className="sr-only">Options</span>
                        <EllipsisVerticalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="0"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Setari cont
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="0"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Suport
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                onClick={logoutHandler}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Deconectare
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </>
              ) : (
                <Link to="/login">
                  <button className="inline-flex items-center rounded-md border border-transparent  text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 text-md font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <UserIcon
                      className="ml-2 mr-2 h-6 w-6"
                      aria-hidden="true"
                    />
                    Conecteaza-te
                  </button>
                </Link>
              )}
            </div>
          </Disclosure.Panel>{" "}
        </>
      )}
    </Disclosure>
  );
}
