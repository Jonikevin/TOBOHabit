import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import MainPage from './components/MainPage';
import Statistics from './components/Statistics/Statistics';
import HabitEditor from './components/HabitEditor/HabitEditor';
import Diary from './components/Diary/Diary';
import CalendarModal from './components/Modal/CalendarModal';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/modal">
					<Route path="statistics" element={<Statistics />} />
					<Route path="calendar" element={<CalendarModal />} />
					<Route path="habitEditor" element={<HabitEditor />} />
					<Route path="diary" element={<Diary />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App; 