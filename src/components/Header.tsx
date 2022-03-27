/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  -webkit-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
`;

const nav__container = css`
  width: 920px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const nav__logo = css`
  font-size: 20px;
  font-weight: bold;
`;

const nav__items = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const link__item = css`
  text-decoration: none;
  color: #646464;
  padding-bottom: 10px;
`;

const link__selected__item = css`
  ${link__item}
  color: #1a1a1a;
  padding-bottom: 7px;
  border-bottom: 3px solid #1a1a1a;
`;

function Header() {
  const location = useLocation();
  const links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/todo",
      name: "Todo",
    },
    {
      to: "/movie",
      name: "Movie",
    },
  ];

  return (
    <div css={header}>
      <nav css={nav__container}>
        <div css={nav__logo}>전진호</div>
        <div css={nav__items}>
          {links.map((link) => {
            return (
              <Link
                css={
                  location.pathname === link.to
                    ? link__selected__item
                    : link__item
                }
                to={link.to}
                key={link.to}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Header;
