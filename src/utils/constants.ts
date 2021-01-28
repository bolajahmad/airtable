import EntryIcon from '../assets/entry_icon.svg';
import Envelope from '../assets/envelope.svg';
import FingerPrint from '../assets/fingerprint.svg';
import Location from '../assets/location.svg';
import Phone from '../assets/phone.svg';
import { IDetail, IMetric } from '../models';

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