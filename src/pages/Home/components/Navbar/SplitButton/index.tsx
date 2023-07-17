import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import * as React from 'react';

const options = [
	'BOOKSY',
	'UNIDADE',
	'SERVIÇOS',
	'INSTITUTO COIFFEUR',
	'AGENDAR',
];

export default function SplitButton() {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState('');

	// const handleClick = () => {
	// 	console.info(`You clicked ${options[selectedIndex]}`);
	// };

	// const handleMenuItemClick = (
	// 	event: React.MouseEvent<HTMLLIElement, MouseEvent>,
	// 	index: number,
	// ) => {
	// 	setSelectedIndex(index);
	// 	setOpen(false);
	// };

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
			<ButtonGroup
				color="inherit"
				variant="outlined"
				ref={anchorRef}
				aria-label="split button"
			>
				{/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
				<Button
					size="small"
					aria-controls={open ? 'split-button-menu' : undefined}
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
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
									{options.map((option, index) => (
										<MenuItem
											key={option}
											// disabled={index === 2}
											// selected={index === selectedIndex}
											// onClick={(event) =>
											// 	handleMenuItemClick(
											// 		event,
											// 		index,
											// 	)
											// }
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</React.Fragment>
	);
}
