import {
	Box,
	CardActionArea,
	Container,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import {
	default as ControlledRadioButtonsGroup,
	default as ListaServico,
} from '../../ListaServico';
import SnackbarCookies from '../../Snackbar';

export default function ActionAreaCard() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const [open, setOpen] = useState(false);
	const [link, setLink] = useState('');
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
								color={'#000'}
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
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 80,00 por
									<br />
									<span
										style={{
											color: '#fff',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '700',
											fontSize: '2rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											WebkitTextStrokeWidth: '1px',
											WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 70,00 <br />
									</span>
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />

					<Box
						id="btnPlus"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnPlus = document.getElementById('btnPlus');
							const plus =
								'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PLUS.&type=phone_number&app_absent=0';

							if (btnPlus?.id === 'btnPlus') {
								setLink(plus);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PLUS.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
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
						{/* </a> */}
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
								color={'#000'}
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
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 160,00 por
									<br />
									<span
										style={{
											color: '#fff',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '700',
											fontSize: '2rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											WebkitTextStrokeWidth: '1px',
											WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 120,00 <br />
									</span>
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ListaServico />
					<Box
						id="btnPremium"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnPremium =
								document.getElementById('btnPremium');
							const premium =
								'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PREMIUM.&type=phone_number&app_absent=0';

							if (btnPremium?.id === 'btnPremium') {
								setLink(premium);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PREMIUM.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
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
						{/* </a> */}
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
								color={'#000'}
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
								6 SERVIÇOS
							</Typography>
							<Typography variant="body2" textAlign="center">
								<span
									style={{
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 240,00 por
									<br />
									<span
										style={{
											color: '#fff',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '700',
											fontSize: '2rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											WebkitTextStrokeWidth: '1px',
											WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 180,00 <br />
									</span>
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />
					<Box
						id="btnPro"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnPro = document.getElementById('btnPro');
							const pro =
								'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PRO.&type=phone_number&app_absent=0';
							if (btnPro?.id === 'btnPro') {
								setLink(pro);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano MEDIUM.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
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
						{/* </a> */}
					</Box>
				</Container>
			</Card>

			{/* GOLD */}

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
								color={'#000'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
								textAlign="center"
							>
								GOLD
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
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '400',
										fontSize: '1.5rem',
										letterSpacing: '0.1rem',
										textAlign: 'center',
									}}
								>
									De 320,00 por
									<br />
									<span
										style={{
											color: '#fff',
											fontFamily: 'Khand, sans-serif',
											fontWeight: '700',
											fontSize: '2rem',
											letterSpacing: '0.1rem',
											textAlign: 'center',
											WebkitTextStrokeWidth: '1px',
											WebkitTextStrokeColor: '#000',
										}}
									>
										R$ 240,00 <br />
									</span>
									por mês
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<ControlledRadioButtonsGroup />
					<Box
						id="btnGold"
						component="button"
						width="70%"
						height="100%"
						margin="1rem 0"
						border="none"
						borderRadius="0.5rem"
						zIndex="999999999999"
						position="relative"
						sx={{
							backgroundColor: '#000',
						}}
						onClick={(e) => {
							e.preventDefault();
							setOpen(true);

							const btnGold = document.getElementById('btnGold');
							const gold =
								'https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano GOLD.&type=phone_number&app_absent=0';

							if (btnGold?.id === 'btnGold') {
								setLink(gold);
							}
						}}
					>
						{/* <a
							href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre o plano PRO.&type=phone_number&app_absent=0"
							style={{ textDecoration: 'none' }}
						> */}
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
						{/* </a> */}
					</Box>
				</Container>
			</Card>
			{/* <Modal
				open={open}
				setOpen={setOpen}
				link={link}
				setLink={setLink}
			/> */}
			<SnackbarCookies
				open={open}
				setOpen={setOpen}
				link={link}
				setLink={setLink}
			/>
		</>
	);
}
