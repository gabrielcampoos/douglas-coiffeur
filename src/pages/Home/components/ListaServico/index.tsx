import CircleIcon from '@mui/icons-material/Circle';
import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const ListaServico = () => {
	return (
		<Grid item>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Cabelo" />
			</ListItem>

			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Barba" />
			</ListItem>

			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Hidratação" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Limpeza de pele" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Depilação nariz ou orelha" />
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<CircleIcon />
				</ListItemIcon>
				<ListItemText primary="Desconto produtos e serviços" />
			</ListItem>
		</Grid>
	);
};

export default ListaServico;
