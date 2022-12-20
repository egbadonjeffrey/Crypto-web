import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

import style from "../styles/nav.module.css";

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

function NavLink({
  href,
  exact,
  children,
  colorChange,
  transparent,
  ...props
}) {
  const [onHover, setUnhover] = useState(false);

  const handleHover = () => {
    setUnhover(!onHover);
  };
  const handleUnhover = () => {
    setUnhover(!onHover);
  };

  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += transparent ? style.active : style.transparent;
  }

  if (onHover && !isActive) {
    props.className += transparent ? style.active : style.transparent;
  }

  return (
    <Link
      href={href}
      onMouseOver={handleHover}
      onMouseOut={handleUnhover}
      {...props}
    >
      {children}
    </Link>
  );
}
