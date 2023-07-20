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
			height="100%"
			sx={{
				backgroundColor: '#000',
				padding: '3rem 0',
			}}
		>
			<Container
				component="main"
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
				}}
			>
				<Box
					width="100%"
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					// gap={5}
					paddingTop="2rem "
				>
					<Section transition="all 2s 0.6s">
						<Typography
							component="h1"
							variant='h2'
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
						>
							{' '}
							CONHEÇA <br />
						</Typography>
					</Section>

					<Section transition="all 1s 0.6s"
					>
						<Typography
							component="h1"
							variant='h2'
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
						>
							NOSSOS <br />
						</Typography>
					</Section>
					<Section transition="all 0.7s 0.6s">
						<Typography
							component="h1"
							variant='h2'
							color="#fff"
							fontSize={70}
							lineHeight="3.5rem"
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							zIndex="1"
							marginBottom='3rem'

						>
							<span style={{ color: '#f6b332' }}>PLANOS</span>
						</Typography>
						<Typography component="p" color={'whitesmoke'} marginBottom='3rem'>
							Ser atendido por ordem de chegada gera filas, isso
							se tornou algo do passado. Use o Booksy para agendar
							seus horários a qualquer hora, onde quer que esteja
							e assim continue aproveitando da melhor maneira os
							serviços que você adora.
						</Typography>
					</Section>
					<Section transition="all 2s 0.6s">
					<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					sx={{backgroundColor: '#f6b332'}}
					
					
				>
					<a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre os planos.&type=phone_number&app_absent=0"
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
								SAIBA MAIS
							</Typography>
						</a>
				</Box>
					</Section>
				</Box>
				
			</Container>
		</Box>
	);
};

export default PlanosMobile;
