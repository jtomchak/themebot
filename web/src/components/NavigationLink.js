import { NavLink, routes, useMatch } from '@redwoodjs/router'

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
  daily: {
    route: routes.daily(),
    Path: () => (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    ),
  },
  theme: {
    route: routes.theme(),
    Path: () => (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
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

const NavigationLink = ({ destination, children }) => {
  const { route, Path } = NAVIGATION[destination]
  const matchInfo = useMatch(route)
  return (
    <NavLink
      to={route}
      isActive={matchInfo.match}
      activeClassName="bg-gray-200 text-gray-900"
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
    </NavLink>
  )
}

export default NavigationLink
