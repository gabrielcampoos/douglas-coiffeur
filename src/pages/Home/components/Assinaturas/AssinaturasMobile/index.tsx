import { Box, Container, Typography } from '@mui/material';

import ActionAreaCard from '../../Card';

const AssinaturasMobile = () => {
	return (
		<Box
			component="main"
			id="AssinaturasMobile"
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
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 5,
				}}
			>
				<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					zIndex="999999999999"
					position="relative"
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="9vh"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						QUERO SER MEMBRO
					</Typography>
				</Box>
				<Box component="section" width="100%">
					<Typography
						component="p"
						color={'whitesmoke'}
						textAlign="justify"
					>
						Sabe aquele dia em que você tem um evento importante,
						uma reunião, festinha com amigos ou jantar com alguém
						especial e fica sentindo-se mal pois percebeu que está
						com o cabelo desajeitado ou com o “pézinho” mal feito e
						cheio de pelos no pescoço? Ou quando você está em casa e
						se lembra que precisa fazer a barba, mas aí bate uma
						preguiça só de pensar em pegar no presto barba, deixar a
						pia toda suja de pelos, aquela zona no banheiro! Uma
						solução para essas situações seria você fazer a barba
						toda semana na barbearia ou cortar o cabelo com maior
						frequência, certo? Certo! Mas aí o custo para manter sua
						imagem pessoal ficaria alto não é mesmo? Errado! E se eu
						te disser que temos a solução perfeita pra você! Um
						clube de assinatura de cabelo e barba! Que tal vir na
						barbearia alinhar sua barba e seu cabelo toda semana e
						pagar apenas um valor fixo por mês pra isso? Sem
						pegadinha, corte e barba toda semana por um único valor
						mensal!
					</Typography>
				</Box>
				<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					zIndex="999999999999"
					position="relative"
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="9vh"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						ASSINATURAS
					</Typography>
				</Box>
				<ActionAreaCard />
			</Container>
		</Box>
	);
};

export default AssinaturasMobile;
