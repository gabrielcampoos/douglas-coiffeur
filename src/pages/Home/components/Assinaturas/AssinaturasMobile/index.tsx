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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Temporibus, recusandae quasi impedit sed repellat
						dignissimos, fuga odit eaque vero consequatur culpa
						molestiae eligendi unde laudantium omnis! Unde et quia
						repudiandae accusamus deleniti repellat quis distinctio
						autem, qui iste dolor illo aliquid obcaecati, voluptas,
						consequatur atque consequuntur ratione! Blanditiis error
						adipisci quos quo esse, sit deleniti vero quaerat,
						maiores beatae reiciendis veniam fuga explicabo quae
						illo atque sunt nisi corrupti assumenda officiis eos
						dolores enim. Amet, ratione. Tempora sequi sint sed,
						alias maxime voluptas recusandae praesentium voluptate
						totam magnam saepe suscipit delectus ea quisquam impedit
						tempore veniam. Facilis totam neque quia?
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
