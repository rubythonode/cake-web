import styled from 'styled-components';

const Time = styled.span`
  border-radius: 37px;
  border: solid 1px #505050;
  font-size: 0.98rem;
  font-weight: 300;
  line-height: 1.31;
  letter-spacing: 1.36px;
  color: #505050;
  padding: 0.2rem 0.8rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Time;
