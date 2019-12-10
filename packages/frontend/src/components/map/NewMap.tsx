import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import RoundButton from '../RoundButton';

import './styles/new.css';

const StyledSvg = styled.svg`
  width: 30%;
  margin: 1.5rem 0;
  margin-bottom: 3.2rem;
`;

const Title = styled.h2`
`;

const ButtonContainer = styled.div`
  display: flex;
  z-index: 9;
`;

type NewMapProps = {
  value: string;
};

export default class NewMap extends React.Component<NewMapProps, {}> {
  constructor(props: NewMapProps) {
    super(props);

    this.FirstFloor = this.FirstFloor.bind(this);
  }

  public render() {
    const Floor = this.FirstFloor;

    return (
      <>
        <Title>신관</Title>
        <Floor />
        <ButtonContainer>
          <RoundButton value="1F" selected={true} />
          <ReactTooltip />
        </ButtonContainer>
      </>
    );
  }

  private FirstFloor() {
    return (
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1047 1034.02">
        <title>신관1층</title>
        <g id="레이어_2" data-name="레이어 2">
          <g id="레이어_1-2" data-name="레이어 1">
            <g id="신관1층">
              <path
                className="cls-1"
                d="M1045,869A162,162,0,0,0,883.5,707V658.5h-338V32.5h-139V2.5h-153v33h-134v27H2.5v454h117v117H19.5V927A104.53,104.53,0,0,0,124,1031.5l759.46.49C972.74,1031.72,1045,958.3,1045,869Z"
              />
              <polygon
                className="cls-1"
                points="374 1031.66 374 880 774 880 774 1032 374 1031.66"
              />
              <rect className="cls-1" x="545" y="658.5" width="338" height="156" />
              <polygon className="cls-1" points="360.42 264 545.5 264 545.5 658.5 360 658.5 360.42 264" />
              <polygon className="cls-1" points="2.42 264 187.5 264 187.5 516.5 2 516.5 2.42 264" />
              <polyline className="cls-1" points="19.5 736 264 736 264 1032" />
              <line className="cls-1" x1="188" y1="264" x2="363.65" y2="264" />
              <line className="cls-1" x1="360.19" y1="394.48" x2="547" y2="394.48" />
              <line className="cls-1" x1="359.19" y1="592.48" x2="546" y2="592.48" />
              <line className="cls-1" x1="359.19" y1="526.48" x2="546" y2="526.48" />
              <line className="cls-1" x1="717.6" y1="658.07" x2="717.6" y2="814" />
              <line className="cls-1" x1="628.6" y1="881" x2="628.6" y2="1030" />
              <line className="cls-1" x1="883" y1="880" x2="883" y2="1029" />
              <polygon className="cls-2" data-tip="인강실" points="188 517 188 264 2 264 2 515.54 188 517" />
              <polygon className="cls-2" points="718 814 718 659 545 659 545 813.1 718 814" />
              <polygon className="cls-2" data-tip="교무실" points="629 1032 629 880 374 880 374 1031.12 629 1032" />
              <polygon className="cls-2" data-tip="그린IT실" points="883 815 883 659 718 659 718 814.1 883 815" />
              <polygon className="cls-2" data-tip="IT프로젝트실" points="546 394 546 264 360 264 360 393.25 546 394" />
              <polygon className="cls-2" points="546 526 546 393 360 393 360 525.23 546 526" />
              <polygon className="cls-2" points="546 592 546 526 360 526 360 591.62 546 592" />
              <polygon className="cls-2" points="546 658 546 592 360 592 360 657.62 546 658" />
              <polygon className="cls-2" points="774 1032 774 880 629 880 629 1031.12 774 1032" />
              <path className="cls-2 clickable" data-tip="세미나실" d="M264,1032V736H19.5V924.74a105.55,105.55,0,0,0,104.26,105.54Z" />
              <polygon className="cls-2 clickable" data-tip="시청각실" points="545 264 545 32 406 32 406 2 253 2 253 35 119 35 119 62 2 62 2 264 545 264" />
            </g>
          </g>
        </g>
      </StyledSvg>
    );
  }
}
