import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../libs/styles';

interface ButtonProps {
  submit?: boolean;
  cancel?: boolean;
  remove?: boolean;
}

interface ListType {
  name: string;
  native: string;
  divide: string;
  price: number;
  unit: string;
  count: number;
  amount: number;
}

interface CartProps {
  title: string;
  hall: string;
  etc: string;
  newList: string;
  onChangeField: (payload: { key: string; value: string | number }) => void;
  totalAmount: number;
  onRemove: (key: string) => void;
  onRemoveAll: () => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Cart: React.FC<CartProps> = ({
  title,
  hall,
  etc,
  newList,
  onChangeField,
  totalAmount,
  onRemove,
  onRemoveAll,
  onSubmit,
}) => {
  let cartList: ListType[] = [];

  if (newList) {
    cartList = JSON.parse(unescape(newList));
  } else {
    cartList = [];
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeField({ key: name, value });
  };

  return (
    <Container>
      <h2>전표 확인(종합)</h2>

      <table className="table">
        <thead>
          <tr>
            <th>적용</th>
            <th>수량</th>
            <th>단가/가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {newList && cartList ? (
            Object.keys(cartList).map((list: any) => (
              <tr key={list}>
                <td>
                  [ {cartList[list].native} ]
                  <br />
                  {cartList[list].name}
                </td>
                <td>{cartList[list].count}</td>
                <td>
                  (
                  {cartList[list].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  원)
                  <br />{' '}
                  <strong>
                    {cartList[list].amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </strong>
                </td>
                <td>
                  <button onClick={() => onRemove(list)}>삭 제</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      <SubmitPane>
        <div className="total">
          예상 결제금액 :{' '}
          <span style={{ color: 'red', fontSize: '2rem' }}>
            {totalAmount &&
              totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>{' '}
          원
        </div>
      </SubmitPane>

      <Form>
        <div className="center">
          <InputGroup>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>
              행사명 <small>(필수)</small>
            </label>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="hall"
              value={hall}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>
              행사홀 <small>(필수)</small>
            </label>
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              name="etc"
              value={etc}
              onChange={onChange}
              required
            />
            <span className="bar" />
            <label>기타사항</label>
          </InputGroup>
        </div>
        <Button submit={true} onClick={onSubmit}>
          전송하기
        </Button>
        <Button remove={true} onClick={onRemoveAll}>
          전체 삭제
        </Button>
      </Form>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  ${media.phone} {
    width: 100%;
    padding: 0.2rem;
  }
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }
  th {
    background: ${oc.teal[7]};
    color: white;
  }
  td {
    border-bottom: 1px solid ${oc.teal[7]};
    strong {
      color: blue;
    }
    button {
      border: none;
      outline: none;
      padding: 0;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      height: 40px;
      font-size: 0.8rem;
      border: 1px solid ${oc.red[9]};
      border-radius: 4px;
      background: white;
      color: ${oc.red[9]};
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: ${oc.red[9]};
        color: white;
        ${shadow(1)};
      }
    }
  }
`;

const SubmitPane = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 1rem;
  .total {
    float: right;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  .center {
    width: 350px;
  }
  button {
    float: right;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: ${oc.gray[9]};
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 0;
      background: ${oc.cyan[8]};
      height: 3px;
      transition: left 0.2s ease-out, right 0.2s ease-out;
    }
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${oc.cyan[6]};
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: ${oc.teal[6]};
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  ${(props) =>
    props.remove &&
    css`
      border: 1px solid ${oc.red[6]};
      background: white;
      color: ${oc.red[6]};
      &:hover {
        background: ${oc.red[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.submit &&
    css`
      border: 1px solid ${oc.indigo[6]};
      background: white;
      color: ${oc.indigo[6]};
      &:hover {
        background: ${oc.indigo[6]};
        color: white;
        ${shadow(1)};
      }
    `}
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-right: 0.6rem;
  }
`;
