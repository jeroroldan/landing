// src/components/React/CountUpCard/CountUpCard.jsx
// @ts-ignore
// eslint-disable-next-line
import CountUp from "react-countup";
function CountUpCard({ largeText, description, duration = 2 }) {
	// Extraer el valor numérico, prefijo y sufijo
	const parseValue = (text) => {
		const match = String(text).match(/^([^\d-]*)(-?\d*\.?\d*)([^\d]*)$/);
		if (match) {
			return {
				prefix: match[1] || "",
				number: parseFloat(match[2].replace(/,/g, "")) || 0,
				suffix: match[3] || "",
			};
		}
		return { prefix: "", number: 0, suffix: "" };
	};

	const { prefix, number, suffix } = parseValue(largeText);

	return (
		<div className="flex flex-col gap-3 text-center">
			<h3 className="font-decorative text-primary-500 text-[8rem] leading-none">
				<CountUp
					start={0}
					end={number}
					duration={duration}
					separator=","
					decimals={0}
					decimal="."
					prefix={prefix}
					suffix={suffix}
					enableScrollSpy={true}
				/>
			</h3>
			<p className="description font-heading-1 pr-2 text-2xl">{description}</p>
		</div>
	);
}

export default CountUpCard;
