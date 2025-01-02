import styles from '../../css/Modal.module.css';

// router
import { useLocation, useNavigate } from 'react-router-dom';

// components
import Modal from '../Modal';
import Calendar from '../Habit/Calendar';

function CalendarModal() {
	const location = useLocation();
	const navigate = useNavigate();

	if (!location.state) {
		console.error('No state provided to CalendarModal');
		navigate('/');
		return null;
	}

	const { completedDays, frequency, colorPalette, modalTitle } = location.state;

	return (
		<Modal title={modalTitle || "Calendar View"}>
			<div className={styles.childrenWrapper}>
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
			</div>
		</Modal>
	);
}

export default CalendarModal; 