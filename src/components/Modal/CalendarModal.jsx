import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from '../Modal';
import Calendar from '../Habit/Calendar';

function CalendarModal() {
	const location = useLocation();
	console.log("CalendarModal location:", location);

	if (!location.state) {
		return (
			<Modal title="Calendar">
				<div className={styles.calendarWrapper}>
					<div className={styles.streakInfo}>
						<div>
							<h3>Error</h3>
							<strong>No data available</strong>
						</div>
					</div>
				</div>
			</Modal>
		);
	}

	const { completedDays, frequency, colorPalette, modalTitle } = location.state;
	console.log("CalendarModal props:", { completedDays, frequency, colorPalette, modalTitle });

	return (
		<Modal title={modalTitle || "Calendar View"}>
			<div className={styles.calendarWrapper}>
				<div className={styles.streakInfo}>
					<div>
						<h3>Total Completed</h3>
						<strong>{completedDays?.length || 0}</strong>
					</div>
				</div>
				<div className={styles.calendarContainer}>
					<Calendar
						colorPalette={colorPalette}
						completedDays={completedDays || []}
						frequency={frequency || 1}
					/>
				</div>
			</div>
		</Modal>
	);
}

export default CalendarModal; 