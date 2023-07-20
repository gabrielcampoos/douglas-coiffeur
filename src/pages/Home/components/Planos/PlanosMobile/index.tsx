import { Box, Button, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
	children: React.ReactNode;
	transition: string;
}

const PlanosMobile = () => {
	const Section: React.FC<Props> = ({ children, transition }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateY(-200px)',
					opacity: isInView ? 1 : 0,
					transition: transition,
				}}
			>
				{children}
			</section>
		);
	};

	return (
		<Box
			component="main"
			id="PlanosMobile"
			width="100%"
			height="70vh"
			sx={{
				backgroundColor: '#000',
			}}
		>
			<Container
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					width="100%"
					height="70%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Section transition="all 2s 0.6s">
						<Typography
							component="h1"
							color="#fff"
							fontSize={70}
							lineHeight="4rem"
							fontFamily="Khand, sans-serif"
							fontWeight={900}
							zIndex="1"
						>
							{' '}
							CONHEÇA <br />
						</Typography>
					</Section>

					<Section transition="all 1s 0.6s">
						<Typography
							component="h1"
							color="#fff"
							fontSize={70}
							lineHeight="4rem"
							fontFamily="Khand, sans-serif"
							fontWeight={900}
							zIndex="1"
						>
							NOSSOS <br />
						</Typography>
					</Section>
					<Section transition="all 0.7s 0.6s">
						<Typography
							component="h1"
							color="#fff"
							fontSize={70}
							lineHeight="4rem"
							fontFamily="Khand, sans-serif"
							fontWeight={900}
							zIndex="1"
						>
							<span style={{ color: '#f6b332' }}>PLANOS</span>
						</Typography>
					</Section>
				</Box>
				<Box
					width="100%"
					height="30%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Section transition="all 2s 0.6s">
						<Button
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre os planos.&type=phone_number&app_absent=0"
							variant="contained"
							sx={{
								backgroundColor: '#f6b332',
								color: '#000',
								width: '100%',
								height: '70%',
								border: 'none',
								borderRadius: '0.5rem',
								fontFamily: 'Khand, sans-serif',
								fontWeight: 700,
								fontSize: '2.3rem',
								letterSpacing: '0.1rem',
							}}
						>
							SAIBA MAIS
						</Button>
					</Section>
				</Box>
			</Container>
		</Box>
	);
};

export default PlanosMobile;
