/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { TableInstance, TableOptions, useTable } from 'react-table';
import styled from 'styled-components';


const Wrapper = styled.div`
  table {
		font-weight: bold;
		border-collapse: collapse;
		border-spacing: 0 0;
		text-align: left;
		width: 100%;

		th, td {
			padding: 1em 0 1em 1em;
			vertical-align: middle;
			position: relative;
			border: 1px solid;
			border-color: rgba(183, 183, 183, 0.25) transparent;

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

	@media (max-width: 1000px) {
		thead {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			display: none;
		}

		tbody {
			display: grid;
			grid-auto-columns: auto;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 20px;
		}

		tr {
			border: 1px solid rgba(183, 183, 183, 0.25);
		}

		td, th {
			display: flex;
			padding: 10px 20px;
			font-weight: normal;
			border: none !important;
			background: none;

			:first-child {
				margin-top; 10px;
			}

			:last-child {
				margin-bottom: 10px;
			}
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