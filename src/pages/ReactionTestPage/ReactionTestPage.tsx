import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ReactionTest } from '../../components/ReactionTest/ReactionTest';

export const ReactionTestPage: React.FC = () => {
	const [hasStarted, setHasStarted] = useState(false);

	const handleStart = () => {
		setHasStarted(true);
	};

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<Header />
			<main style={{ height: 'calc(100vh - 64px)' }} className="mx-auto flex items-center justify-center">
				{!hasStarted ? (
					<button
						onClick={handleStart}
						className="px-6 py-3 cursor-pointer rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors"
					>
						Start test
					</button>
				) : (
					<ReactionTest />
				)}
			</main>
		</div>
	);
};
