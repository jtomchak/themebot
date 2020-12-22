import { Link, routes } from '@redwoodjs/router'

const NAVIGATION = {
  home: {
    route: routes.home(),
    Path: () => (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ), // Heroicon name: Home
  },
  about: {
    route: routes.about(),
    Path: () => (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ), // Heroicon name: User
  },
}

const NavLink = ({ destination, children }) => {
  const { route, Path } = NAVIGATION[destination]
  return (
    <Link
      to={route}
      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
    >
      {/* Heroicon name: users */}
      <svg
        className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <Path />
      </svg>
      {children}
    </Link>
  )
}

export default NavLink
