// framer
import { motion } from 'framer-motion';

// components
import Header from './Header';
import HabitList from './HabitList';
import Placeholder from './Placeholder';

// icons
import { ReactComponent as Calendar } from '../img/calendar.svg';
import { MdAddToPhotos } from "react-icons/md";
import { useHabitsStore } from '../stores/habitsStore';

// Get version from package.json
const version = "0.20.2"; // Current version

const mainVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: .3, ease: 'easeOut' }
};

function MainPage() {
	const habits = useHabitsStore((s) => s.habits);
	const filteredHabits = habits.filter((h) => !h.isArchived);

	return (
		<motion.div {...mainVariants}>
			<div style={{ 
				position: 'absolute', 
				top: '1rem', 
				right: '1rem',
				fontSize: '0.8rem',
				color: 'var(--text-color-secondary)'
			}}>
				v{version}
			</div>
			<Header />

			<HabitList habits={filteredHabits} />

			{filteredHabits.length === 0 && (
				<Placeholder
					image={<Calendar />}
					title="No active habits found"
					desc="Why not create one now?"
					textOnButton="Create First Habit"
					buttonIcon={<MdAddToPhotos />}
					to={`${process.env.PUBLIC_URL}/modal/habitEditor`}
					state={{ modalTitle: 'Create new habit' }}
				/>
			)}
		</motion.div>
	);
}

export default MainPage;