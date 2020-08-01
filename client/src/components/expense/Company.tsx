import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import MenuButton from '../common/MenuButton';

interface CompanyProps {
  husbandCompany: string;
  brideCompany: string;
  husbandAdd: string;
  brideAdd: string;
  husbandToday: string;
  brideToday: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onCancel: () => void;
}

const Company: React.FC<CompanyProps> = ({
  husbandCompany,
  brideCompany,
  husbandAdd,
  brideAdd,
  husbandToday,
  brideToday,
  onChange,
  onSubmit,
  onBack,
  onCancel,
}) => {
  const husbandCompanyRef = useRef<HTMLInputElement>(null);
  const brideCompanyRef = useRef<HTMLInputElement>(null);
  const husbandAddRef = useRef<HTMLInputElement>(null);
  const brideAddRef = useRef<HTMLInputElement>(null);
  const husbandTodayRef = useRef<HTMLInputElement>(null);
  const brideTodayRef = useRef<HTMLInputElement>(null);

  const onBrideCompanyTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideCompanyRef.current.focus();
    }
  };

  const onHusbandAddTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandAddRef.current.focus();
    }
  };

  const onBrideAddTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideAddRef.current.focus();
    }
  };

  const onHusbandTodayTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      husbandTodayRef.current.focus();
    }
  };

  const onBrideTodayTarget = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-ignore
      brideTodayRef.current.focus();
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    // @ts-ignore
    husbandCompanyRef.current.focus();
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <h2 className="title">웨딩 업체</h2>
      </LogoWrapper>

      <Content>
        <table>
          <tbody>
            <tr>
              <th>
                웨딩업체 이용
                <br />
                (신랑)
              </th>
              <td>
                <Input
                  type="text"
                  name="husbandCompany"
                  value={husbandCompany}
                  onChange={onChange}
                  ref={husbandCompanyRef}
                  onKeyPress={onBrideCompanyTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                웨딩업체 이용
                <br />
                (신부)
              </th>
              <td>
                <Input
                  type="text"
                  name="brideCompany"
                  value={brideCompany}
                  onChange={onChange}
                  ref={brideCompanyRef}
                  onKeyPress={onHusbandAddTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">
                웨딩업체 추가
                <br />
                (신랑)
              </th>
              <td>
                <Input
                  type="text"
                  name="husbandAdd"
                  value={husbandAdd}
                  onChange={onChange}
                  ref={husbandAddRef}
                  onKeyPress={onBrideAddTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="orange">
                웨딩업체 추가
                <br />
                (신부)
              </th>
              <td>
                <Input
                  type="text"
                  name="brideAdd"
                  value={brideAdd}
                  onChange={onChange}
                  ref={brideAddRef}
                  onKeyPress={onHusbandTodayTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="cyan">
                웨딩업체 추가
                <br />
                (신랑)
              </th>
              <td>
                <Input
                  type="text"
                  name="husbandToday"
                  value={husbandToday}
                  onChange={onChange}
                  ref={husbandTodayRef}
                  onKeyPress={onBrideTodayTarget}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="cyan">
                웨딩업체 추가
                <br />
                (신부)
              </th>
              <td>
                <Input
                  type="text"
                  name="brideToday"
                  value={brideToday}
                  onChange={onChange}
                  ref={brideTodayRef}
                  onKeyPress={onKeyPress}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <MenuButton onSubmit={onSubmit} onBack={onBack} onCancel={onCancel} />
      </Content>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoWrapper = styled.div`
  background: ${oc.violet[5]};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.512rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.violet[2]};
  }
`;

const Content = styled.div`
  background: white;
  padding: 1.215rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2.title {
    color: ${oc.indigo[9]};
    padding-bottom: 0.3rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 160px;
    text-align: center;
  }
  th {
    background: ${oc.indigo[4]};
    color: white;
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;
