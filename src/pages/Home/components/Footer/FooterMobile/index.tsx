import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';

import Logo from '../../../../../assets/images/logo.png';

const FooterMobile = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				backgroundColor: 'darkslategrey',
				height: '40vh',
			}}
		>
			<Container>
				<AppBar
					position="static"
					sx={{
						backgroundColor: 'darkslategrey',
						borderBottom: '1px solid #fff',
						boxShadow: 'none',
						paddingTop: '4rem',
					}}
				>
					<Toolbar
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '20vh',
							zIndex: '99999',
						}}
					>
						<Box>
							<img src={Logo} alt="Logo Barbearia" />
						</Box>

						<Box
							width="50%"
							sx={{
								display: 'flex',
								justifyContent: 'space-evenly',
							}}
						>
							<IconButton
								href="https://www.facebook.com/douglascoiffeurr/"
								aria-label="facebook"
								color="inherit"
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								<FacebookIcon />
							</IconButton>
							<IconButton
								href="https://www.instagram.com/douglascoiffeursp/"
								aria-label="instagram"
								color="inherit"
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								<InstagramIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					width="100%"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography
						width="50%"
						component="p"
						padding="3rem 0.1rem"
						color="HighlightText"
						fontSize="0.9rem"
					>
						Copyright © Barbearia Douglas Coiffeur. Todos os
						Direitos Reservados.
					</Typography>

					<Typography
						width="50%"
						component="p"
						padding="3rem 0.1rem"
						color="HighlightText"
						fontSize="0.7rem"
						textAlign="end"
					>
						Desenvolvido por:{' '}
						<span
							style={{
								backgroundColor: '#000',
								borderRadius: '3rem',
								padding: '0.2rem',
							}}
						>
							Gabriel Campos Alves
						</span>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default FooterMobile;
