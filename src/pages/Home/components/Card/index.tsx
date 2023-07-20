import { CardActionArea, Container, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ControlledRadioButtonsGroup from '../RadioButton';

export default function ActionAreaCard() {
	return (
		<>
		{/* PLUS */}
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'HighlightText'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PLUS
							</Typography>
							<Typography
								gutterBottom
								variant="h4"
								component="div"
								textAlign="center"
							>
								2 SERVIÇOS
							</Typography>
							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 80,00 por
									<br />
								</span>
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '2rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									R$ 70,00 <br />
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />
					<Box
						component="button"
						width="70%"
						height="9vh"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
					>
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
					</Box>
				</Container>
			</Card>

			{/* PREMIUM */}
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'HighlightText'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PREMIUM
							</Typography>
							<Typography
								gutterBottom
								variant="h4"
								component="div"
								textAlign="center"
							>
								4 SERVIÇOS
							</Typography>
							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 160,00 por
									<br />
								</span>
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '2rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									R$ 120,00 <br />
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />
					<Box
						component="button"
						width="70%"
						height="9vh"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
					>
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
					</Box>
				</Container>
			</Card>
			
			{/* PRO */}
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#f6b332',
					padding: '0.2rem 0.2rem',
				}}
			>
				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<CardActionArea>
						<CardContent>
							<Typography
								gutterBottom
								color={'HighlightText'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								PRO
							</Typography>
							<Typography
								gutterBottom
								variant="h4"
								component="div"
								textAlign="center"
							>
								8 SERVIÇOS
							</Typography>
							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 320,00 por
									<br />
								</span>
								<span
									style={{
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '2rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									R$ 240,00 <br />
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />
					<Box
						component="button"
						width="70%"
						height="9vh"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
					>
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							top="0.2rem"
							left="0.3rem"
							sx={{
								backgroundColor: 'transparent',
							}}
						></Box>
						<Typography
							color={'whitesmoke'}
							fontFamily="Khand, sans-serif"
							fontWeight={700}
							fontSize="1.5rem"
							letterSpacing="0.1rem"
						>
							ASSINAR
						</Typography>
					</Box>
				</Container>
			</Card>
		</>
	);
}
