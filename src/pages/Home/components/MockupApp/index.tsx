import { Box, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Mockup from '../../../../assets/images/mockup-app.png';

interface Props {
	children: React.ReactNode;
}

const MockupApp = () => {
	const Section: React.FC<Props> = ({ children }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 2s 0.6s',
				}}
			>
				{children}
			</section>
		);
	};

	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				height: '70vh',
				backgroundColor: '#ffde59',
				position: 'absolute',
				top: '90%',
				paddingTop: '8rem',
			}}
		>
			<Container
				component="section"
				sx={{
					width: '50%',
					height: '100%',
					display: 'flex',
				}}
			>
				<Box
					width="50%"
					height="100%"
					component="div"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					gap={5}
				>
					<Typography
						component="h1"
						variant="h2"
						color="#fff"
						fontSize={70}
						lineHeight="3.5rem"
						fontFamily="Khand, sans-serif"
						fontWeight={700}
					>
						AGENDE ATRAVÉS <br />
						DO APP <span style={{ color: '#2596be' }}>BOOSKY</span>
					</Typography>
					<Typography component="p">
						Ser atendido por ordem de chegada gera filas, isso se
						tornou algo do passado. Use o Booksy para agendar seus
						horários a qualquer hora, onde quer que esteja e assim
						continue aproveitando da melhor maneira os serviços que
						você adora.
					</Typography>
					<Container
						disableGutters
						component="section"
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
					>
						<Box component="a" width="50%">
							<a href="#">
								<img
									src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
									width="90%"
								/>
							</a>
						</Box>
						<Box component="a" width="50%">
							<a href="#">
								<img
									src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png"
									width="100%"
								/>
							</a>
						</Box>
					</Container>
					<Box
						component="button"
						width="98%"
						height="11%"
						border="none"
						borderRadius="0.5rem"
						sx={{ backgroundColor: '#2596be' }}
					>
						<a
							href="#"
							style={{
								textDecoration: 'none',
							}}
						>
							<Typography
								color={'HighlightText'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
							>
								AGENDAR AGORA
							</Typography>
						</a>
					</Box>
				</Box>

				{/* RIGHT BOX */}
				<Box
					width="50%"
					height="110%"
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Section>
						<img src={Mockup} />
					</Section>
				</Box>
			</Container>
		</Box>
	);
};

export default MockupApp;
