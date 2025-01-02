import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from '../Modal';
import Calendar from '../Habit/Calendar';

function CalendarModal() {
	const location = useLocation();
	const { completedDays, frequency, colorPalette, modalTitle } = location.state;

	return (
		<Modal title={modalTitle}>
			<div className={styles.calendarWrapper}>
				<div className={styles.streakInfo}>
					<div>
						<h3>Total Completed</h3>
						<strong>{completedDays.length}</strong>
					</div>
				</div>
				<div className={styles.calendarContainer}>
					<Calendar
						colorPalette={colorPalette}
						completedDays={completedDays}
						frequency={frequency}
					/>
				</div>
			</div>
		</Modal>
	);
}

export default CalendarModal; 