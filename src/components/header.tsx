import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { GrSplits } from 'react-icons/gr';
import { MdEventNote, MdHome, MdPerson } from 'react-icons/md';
import Logo from '../assets/logo.svg';
import { HeaderComponentStyles } from './styles';



export const HeaderComponent: React.FC = () => {
	return (
		<HeaderComponentStyles>
			<div className="navbar">
				<div className="logo_wrapper">
					<div className="logo">
						<img src={Logo} alt="logo" height="16" width="16" />
					</div>
					<h1>FE Engineer test</h1>
				</div>

				<nav>
					<ul className="nav">
						<li className="nav_item">
							<MdHome />
							<span>Home</span>
						</li>
						<li className="nav_item">
							<MdEventNote />
							<span>Entries</span>
						</li>
						<li className="nav_item selected">
							<GrSplits color="blue" />
							<span>Divisions</span>
						</li>
					</ul>
				</nav>

				<div className="last">
					<div className="nav_menu">
						<label>
							<div className="icon">
								<FaSearch />
							</div>
							<input type="search" />
						</label>

						<FaBell height="20" width="20" />

						<div className="profile">
							<div className="circle">
								<MdPerson height="20" width="20" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeaderComponentStyles>
	);
};