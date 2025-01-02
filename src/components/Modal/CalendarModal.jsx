import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from './Modal';
import Calendar from '../Habit/Calendar';
import MonthlyChart from '../Statistics/MonthlyChart';
import WeekdayChart from '../Statistics/WeekdayChart';

// utils
import getStreaks from '../../utils/getStreaks';

function CalendarModal() {
	const { state } = useLocation();
	console.log("Calendar Modal State:", state);

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
	const { currentStreak, longestStreak } = getStreaks(completedDays, frequency);

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: { display: false },
				ticks: { color: '#e6e6e6' }
			},
			y: {
				beginAtZero: true,
				grid: { color: '#2a2a2a' },
				ticks: { color: '#e6e6e6', stepSize: 1 }
			}
		},
		plugins: {
			legend: { display: false }
		}
	};

	return (
		<Modal title={modalTitle || "Calendar"}>
			<div className={styles.calendarWrapper}>
				<div className={styles.streakInfo}>
					<div>
						<h3>Current Streak</h3>
						<strong>{currentStreak}</strong>
					</div>
					<div>
						<h3>Longest Streak</h3>
						<strong>{longestStreak}</strong>
					</div>
				</div>

				<Calendar
					colorPalette={colorPalette}
					completedDays={completedDays}
					frequency={frequency || 1}
				/>

				<div className={styles.chartSection}>
					<h3>Monthly Progress</h3>
					<div className={styles.chartWrapper}>
						<MonthlyChart
							options={chartOptions}
							days={completedDays}
							frequency={frequency}
							color={colorPalette.baseColor}
						/>
					</div>
				</div>

				<div className={styles.chartSection}>
					<h3>Weekly Progress</h3>
					<div className={styles.chartWrapper}>
						<WeekdayChart
							options={chartOptions}
							days={completedDays}
							frequency={frequency}
							color={colorPalette.baseColor}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default CalendarModal; 