import React from 'react';
import { default as HistoryIcon, default as SummaryIcon } from '../assets/summary_icon.svg';
import { METRICS, UserDetails } from '../utils';
import { MainComponentStyles } from './styles';
import { MetricBox } from './sub-components/metric-box';


export const MainComponent: React.FC = () => {
	return (
		<MainComponentStyles>
			<h2 className="crumb">
				<span>Division</span> &gt; <span>Module</span>
			</h2>

			<div className="main">
				<div className="grid col-5">
					{METRICS.map(({ title, metric}, i) => (
						<div key={i}>
							<MetricBox title={title} metric={metric} />
						</div>
					))}
				</div>


				<div className="main_content">
					<aside>
						<div className="sidebar">
							<div className="sidebar_summary">
								<h3 className="title">
									<img src={SummaryIcon} alt="" />
									<span>Division Summary</span>
								</h3>

								<ul className="list">
									{UserDetails.map((detail, i) => (
										<li className={(detail.link ? 'list_item link' : 'list_item')} key={i}>
											<img src={detail.icon} alt="" />
											<span>{detail.detail}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="sidebar_history">
								<h3 className="title">
									<img src={HistoryIcon} alt="" />
									<span>Module History</span>
								</h3>

								<ul className="list">
									<li className="list_item">
										<h4>Searched &lsquo;Journal Entries&rsquo; on division module</h4>
										<p>22:10 15/09/2020 &bull; Web</p>
									</li>
									<li className="list_item">
										<h4>Searched &lsquo;Fingerptint Record&rsquo; on division module</h4>
										<p>22:10 15/09/2020 &bull; Web</p>
									</li>
									<li className="list_item">
										<h4>Searched &lsquo;Journal Entries&rsquo; on division module</h4>
										<p>22:10 15/09/2020 &bull; Web</p>
									</li>
								</ul>
							</div>
						</div>
					</aside>

					<div className="content_table">
            
					</div>
				</div>
			</div>
		</MainComponentStyles>
	);
};