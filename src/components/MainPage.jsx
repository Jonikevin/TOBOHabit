import styles from '../css/MainPage.module.css';

// react
import { useState } from 'react';

// router
import { Outlet } from 'react-router-dom';

// stores
import { useHabitsStore } from '../stores/habitsStore';

// components
import Habit from './Habit/Habit';
import Button from './Button';

// icons
import { MdAdd } from 'react-icons/md';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';

function MainPage() {
	const habits = useHabitsStore((s) => s.habits);
	const archivedHabits = useHabitsStore((s) => s.archivedHabits);
	const [menuIndex, setMenuIndex] = useState(-1);

	const handleShowMenu = (index) => setMenuIndex(index);

	return (
		<div className={styles.mainPage}>
			<div className={styles.header}>
				<h2>TOBOHabit</h2>
				<Button
					icon={<MdAdd />}
					text='Add Habit'
					to='/modal/habitEditor'
					state={{ modalTitle: 'New habit' }}
					arrow
				/>
			</div>

			<div className={styles.content}>
				{habits.length === 0 && (
					<div className={styles.emptyMessage}>
						<h3>No habits yet</h3>
						<small>Click the "Add Habit" button to create one.</small>
					</div>
				)}

				<div className={styles.habitList}>
					{habits.map((habit, index) => (
						<Habit
							key={habit.title}
							{...habit}
							index={index}
							isMenuVisible={menuIndex === index}
							onShowMenu={handleShowMenu}
						/>
					))}
				</div>

				{archivedHabits.length > 0 && (
					<div className={styles.dangerZone}>
						<div className={styles.dangerHeader}>
							<h3>Danger Zone</h3>
							<small>v0.20.2</small>
						</div>

						<div className={styles.archivedHabits}>
							<h4>Archived Habits</h4>

							<div className={styles.habitList}>
								{archivedHabits.map((habit, index) => (
									<Habit
										key={habit.title}
										{...habit}
										index={index}
										isArchive
									/>
								))}
							</div>
						</div>
					</div>
				)}
			</div>

			<Outlet />
		</div>
	);
}

export default MainPage;