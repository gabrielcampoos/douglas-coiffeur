import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import * as React from 'react';

import Logo from '../../../../../assets/images/logo.png';

const options = [
	'PLANOS',
	'BOOKSY',
	'UNIDADE',
	'SERVIÇOS',
	'INSTITUTO COIFFEUR',
	'AGENDAR',
];

const SplitButton = () => {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	// const handleClick = () => {
	// 	if (options[selectedIndex] === 'BOOKSY') {
	// 		console.info(`You clicked ${options[selectedIndex]}`);
	// 	}
	// };

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number,
	) => {
		const MockupMobileRef = document.getElementById('MockupMobileRef');
		const PlanosMobile = document.getElementById('PlanosMobile');
		const ComoChegarMobile = document.getElementById('ComoChegarMobile');
		const ServicosMobile = document.getElementById('ServicosMobile');

		if (options[selectedIndex] === 'BOOKSY') {
			MockupMobileRef!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[selectedIndex] === 'PLANOS') {
			PlanosMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[selectedIndex] === 'UNIDADE') {
			ComoChegarMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		if (options[selectedIndex] === 'SERVIÇOS') {
			ServicosMobile!.scrollIntoView({ behavior: 'smooth' });
		}

		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	return (
		<React.Fragment>
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
							width: '100%',
						}}
					>
						<Toolbar
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								height: '20vh',
								zIndex: '99999',
							}}
						>
							<Box width="15%">
								<img
									src={Logo}
									alt="Logo Barbearia"
									width="100%"
								/>
							</Box>
							<ButtonGroup
								color="inherit"
								variant="outlined"
								ref={anchorRef}
								aria-label="split button"
							>
								{/* <Button onClick={handleClick}>
									{options[selectedIndex]}
								</Button> */}
								<Button
									size="small"
									aria-controls={
										open ? 'split-button-menu' : undefined
									}
									aria-expanded={open ? 'true' : undefined}
									aria-label="select merge strategy"
									aria-haspopup="menu"
									onClick={handleToggle}
								>
									<MenuIcon />
								</Button>
							</ButtonGroup>
							<Popper
								sx={{
									zIndex: 1,
								}}
								open={open}
								anchorEl={anchorRef.current}
								role={undefined}
								transition
								disablePortal
							>
								{({ TransitionProps, placement }) => (
									<Grow
										{...TransitionProps}
										style={{
											transformOrigin:
												placement === 'bottom'
													? 'center top'
													: 'center bottom',
										}}
									>
										<Paper>
											<ClickAwayListener
												onClickAway={handleClose}
											>
												<MenuList
													id="split-button-menu"
													autoFocusItem
												>
													{options.map(
														(option, index) => (
															<MenuItem
																key={option}
																// disabled={index === 2}
																// selected={index === selectedIndex}
																onClick={(
																	event,
																) =>
																	handleMenuItemClick(
																		event,
																		index,
																	)
																}
															>
																{option}
															</MenuItem>
														),
													)}
												</MenuList>
											</ClickAwayListener>
										</Paper>
									</Grow>
								)}
							</Popper>
						</Toolbar>
					</AppBar>
				</Container>
			</Box>
		</React.Fragment>
	);
};

export default SplitButton;
