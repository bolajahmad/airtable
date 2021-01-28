import React from 'react';
import { MdInfoOutline } from 'react-icons/md';
import styled from 'styled-components';
import { IMetric } from '../../models';


const Wrapper = styled.div`
  padding: 2em 1em;
  height: 9em;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .metric {
    width: 70%;

    h4 {
      color: #9696A0;
      margin-top: 1em;
    }
  }
`;


export const MetricBox: React.FC<IMetric> = ({ metric, title }) => {
	return (
		<Wrapper>
			<div className="metric">
				<h3>{metric}</h3>
				<h4>{title}</h4>
			</div>
			<div className="metric_icon">
				<MdInfoOutline width="28" height="28" size="28" />
			</div>
		</Wrapper>
	);
};