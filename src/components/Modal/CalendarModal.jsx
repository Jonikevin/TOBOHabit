import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from './Modal';
import Calendar from '../Habit/Calendar';
import CompactCalendar from '../Habit/CompactCalendar';

// stores
import { useSettingsStore } from '../../stores/settingsStore';

function CalendarModal() {
	const { state } = useLocation();
	const { completedDays, colorPalette, frequency, modalTitle } = state;
	const settings = useSettingsStore((s) => s.settings);

	const CalendarComponent = settings.calendarView === 'compact' ? CompactCalendar : Calendar;

	return (
		<Modal title={modalTitle}>
			<div className={styles.calendarWrapper}>
				<CalendarComponent
					{...{ completedDays, colorPalette, frequency }}
				/>
			</div>
		</Modal>
	);
}

export default CalendarModal; 