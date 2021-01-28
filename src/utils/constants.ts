import EntryIcon from '../assets/entry_icon.svg';
import Envelope from '../assets/envelope.svg';
import FingerPrint from '../assets/fingerprint.svg';
import Location from '../assets/location.svg';
import Phone from '../assets/phone.svg';
import { IDetail, IMetric, ITableProps } from '../models';

export const METRICS: IMetric[] = [
	{ metric: 31454, title: 'OngoingMetric' },
	{ metric: 2344, title: 'Past Metric' },
	{ metric: 14244, title: 'Missed Metric' },
	{ metric: 635, title: 'Failed Metric' },
	{ metric: 11334, title: 'Pending Metric' }
];

export const UserDetails: IDetail[] = [
	{ icon: Phone, detail: '0801 234 5678' },
	{ icon: Envelope, detail: 'asbfefr@gmail.com' },
	{ icon: Location, detail: 'Mojidi, Lagos' },
	{ icon: EntryIcon, detail: '2 Journal Entries', link: true },
	{ icon: FingerPrint, detail: '24 Fingerprints Found' }
];

export const TableData: ITableProps[] = [
	{
		name: 'Courtney Henry',
		location: {
			city: 'Lagos',
			street: '775 Rolling Green Rd.'
		},
		status: 0,
		entries: {
			amount: 19,
			isHomogenous: true,
		},
		risk: 'Low'
	},
	{
		name: 'Darell Steward',
		location: {
			city: 'Lagos',
			street: '7529 E. Pecan St.'
		},
		status: 2,
		entries: {
			amount: 10,
			isHomogenous: false,
		},
		risk: 'Mid'
	},
	{
		name: 'Cody Fisher',
		location: {
			city: 'Lagos',
			street: '3605 Parker Rd..'
		},
		status: 0,
		entries: {
			amount: 8,
			isHomogenous: true,
		},
		risk: 'Mid'
	},
	{
		name: 'Bessie Cooper',
		location: {
			city: 'Lagos',
			street: '775 Rolling Green Rd.'
		},
		status: 1,
		entries: {
			amount: 12,
			isHomogenous: false,
		},
		risk: 'High'
	},
	{
		name: 'Annette Black',
		location: {
			city: 'Lagos',
			street: '8080 Railroad St.'
		},
		status: 0,
		entries: {
			amount: 13,
			isHomogenous: false,
		},
		risk: 'Low'
	},
	{
		name: 'Jenny Wilson',
		location: {
			city: 'Lagos',
			street: '8080 Railroad St.'
		},
		status: 5,
		entries: {
			amount: 18,
			isHomogenous: false,
		},
		risk: 'High'
	},
	{
		name: 'Darlene Robertson',
		location: {
			city: 'Lagos',
			street: '3890 Poplar Dr.'
		},
		status: 2,
		entries: {
			amount: 6,
			isHomogenous: false,
		},
		risk: 'Mid'
	},
	{
		name: 'Ralph Edwards',
		location: {
			city: 'Lagos',
			street: '8558 Green Rd.'
		},
		status: 0,
		entries: {
			amount: 14,
			isHomogenous: true,
		},
		risk: 'Low'
	}
];