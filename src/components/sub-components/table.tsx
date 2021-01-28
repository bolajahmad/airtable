/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { TableInstance, TableOptions, useTable } from 'react-table';
import styled from 'styled-components';


const Wrapper = styled.div`
  table {
		font-weight: bold;
		border-collapse: separate;
		border-spacing: 0 5px;
		text-align: left;
		width: 100%;

		th, td {
			padding: 1em 0 1em 1em;
			vertical-align: middle;
			position: relative;

			&:first-child {
				min-width: 10em;
				
				& > div {
					position: absolute;
					left: 6em;
					top: 35%;
				}
			}
			
			:first-child::before {
				content: '';
				position: absolute;
				top: 40%;
				left: 5%;
				height: 1em;
				width: 1em;
				border: 1px solid #9F9F9F;
				background: white;

				&:hover {
					background: whitesmoke;
				}
			}
		}

		td:first-child > div {
			left: 4em;
		}
		
		thead {
			background-color: #9F9F9F;
		}
	}
`;

interface TableProps<T extends object> extends TableOptions<T> {
  collectionName: string;
}

export const Table = <T extends object = any>({
	collectionName,
	columns,
	data,
}: TableProps<T>): any => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		rows
	}: TableInstance<any> = useTable({ columns, data });

	return (
		<Wrapper>
			{data.length > 0 ? (
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup, i) => (
							<tr {...headerGroup.getHeaderGroupProps()} key={i}>
								{headerGroup.headers.map((column, j) => (
									<th {...column.getHeaderProps()} key={j}>
										<div>
											<b>
												{column.render('Header')}
											</b>
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} key={i}>
									{row.cells.map((cell, j) => (
										<td {...cell.getCellProps()} key={j}>
											<div>{cell.render('Cell')}</div>
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<div>
					<span>There are no data to display for {collectionName}</span>
				</div>
			)}
		</Wrapper>
	);
};