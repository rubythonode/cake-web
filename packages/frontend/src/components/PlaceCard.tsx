import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 23px;
  box-shadow: 0 3px 17px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding: 3rem 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const Name = styled.h1`
  line-height: 1.31;
  letter-spacing: 4.34px;
  margin: 0;
  margin-bottom: 2rem;
  font-size: 2.8rem;
  font-weight: 900;
`;

const Image = styled.img`
  width: 380px;
  height: 170px;
  object-fit: contain;
  object-position: bottom;
`;

interface IPlaceCardProps {
  name: string;
  image: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

const PlaceCard: React.FC<IPlaceCardProps> = ({ name, image, onClick }) => {
  return (
    <Container
      onClick={onClick}
    >
      <Name>{name}</Name>
      <Image src={require(`../assets/places/${image}`)} />
    </Container>
  );
};

export default PlaceCard;
