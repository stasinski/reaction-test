import { Header } from '../../components/Header/Header';

export const StatisticsPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<Header />
			<main className="mx-auto max-w-5xl px-4 py-8">
				<div className="text-xl font-semibold">Statystyki</div>
				<p className="mt-2 text-slate-600">Tutaj pojawią się wyniki testu reakcji.</p>
			</main>
		</div>
	);
};
