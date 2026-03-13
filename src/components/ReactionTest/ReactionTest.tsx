import React, { useEffect, useRef, useState } from 'react';
import styles from './ReactionTest.module.less';
import classNames from 'classnames';

type Phase = 'waiting' | 'pending' | 'result';

const min = 2000;
const max = 6000;

const getRandomDelay = () => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const ReactionTest: React.FC = () => {
	const [phase, setPhase] = useState<Phase>('waiting');
	const [reactionTime, setReactionTime] = useState<number | null>(null);
	const greenStartRef = useRef<number | null>(null);

	useEffect(() => {
		let timeoutId: number | null = null;

		if (phase === 'waiting') {
			const delay = getRandomDelay();
			timeoutId = window.setTimeout(() => {
				setPhase('pending');
				greenStartRef.current = performance.now();
			}, delay);
		}
		return () => {
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}
		};
	}, [phase]);

	const handleClick = () => {
		const now = performance.now();
		if (phase === 'pending' && greenStartRef.current !== null) {
			const diff = now - greenStartRef.current;
			setReactionTime(diff);
			setPhase('result');
		}
	};

	const handleTryAgain = () => {
		setPhase('waiting');
		setReactionTime(null);
	};

	return (
		<div
			onMouseDown={phase === 'result' ? handleTryAgain : handleClick}
			className={classNames(
				styles.container,
				'w-full',
				'flex',
				'flex-col',
				'items-center',
				'justify-center',
				'text-white',
				'select-none',
				'cursor-pointer',
				{
					'bg-red-600': phase === 'waiting',
					'bg-green-600': phase === 'pending',
					'bg-blue-500': phase === 'result',
				}
			)}
		>
			{phase === 'waiting' && (
				<p className="text-2xl md:text-3xl font-medium text-center px-4">
					Wait for the screen to turn green...
				</p>
			)}

			{phase === 'pending' && (
				<p className="text-2xl md:text-3xl font-bold tracking-wide uppercase text-center px-4">Click NOW!</p>
			)}

			{phase === 'result' && reactionTime !== null && (
				<div className="text-center px-4">
					<p className="text-3xl md:text-4xl font-semibold mb-2">Your reaction time:</p>
					<p className="text-5xl md:text-6xl font-bold">{Math.round(reactionTime)} ms</p>
					<p className="mt-4 text-sm md:text-base text-white/70 hover:text-white/90 transition-colors">
						Click to try again.
					</p>
				</div>
			)}
		</div>
	);
};
