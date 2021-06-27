import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

import cls from './TitleSVG.module.scss'

const TitleSVG: FC = () => {
	const svgRef = useRef<SVGSVGElement>()
	const [pathsLength, setPathsLength] = useState<number[]>([])

	const setSvgRef = useCallback((ref) => {
		if (ref) {
			svgRef.current = ref
		}
	}, [])

	const getPathsLength = useCallback(() => {
		if (svgRef.current) {
			const lengths: number[] = []
			svgRef.current.childNodes.forEach((path) =>
				lengths.push(path.getTotalLength()),
			)
			setPathsLength(lengths)
		}
	}, [svgRef])

	useEffect(() => {
		getPathsLength()
	}, [getPathsLength])

	return (
		<svg
			width="532"
			height="73"
			viewBox="0 0 532 73"
			xmlns="http://www.w3.org/2000/svg"
			className={cls.title}
			ref={setSvgRef}
		>
			<path
				d="M66.7099 4.20995L52.5699 53H45.4299L34.0899 13.7299L22.3299 53L15.2599 53.07L1.60986 4.20995H8.39986L19.0399 45.5799L30.7999 4.20995H37.9399L49.1399 45.4399L59.8499 4.20995H66.7099Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[0],
					strokeDashoffset: pathsLength[0],
				}}
			/>
			<path
				d="M108.681 32.35C108.681 33.5633 108.611 34.8466 108.471 36.2H77.8109C78.0442 39.98 79.3275 42.9433 81.6609 45.09C84.0409 47.19 86.9109 48.24 90.2709 48.24C93.0242 48.24 95.3109 47.61 97.1309 46.35C98.9975 45.0433 100.304 43.3166 101.051 41.17H107.911C106.884 44.8566 104.831 47.8666 101.751 50.2C98.6709 52.4866 94.8442 53.63 90.2709 53.63C86.6309 53.63 83.3642 52.8133 80.4709 51.18C77.6242 49.5466 75.3842 47.2366 73.7509 44.25C72.1175 41.2166 71.3009 37.7166 71.3009 33.75C71.3009 29.7833 72.0942 26.3066 73.6809 23.32C75.2675 20.3333 77.4842 18.0466 80.3309 16.46C83.2242 14.8266 86.5375 14.0099 90.2709 14.0099C93.9109 14.0099 97.1309 14.8033 99.9309 16.39C102.731 17.9766 104.878 20.17 106.371 22.97C107.911 25.7233 108.681 28.85 108.681 32.35ZM102.101 31.02C102.101 28.5933 101.564 26.5166 100.491 24.79C99.4175 23.0166 97.9475 21.6866 96.0809 20.8C94.2609 19.8666 92.2309 19.4 89.9909 19.4C86.7709 19.4 84.0175 20.4266 81.7309 22.48C79.4909 24.5333 78.2075 27.38 77.8809 31.02H102.101Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[1],
					strokeDashoffset: pathsLength[1],
				}}
			/>
			<path
				d="M123.459 21.78C124.766 19.4933 126.679 17.6266 129.199 16.18C131.719 14.7333 134.589 14.0099 137.809 14.0099C141.262 14.0099 144.366 14.8266 147.119 16.46C149.872 18.0933 152.042 20.4033 153.629 23.39C155.216 26.33 156.009 29.76 156.009 33.68C156.009 37.5533 155.216 41.0066 153.629 44.04C152.042 47.0733 149.849 49.43 147.049 51.11C144.296 52.79 141.216 53.63 137.809 53.63C134.496 53.63 131.579 52.9066 129.059 51.46C126.586 50.0133 124.719 48.17 123.459 45.93V53H117.089V1.19995H123.459V21.78ZM149.499 33.68C149.499 30.7866 148.916 28.2666 147.749 26.12C146.582 23.9733 144.996 22.34 142.989 21.2199C141.029 20.1 138.859 19.54 136.479 19.54C134.146 19.54 131.976 20.1233 129.969 21.29C128.009 22.41 126.422 24.0666 125.209 26.26C124.042 28.4066 123.459 30.9033 123.459 33.75C123.459 36.6433 124.042 39.1866 125.209 41.38C126.422 43.5266 128.009 45.1833 129.969 46.35C131.976 47.47 134.146 48.03 136.479 48.03C138.859 48.03 141.029 47.47 142.989 46.35C144.996 45.1833 146.582 43.5266 147.749 41.38C148.916 39.1866 149.499 36.62 149.499 33.68Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[2],
					strokeDashoffset: pathsLength[2],
				}}
			/>
			<path
				d="M198.246 4.20995C203.566 4.20995 208.163 5.21328 212.036 7.21995C215.956 9.17995 218.943 12.0033 220.996 15.6899C223.096 19.3766 224.146 23.7166 224.146 28.71C224.146 33.7033 223.096 38.0433 220.996 41.7299C218.943 45.37 215.956 48.17 212.036 50.13C208.163 52.0433 203.566 53 198.246 53H183.056V4.20995H198.246ZM198.246 47.75C204.546 47.75 209.353 46.0933 212.666 42.78C215.979 39.42 217.636 34.73 217.636 28.71C217.636 22.6433 215.956 17.9066 212.596 14.5C209.283 11.0933 204.499 9.38995 198.246 9.38995H189.426V47.75H198.246Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[3],
					strokeDashoffset: pathsLength[3],
				}}
			/>
			<path
				d="M267.548 32.35C267.548 33.5633 267.478 34.8466 267.338 36.2H236.678C236.911 39.98 238.195 42.9433 240.528 45.09C242.908 47.19 245.778 48.24 249.138 48.24C251.891 48.24 254.178 47.61 255.998 46.35C257.865 45.0433 259.171 43.3166 259.918 41.17H266.778C265.751 44.8566 263.698 47.8666 260.618 50.2C257.538 52.4866 253.711 53.63 249.138 53.63C245.498 53.63 242.231 52.8133 239.338 51.18C236.491 49.5466 234.251 47.2366 232.618 44.25C230.985 41.2166 230.168 37.7166 230.168 33.75C230.168 29.7833 230.961 26.3066 232.548 23.32C234.135 20.3333 236.351 18.0466 239.198 16.46C242.091 14.8266 245.405 14.0099 249.138 14.0099C252.778 14.0099 255.998 14.8033 258.798 16.39C261.598 17.9766 263.745 20.17 265.238 22.97C266.778 25.7233 267.548 28.85 267.548 32.35ZM260.968 31.02C260.968 28.5933 260.431 26.5166 259.358 24.79C258.285 23.0166 256.815 21.6866 254.948 20.8C253.128 19.8666 251.098 19.4 248.858 19.4C245.638 19.4 242.885 20.4266 240.598 22.48C238.358 24.5333 237.075 27.38 236.748 31.02H260.968Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[4],
					strokeDashoffset: pathsLength[4],
				}}
			/>
			<path
				d="M290.236 47.1199L302.136 14.6399H308.926L293.876 53H286.456L271.406 14.6399H278.266L290.236 47.1199Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[5],
					strokeDashoffset: pathsLength[5],
				}}
			/>
			<path
				d="M350.195 32.35C350.195 33.5633 350.125 34.8466 349.985 36.2H319.325C319.558 39.98 320.841 42.9433 323.175 45.09C325.555 47.19 328.425 48.24 331.785 48.24C334.538 48.24 336.825 47.61 338.645 46.35C340.511 45.0433 341.818 43.3166 342.565 41.17H349.425C348.398 44.8566 346.345 47.8666 343.265 50.2C340.185 52.4866 336.358 53.63 331.785 53.63C328.145 53.63 324.878 52.8133 321.985 51.18C319.138 49.5466 316.898 47.2366 315.265 44.25C313.631 41.2166 312.815 37.7166 312.815 33.75C312.815 29.7833 313.608 26.3066 315.195 23.32C316.781 20.3333 318.998 18.0466 321.845 16.46C324.738 14.8266 328.051 14.0099 331.785 14.0099C335.425 14.0099 338.645 14.8033 341.445 16.39C344.245 17.9766 346.391 20.17 347.885 22.97C349.425 25.7233 350.195 28.85 350.195 32.35ZM343.615 31.02C343.615 28.5933 343.078 26.5166 342.005 24.79C340.931 23.0166 339.461 21.6866 337.595 20.8C335.775 19.8666 333.745 19.4 331.505 19.4C328.285 19.4 325.531 20.4266 323.245 22.48C321.005 24.5333 319.721 27.38 319.395 31.02H343.615Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[6],
					strokeDashoffset: pathsLength[6],
				}}
			/>
			<path
				d="M364.973 1.19995V53H358.603V1.19995H364.973Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[7],
					strokeDashoffset: pathsLength[7],
				}}
			/>
			<path
				d="M392.559 53.63C388.966 53.63 385.699 52.8133 382.759 51.18C379.866 49.5466 377.579 47.2366 375.899 44.25C374.266 41.2166 373.449 37.7166 373.449 33.75C373.449 29.83 374.289 26.3766 375.969 23.39C377.696 20.3566 380.029 18.0466 382.969 16.46C385.909 14.8266 389.199 14.0099 392.839 14.0099C396.479 14.0099 399.769 14.8266 402.709 16.46C405.649 18.0466 407.959 20.3333 409.639 23.32C411.366 26.3066 412.229 29.7833 412.229 33.75C412.229 37.7166 411.343 41.2166 409.569 44.25C407.843 47.2366 405.486 49.5466 402.499 51.18C399.513 52.8133 396.199 53.63 392.559 53.63ZM392.559 48.03C394.846 48.03 396.993 47.4933 398.999 46.42C401.006 45.3466 402.616 43.7366 403.829 41.59C405.089 39.4433 405.719 36.83 405.719 33.75C405.719 30.67 405.113 28.0566 403.899 25.91C402.686 23.7633 401.099 22.1766 399.139 21.15C397.179 20.0766 395.056 19.54 392.769 19.54C390.436 19.54 388.289 20.0766 386.329 21.15C384.416 22.1766 382.876 23.7633 381.709 25.91C380.543 28.0566 379.959 30.67 379.959 33.75C379.959 36.8766 380.519 39.5133 381.639 41.66C382.806 43.8066 384.346 45.4166 386.259 46.49C388.173 47.5166 390.273 48.03 392.559 48.03Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[8],
					strokeDashoffset: pathsLength[8],
				}}
			/>
			<path
				d="M426.975 21.71C428.235 19.5166 430.101 17.6966 432.575 16.25C435.095 14.7566 438.011 14.0099 441.325 14.0099C444.731 14.0099 447.811 14.8266 450.565 16.46C453.365 18.0933 455.558 20.4033 457.145 23.39C458.731 26.33 459.525 29.76 459.525 33.68C459.525 37.5533 458.731 41.0066 457.145 44.04C455.558 47.0733 453.365 49.43 450.565 51.11C447.811 52.79 444.731 53.63 441.325 53.63C438.058 53.63 435.165 52.9066 432.645 51.46C430.171 49.9666 428.281 48.1233 426.975 45.93V71.2H420.605V14.6399H426.975V21.71ZM453.015 33.68C453.015 30.7866 452.431 28.2666 451.265 26.12C450.098 23.9733 448.511 22.34 446.505 21.2199C444.545 20.1 442.375 19.54 439.995 19.54C437.661 19.54 435.491 20.1233 433.485 21.29C431.525 22.41 429.938 24.0666 428.725 26.26C427.558 28.4066 426.975 30.9033 426.975 33.75C426.975 36.6433 427.558 39.1866 428.725 41.38C429.938 43.5266 431.525 45.1833 433.485 46.35C435.491 47.47 437.661 48.03 439.995 48.03C442.375 48.03 444.545 47.47 446.505 46.35C448.511 45.1833 450.098 43.5266 451.265 41.38C452.431 39.1866 453.015 36.62 453.015 33.68Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[9],
					strokeDashoffset: pathsLength[9],
				}}
			/>
			<path
				d="M502.909 32.35C502.909 33.5633 502.839 34.8466 502.699 36.2H472.039C472.273 39.98 473.556 42.9433 475.889 45.09C478.269 47.19 481.139 48.24 484.499 48.24C487.253 48.24 489.539 47.61 491.359 46.35C493.226 45.0433 494.533 43.3166 495.279 41.17H502.139C501.113 44.8566 499.059 47.8666 495.979 50.2C492.899 52.4866 489.073 53.63 484.499 53.63C480.859 53.63 477.593 52.8133 474.699 51.18C471.853 49.5466 469.613 47.2366 467.979 44.25C466.346 41.2166 465.529 37.7166 465.529 33.75C465.529 29.7833 466.323 26.3066 467.909 23.32C469.496 20.3333 471.713 18.0466 474.559 16.46C477.453 14.8266 480.766 14.0099 484.499 14.0099C488.139 14.0099 491.359 14.8033 494.159 16.39C496.959 17.9766 499.106 20.17 500.599 22.97C502.139 25.7233 502.909 28.85 502.909 32.35ZM496.329 31.02C496.329 28.5933 495.793 26.5166 494.719 24.79C493.646 23.0166 492.176 21.6866 490.309 20.8C488.489 19.8666 486.459 19.4 484.219 19.4C480.999 19.4 478.246 20.4266 475.959 22.48C473.719 24.5333 472.436 27.38 472.109 31.02H496.329Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[10],
					strokeDashoffset: pathsLength[10],
				}}
			/>
			<path
				d="M517.688 20.87C518.808 18.6766 520.394 16.9733 522.448 15.76C524.548 14.5466 527.091 13.94 530.078 13.94V20.52H528.398C521.258 20.52 517.688 24.3933 517.688 32.14V53H511.318V14.6399H517.688V20.87Z"
				stroke="white"
				strokeWidth="2"
				style={{
					strokeDasharray: pathsLength[11],
					strokeDashoffset: pathsLength[11],
				}}
			/>
		</svg>
	)
}

export { TitleSVG }
