import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import { shadow } from '../../libs/styles';

interface AuthProps {
  mode?: string;
}

const AuthTemplate: React.FC<AuthProps> = ({ mode, children }) => {
  return (
    <AuthTemplateBlock>
      <LogoBlock>
        <Link to="/">{mode === 'login' ? '로그인' : '사원등록'}</Link>
      </LogoBlock>
      <Content>{children}</Content>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoBlock = styled.div`
  background: ${oc.cyan[5]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    font-size: 2.4rem;
    font-weight: 800;
    text-decoration: none;
    letter-spacing: 5px;
  }
`;

const Content = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;
