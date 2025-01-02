import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from './Modal';
import Calendar from '../Habit/Calendar';

function CalendarModal() {
	const { state } = useLocation();
	console.log("Calendar Modal State:", state); // Debug log

	if (!state || !state.completedDays || !state.colorPalette) {
		return (
			<Modal title="Calendar">
				<div className={styles.calendarWrapper}>
					<div>No data available</div>
				</div>
			</Modal>
		);
	}

	const { completedDays, colorPalette, frequency, modalTitle } = state;

	return (
		<Modal title={modalTitle || "Calendar"}>
			<div className={styles.calendarWrapper}>
				<Calendar
					colorPalette={colorPalette}
					completedDays={completedDays}
					frequency={frequency || 1}
				/>
			</div>
		</Modal>
	);
}

export default CalendarModal; 