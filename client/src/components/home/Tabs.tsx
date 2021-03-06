import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { NavLink } from 'react-router-dom';
import { media } from '../../libs/styles';

interface TabProps {
  native: string;
}

const Taps: React.FC<TabProps> = ({ native }) => {
  return (
    <Container>
      <ul className="nav-list">
        <li className={`soldier ${native === 'soldier' ? 'selected' : ''}`}>
          <NavLink to="/soldier" activeClassName="active">
            현역메뉴
          </NavLink>
        </li>
        <li className={`reserve ${native === 'reserve' ? 'selected' : ''}`}>
          <NavLink to="/reserve" activeClassName="active">
            예비역메뉴
          </NavLink>
        </li>
        <li className={`general ${native === 'general' ? 'selected' : ''}`}>
          <NavLink to="/general" activeClassName="active">
            일반메뉴
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default Taps;

// Styles
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 1.25rem;

  ${media.tablet} {
    width: 100%;
  }

  .nav-list {
    list-style: none;
  }

  .nav-list a {
    text-decoration: none;
    transition: color 0.3s ease-out;
    color: inherit;
  }

  .nav-list li {
    position: relative;
    display: inline-block;
    margin: 5px;
    letter-spacing: -1px;
    margin-left: 12px;
  }

  .nav-list li:after,
  .nav-list li:before,
  .nav-list a:before,
  .nav-list a:after {
    position: absolute;
    content: '';
    border-radius: 4px;
  }

  .nav-list li:after,
  .nav-list li:before {
    bottom: -4px;
    height: 4px;
  }

  .nav-list li:not(.selected):before {
    left: 0;
    right: -2px;
  }

  .nav-list li.selected:after {
    left: 0;
    right: 39px;
  }

  .nav-list li.selected:before {
    right: -2px;
    width: 13px;
  }

  .nav-list .selected a:before {
    height: 22px;
    width: 4px;
    bottom: -22px;
    right: 7px;
  }

  .nav-list .selected a:after {
    height: 4px;
    width: 40px;
    bottom: -13px;
    right: 5px;
    transform: rotate(30deg);
  }

  .soldier:after,
  .soldier:before,
  .soldier a:after,
  .soldier a:before {
    background-color: ${oc.cyan[6]};
  }

  .soldier a {
    &.active {
      color: ${oc.cyan[5]};
    }
  }

  .reserve:after,
  .reserve:before,
  .reserve a:after,
  .reserve a:before {
    background-color: ${oc.lime[5]};
  }

  .reserve a {
    &.active {
      color: ${oc.lime[4]};
    }
  }

  .general:after,
  .general:before,
  .general a:after,
  .general a:before {
    background-color: ${oc.orange[4]};
  }

  .general a {
    &.active {
      color: ${oc.orange[3]};
    }
  }
`;
