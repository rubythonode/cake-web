import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Name = styled.h1`
`;

const Image = styled.img`
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
