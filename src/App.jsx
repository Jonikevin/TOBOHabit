// components
import MainPage from './components/MainPage';
import HabitEditor from './components/HabitEditor/HabitEditor';
import Statistics from './components/Statistics/Statistics';
import Diary from './components/Diary/Diary';

function App() {
	return (
		<Routes>
			<Route path={process.env.PUBLIC_URL + '/'} element={<MainPage />}>
				<Route path='modal/habitEditor' element={<HabitEditor />} />
				<Route path='modal/statistics' element={<Statistics />} />
				<Route path='modal/diary' element={<Diary />} />
			</Route>
		</Routes>
	);
}

export default App; 