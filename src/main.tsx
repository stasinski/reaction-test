import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { ReactionTestPage } from './pages/ReactionTestPage/ReactionTestPage';
import { StatisticsPage } from './pages/StatisticsPage/StatisticsPage';
import { routes } from './shared/routes';

const router = createBrowserRouter([
	{
		path: routes.home,
		element: <ReactionTestPage />,
	},
	{
		path: routes.statistics,
		element: <StatisticsPage />,
	},
	{
		path: '*',
		element: <Navigate to="/" />,
	},
]);

window.addEventListener('click', () => {
	const perf = performance.now();
	console.log(perf);
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

