export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				font: {
					size: 18
				}
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				display: false
			}
		}
	},
	borderSkipped: false,
	borderRadius: 10,

	barThickness: 60,
	plugins: {
		tooltip: {
			displayColors: false,
			bodyColor: '#222',
			backgroundColor: '#FFF',
			titleFont: {
				size: 20,
				weight: 500
			},
			titleColor: '#222',

			bodyFont: {
				size: 16
			},
			titleAlign: 'center',
			bodyAlign: 'center',
			padding: 12,
			yAlign: 'bottom',
			callbacks: {
				label: function(context: any) {
					if (context.parsed.y != null) {
						return context.parsed.y.toLocaleString()
					}
				}
			}
		}
	}
}