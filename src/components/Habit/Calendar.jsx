import styles from '../../css/Calendar.module.css';

// utils
import checkHabitCompletion from '../../utils/checkHabitCompletion';

function Calendar({ colorPalette, completedDays, frequency }) {
	const { baseColor, darkenedColor } = colorPalette;
	const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();

	// Get first day of month and total days
	const firstDay = new Date(currentYear, currentMonth, 1);
	const lastDay = new Date(currentYear, currentMonth + 1, 0);
	const totalDays = lastDay.getDate();
	
	// Calculate offset for first day (0 = Monday, 6 = Sunday)
	let startOffset = firstDay.getDay() - 1;
	if (startOffset === -1) startOffset = 6; // Handle Sunday

	// Generate array of dates for the month
	const dates = Array.from({ length: totalDays }, (_, i) => 
		new Date(currentYear, currentMonth, i + 1)
	);

	// Check completion status for all dates
	const completionStatus = checkHabitCompletion(completedDays, frequency, ...dates);

	return (
		<div className={styles.calendar}>
			<div className={styles.weekdays}>
				{weekdays.map(day => (
					<div key={day} className={styles.weekday}>{day}</div>
				))}
			</div>
			<div className={styles.days}>
				{/* Empty cells for offset */}
				{Array(startOffset).fill(null).map((_, i) => (
					<div key={`empty-${i}`} className={styles.emptyDay} />
				))}
				
				{/* Actual days */}
				{dates.map((date, index) => {
					const isToday = date.toDateString() === today.toDateString();
					const isCompleted = completionStatus[index];

					return (
						<div
							key={date}
							className={`${styles.day} ${isToday ? styles.today : ''}`}
							style={{
								backgroundColor: isCompleted ? baseColor : darkenedColor,
								color: isCompleted ? '#fff' : '#e6e6e6'
							}}
						>
							{date.getDate()}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Calendar;