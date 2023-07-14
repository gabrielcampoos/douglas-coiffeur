import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, IconButton, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../../../assets/images/logo.png';

export default function ButtonAppBar() {
	return (
		<Box
			sx={{
				flexGrow: 1,
				backgroundColor: '#000',
				height: '20vh',
			}}
		>
			<Container>
				<AppBar
					position="static"
					sx={{
						backgroundColor: '#000',
					}}
				>
					<Toolbar
						sx={{
							display: 'flex',
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
							sx={{
								width: '27vw',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								fontFamily: 'Khand, sans-serif',
								fontWeight: '600',
								letterSpacing: '0.09rem',
							}}
						>
							<Link
								href="#"
								underline="none"
								color={'HighlightText'}
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								{'BOOKSY'}
							</Link>

							<Link
								href="#"
								underline="none"
								color={'HighlightText'}
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								{'UNIDADE'}
							</Link>

							<Link
								href="#"
								underline="none"
								color={'HighlightText'}
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								{'SERVIÇOS'}
							</Link>

							<Link
								href="#"
								underline="none"
								color={'HighlightText'}
								sx={{
									'&:hover': {
										color: '#ffde59',
									},
								}}
							>
								{'INSTITUTO COIFFEUR'}
							</Link>

							<Link
								href="#"
								underline="none"
								color={'HighlightText'}
								sx={{
									width: '5vw',
									height: '5vh',
									lineHeight: '5vh',
									textAlign: 'center',
									backgroundColor: '#f6b332',
									color: '#000',
									fontWeight: 'bold',
									borderRadius: '0.5rem',
									'&:hover': {
										color: '#fff',
										backgroundColor: 'darkslategrey',
										transition: 'color 0.5s ease-out',
									},
								}}
							>
								{'AGENDAR'}
							</Link>
						</Box>
						<Box
							width="5vw"
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<IconButton
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
			</Container>
		</Box>
	);
}
