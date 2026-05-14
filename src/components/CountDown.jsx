import useCountDown from "../hooks/useCountDown";

const CountDown = () => {
	const { day, hours, minutes, seconds } = useCountDown("2026-06-11T01:12:59");

	return (
		<div className="flex gap-4 items-end ml-[87px]">
			<div className="space-y-2">
				<p className="text-sm block leading-[1]">Days</p>
				<p className="block font-bold text-[32px] leading-[1]">{day}</p>
			</div>
			<span className="text-[40px] leading-tight text-secondary">:</span>
			<div className="space-y-2">
				<p className="text-sm block leading-[1]">Hours</p>
				<p className="block font-bold text-[32px] leading-[1]">{hours}</p>
			</div>
			<span className="text-[40px] leading-tight text-secondary">:</span>
			<div className="space-y-2">
				<p className="text-sm block leading-[1]">Minutes</p>
				<p className="block font-bold text-[32px] leading-[1]">{minutes}</p>
			</div>
			<span className="text-[40px] leading-tight text-secondary">:</span>
			<div className="space-y-2">
				<p className="text-sm block leading-[1]">Seconds</p>
				<p className="block font-bold text-[32px] leading-[1]">{seconds}</p>
			</div>
		</div>
	);
};

export default CountDown;
