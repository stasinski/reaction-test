import { NavLink } from 'react-router';
import classNames from 'classnames';
import { routes } from '../../shared/routes';

export const Header: React.FC = () => {
	return (
		<header className="border-b border-slate-200 bg-white/80 backdrop-blur shadow-sm">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
				<div className="text-lg font-semibold tracking-tight text-slate-900">Reaction test</div>

				<nav className="flex gap-4 text-sm font-medium">
					<NavLink
						to={routes.home}
						end
						className={({ isActive }) =>
							classNames('rounded-full px-4 py-1.5 transition-colors', {
								'bg-slate-900 text-white': isActive,
								'text-slate-600 hover:bg-slate-100 hover:text-slate-900': !isActive,
							})
						}
					>
						Test
					</NavLink>

					<NavLink
						to={routes.statistics}
						className={({ isActive }) =>
							classNames('rounded-full px-4 py-1.5 transition-colors', {
								'bg-slate-900 text-white': isActive,
								'text-slate-600 hover:bg-slate-100 hover:text-slate-900': !isActive,
							})
						}
					>
						Statystyki
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
