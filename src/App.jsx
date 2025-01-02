import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import MainPage from './components/MainPage';
import Statistics from './components/Statistics/Statistics';
import HabitEditor from './components/HabitEditor/HabitEditor';
import Diary from './components/Diary/Diary';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/modal/statistics' element={<Statistics />} />
				<Route path='/modal/calendar' element={<Statistics />} />
				<Route path='/modal/habitEditor' element={<HabitEditor />} />
				<Route path='/modal/diary' element={<Diary />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App; 