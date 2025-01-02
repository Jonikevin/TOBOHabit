import styles from '../../css/Modal.module.css';

// router
import { useLocation } from 'react-router-dom';

// components
import Modal from '../../components/Modal/Modal';
import MonthlyChart from './MonthlyChart';
import WeekdayChart from './WeekdayChart';

// utils
import getStreaks from '../../utils/getStreaks';

function Statistics() {
	const { state } = useLocation();
	const { completedDays, colorPalette, frequency, modalTitle, simpleView } = state;
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
		<Modal title={modalTitle}>
			<div className={styles.statisticsWrapper}>
				{simpleView ? (
					// Simple view for Calendar button
					<div className={styles.streakInfo}>
						<div>
							<h3>Total Completed</h3>
							<strong>{completedDays.length}</strong>
						</div>
					</div>
				) : (
					// Full statistics view
					<>
						<div className={styles.streakInfo}>
							<div>
								<h3>Current Streak</h3>
								<strong>{currentStreak}</strong>
							</div>
							<div>
								<h3>Longest Streak</h3>
								<strong>{longestStreak}</strong>
							</div>
							<div>
								<h3>Completions</h3>
								<strong>{completedDays.length}</strong>
							</div>
						</div>

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
					</>
				)}
			</div>
		</Modal>
	);
}

export default Statistics;