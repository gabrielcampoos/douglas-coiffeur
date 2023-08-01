import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuemSomosMd = () => {
	const navigate = useNavigate();

	return (
		<Box component="main" bgcolor="#000" id="SobreMobile">
			<Container
				component="section"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
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
					mt={5}
					mb={5}
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="100%"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						width="100%"
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						QUEM SOMOS
					</Typography>
				</Box>
				<Box>
					<Typography
						component="p"
						color={'whitesmoke'}
						textAlign="justify"
						mb={4}
						mt={4}
					>
						Bem-vindo à nossa barbearia! Desde que abrimos nossas
						portas em 2018, estamos empenhados em proporcionar uma
						experiência excepcional de cuidados masculinos. Nosso
						compromisso com a excelência nos levou a buscar
						constantemente elevar o padrão dos nossos serviços a
						cada ano. Aqui na nossa barbearia, não nos contentamos
						com o status quo. Nossa missão é ser a referência
						definitiva na cidade quando se trata de serviços de
						barbearia e cuidados pessoais para homens. Para alcançar
						esse objetivo, nos esforçamos para oferecer cortes e
						barbas impecáveis, estilos inovadores e um atendimento
						personalizado que supera as expectativas dos nossos
						clientes. Cada visita à nossa barbearia é uma
						oportunidade para nos aprimorarmos e crescermos junto
						com a nossa comunidade. Apreciamos e valorizamos a
						confiança que nossos clientes depositam em nós, e é por
						isso que trabalhamos incansavelmente para garantir que
						cada cliente saia satisfeito e confiante com sua
						aparência. Nossa equipe de barbeiros altamente
						qualificados e dedicados.
						<br /> <br />
						Nossa equipe está pronta para oferecer os melhores
						serviços e cuidados, utilizando técnicas modernas e
						produtos de alta qualidade.
						<br /> <br />
						Venha fazer parte da nossa jornada de crescimento e
						descubra por que somos mais do que uma simples
						barbearia. Somos uma comunidade de homens que valorizam
						a aparência e o bem-estar, e estamos ansiosos para
						recebê-lo com os braços abertos. Junte-se a nós e
						experimente a diferença de uma barbearia que se esforça
						continuamente para subir de nível e se destacar como
						referência na cidade.
					</Typography>
				</Box>

				{/* CARD INSTAGRAM */}

				<Container
					disableGutters
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.15rem solid #000',
					}}
				>
					<Box
						onClick={() => {
							navigate('/sobre');
							window.scrollTo(0, 0);
						}}
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
					>
						<Box
							width="95%"
							height="90%"
							border="0.15rem solid #f6b332"
							borderRadius="0.5rem"
							position="absolute"
							left="0.3rem"
							top="0.2rem"
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
							SAIBA MAIS
						</Typography>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default QuemSomosMd;
