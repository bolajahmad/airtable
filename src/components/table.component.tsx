import React, { useCallback } from 'react';
import { ImArrowDownRight2, ImArrowRight2, ImArrowUp2 } from 'react-icons/im';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';
import MenuVertical from '../assets/menu_vert.svg';
import { ITableProps } from '../models';
import { Table } from './sub-components';


const Wrapper = styled.div`
	max-width: 1024px;
	
  .name_col {
    display: flex;
    align-items: center;

    .arrow {
      width: 1em;
      height: 1em;
      border-radius: 50%;
      color: #006FD6;
      display: inline-flex;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      border: 1px solid currentColor;
    }
  }
`;

const RiskColStyle = styled.div<{
  risk: ITableProps['risk'];
}>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ risk }) => {
		if (risk === 'Low') { return '#3AB65C'; }
		if (risk === 'Mid') { return '#3C3AB6'; }
		return '#B63A3A';
	}}
`;


export const TableComponent: React.FC<{
  data: ITableProps[];
}> = ({ data }) => {
	const StatusStyle = useCallback((status: number): React.CSSProperties => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2px 1em',
		borderRadius: '0.8em',
		color: status === 0 ? '#8C70FF' : '#F4B400',
		backgroundColor: status === 0 ? '#F6F3FF' : '#FFF6DE'
	}), []);

	return (
		<Wrapper>
			<Table
				collectionName="User dashboard"
				columns={[
					{ 
						Header: 'NAME',
						accessor: ({ name }: ITableProps) => (
							<div className="name_col">
								<span className="arrow">
									<MdKeyboardArrowDown />
								</span>
								<span style={{ padding: '0 1em' }}>{name}</span>
							</div>
						)
					},
					{
						Header: 'LOCATION',
						accessor: ({ location }: ITableProps) => (
							<div>
								<p>{location.city}</p>
								<p style={{ color: '#878592', marginTop: '0.75em' }}>
									{location.street}
								</p>
							</div>
						)
					},
					{
						Header: 'STATUS',
						accessor: ({ status }: ITableProps) => (
							<div style={StatusStyle(status)}>
								{status > 0 ? `${status} issues found` : 'No Issues'}
							</div>
						)
					},
					{
						Header: 'ENTRIES',
						accessor: ({ entries }: ITableProps) =>(
							<div className="entries_col" style={{ paddingLeft: '1em' }}>
								<p>&bull; {entries.amount}</p>
								<p style={{ color: '#878592', marginTop: '0.75em' }}>
									{entries.isHomogenous ? 'Homogenous' : 'Heterogeneous'}
								</p>
							</div>
						)
					},
					{
						Header: 'RISK PROFILE',
						accessor: ({ risk }: ITableProps) => (
							<RiskColStyle risk={risk}>
								<div style={{ display: 'contents' }}>
									<span>
										{risk === 'Low' && <ImArrowDownRight2 />}
										{risk === 'Mid'  && <ImArrowRight2 />}
										{risk === 'High' && <ImArrowUp2 />}
									</span>
									<span>
										{risk} Risk
									</span>
								</div>
								<img src={MenuVertical} alt="" />
							</RiskColStyle>
						)
					}
				]}
				data={data}
			/>
		</Wrapper>
	);
};