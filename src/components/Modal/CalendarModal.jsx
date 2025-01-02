import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from './Modal';
import Calendar from '../Habit/Calendar';

function CalendarModal() {
	const { state } = useLocation();
	const { completedDays, colorPalette, frequency, modalTitle } = state;

	return (
		<Modal title={modalTitle}>
			<div className={styles.calendarWrapper}>
				<Calendar
					{...{ completedDays, colorPalette, frequency }}
				/>
			</div>
		</Modal>
	);
}

export default CalendarModal; 