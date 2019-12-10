import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import RoundButton from '../RoundButton';

import './styles/main.css';

const Title = styled.h2`
`;

const StyledSvg = styled.svg`
  width: 30%;
  transform: rotate(45deg);
  margin-top: 80px;
  margin-bottom: -50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  z-index: 9;
`;

type MainMapProps = {
  value: string;
};

type MainMapState = {
  floor: 1 | 2;
};

export default class MainMap extends React.Component<MainMapProps, MainMapState> {
  constructor(props: MainMapProps) {
    super(props);

    this.state = {
      floor: 1,
    };

    this.FirstFloor = this.FirstFloor.bind(this);
    this.SecondFloor = this.SecondFloor.bind(this);
    this.onClickFloor = this.onClickFloor.bind(this);
  }

  public componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  public render() {
    const { floor } = this.state;
    const Floor = (floor === 1) ? this.FirstFloor : this.SecondFloor;
    return (
      <>
        <Title>본관</Title>
        <Floor />
        <ButtonContainer>
          <RoundButton
            value="1F"
            selected={floor === 1}
            onClick={() => this.onClickFloor(1)}
          />
          <RoundButton
            value="2F"
            selected={floor === 2}
            onClick={() => this.onClickFloor(2)}
          />
          <ReactTooltip />
        </ButtonContainer>
      </>
    );
  }

  private onClickFloor(floor: 1 | 2) {
    const { floor: prevFloor } = this.state;
    if (prevFloor !== floor) {
      this.setState({
        floor,
      });
    }
  }

  private FirstFloor() {
    return (
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1217 1177">
          <g id="레이어_2" data-name="레이어 2">
            <g id="레이어_1-2" data-name="레이어 1">
              <g id="본관_1층" data-name="본관 1층">
                <path
                  id="본관"
                  className="cls-1"
                  d="M1129,2c-.34,0-.67,0-1,0V2H412V59H240V84H181.78A74.78,74.78,0,0,0,107,158.78V240H79V365H2v724a86,86,0,0,0,172,0H429V578A160,160,0,0,0,589,418V391h539V174c.33,0,.66,0,1,0a86,86,0,0,0,0-172Z"
                />
                <polyline
                  id="상단"
                  className="cls-2"
                  points="240 84 363 174 1129 174 1129 2"
                />
                <polyline
                  id="하단"
                  className="cls-2"
                  points="589 391 589 239 1128 239"
                />
                <path
                  id="_1학년교실2"
                  data-name="1학년교실2"
                  data-tip="교실"
                  className="cls-3"
                  d="M265,1089c2.29,0,0-511,0-511H429v511Z"
                />
                <path
                  id="_1학년교실"
                  data-name="1학년교실"
                  data-tip="교실"
                  className="cls-3"
                  d="M174,1089l-1-727L107,239H79V365H2v726.43A83.58,83.58,0,0,0,85.57,1175h4.86A83.58,83.58,0,0,0,174,1091.43Z"
                />
                <rect
                  id="과학준비실"
                  className="cls-3"
                  x="776"
                  y="2"
                  width="87.38"
                  height="172"
                />
                <polyline
                  id="교장실"
                  className="cls-3"
                  points="493 174 493 2 412 2 412 174"
                />
                <polygon
                  id="여자화장실"
                  className="cls-3"
                  points="241 83 241 59 412 59 412 174 364.03 173.75 241 83"
                />
                <rect
                  id="과학실"
                  className="cls-3"
                  data-tip="과학실"
                  x="493"
                  y="2"
                  width="283"
                  height="172"
                />
                <rect
                  id="상담실"
                  data-tip="상담실"
                  className="cls-3 clickable"
                  x="863"
                  y="239"
                  width="91.38"
                  height="152"
                />
                <rect id="방송실" className="cls-3" x="808" y="239" width="55" height="152" />
                <rect
                  id="교무실"
                  className="cls-3"
                  data-tip="교무실"
                  x="589"
                  y="239"
                  width="219"
                  height="152"
                />
                <rect
                  id="북카페"
                  className="cls-3 clickable"
                  data-tip="북카페"
                  x="954"
                  y="239"
                  width="174.38"
                  height="152"
                />
                <rect
                  id="비즈쿨실"
                  className="cls-3 clickable"
                  data-tip="비즈쿨실"
                  x="863"
                  y="2"
                  width="265"
                  height="172"
                />
                <path id="어디지" className="cls-3" d="M1128,2V174a86,86,0,0,0,0-172Z" />
              </g>
            </g>
          </g>
        </StyledSvg>
    );
  }

  private SecondFloor() {
    return (
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1217 1177">
        <g id="레이어_2" data-name="레이어 2">
          <g id="레이어_1-2" data-name="레이어 1">
            <g id="본관2층">
              <path
                className="cls-1"
                d="M1129,2c-.34,0-.67,0-1,0V2H412V59H240V84H181.78A74.78,74.78,0,0,0,107,158.78V240H79V365H2v724a86,86,0,0,0,172,0H429V578A160,160,0,0,0,589,418V391h539V174c.33,0,.66,0,1,0a86,86,0,0,0,0-172Z"
              />
              <polyline className="cls-1" points="240 84 363 174 1129 174 1129 2"/>
              <polyline className="cls-1" points="174 1089 173 362 107 239"/>
              <path className="cls-1" d="M429,578H265s2.29,511,0,511"/>
              <polyline className="cls-1" points="589 391 589 239 1128 239"/>
              <polygon className="cls-2 clickable" data-tip="이비실" points="1033 176 1033 2 853 2 853 174.99 1033 176"/>
              <polygon className="cls-2" points="1128 177 1128 2 1033 2 1033 175.99 1128 177"/>
              <polygon className="cls-2 clickable" data-tip="디컨실" points="853 175 853 2 624 2 624 174 853 175"/>
              <polygon className="cls-2" data-tip="교실" points="767 391 767 239 589 239 589 390.12 767 391"/>
              <polygon className="cls-2" data-tip="교실" points="943 391 943 239 767 239 767 390.12 943 391"/>
              <polygon className="cls-2 clickable" data-tip="방과후실" points="1128 391 1128 239 943 239 943 390.12 1128 391"/>
              <rect className="cls-2" data-tip="교무실" x="412" y="2" width="212" height="172"/>
              <line className="cls-1" x1="943.38" y1="391" x2="943.38" y2="239"/>
              <line className="cls-1" x1="767" y1="391" x2="767" y2="239"/>
              <path
                id="_1학년교실2"
                data-name="1학년교실2"
                data-tip="교실"
                className="cls-2"
                d="M265,1089c2.29,0,0-511,0-511H429v511Z"
              />
              <path
                id="_1학년교실"
                data-name="1학년교실"
                data-tip="교실"
                className="cls-2"
                d="M174,1089l-1-727L107,239H79V365H2v726.43A83.58,83.58,0,0,0,85.57,1175h4.86A83.58,83.58,0,0,0,174,1091.43Z"
              />
              <polygon
                id="여자화장실"
                className="cls-2"
                points="240 83 240 59 411 59 411 174 363.03 173.75 240 83"
              />
              <path
                className="cls-2"
                d="M1128,175c.33,0,.66,0,1,0a86,86,0,0,0,0-172c-.34,0-.67,0-1,0Z"
              />
            </g>
          </g>
        </g>
      </StyledSvg>
    );
  }
}
