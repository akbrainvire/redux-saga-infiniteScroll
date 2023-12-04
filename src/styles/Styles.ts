import styled from "styled-components";

export const List = styled.li`
  flex: auto;
  text-align: center;
  flex-basis: 21%;
  list-style: none;
  width: 100%;
  list-style-type: none;
  padding: 50px;
  background-color: #fff398;
  color: black;
  border-radius: 20px;
  margin: 10px;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

export const Heading = styled.span`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: black;
  background-color: #ffd0d0;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;
