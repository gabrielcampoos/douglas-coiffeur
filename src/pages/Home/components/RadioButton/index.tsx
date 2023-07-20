import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';

export default function ControlledRadioButtonsGroup() {
	const [value, setValue] = React.useState('Cabelo');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<FormControl sx={{
            padding: '0 2rem'
        }}>
			<FormLabel id="demo-controlled-radio-buttons-group"  color="primary" >
				Opções:
			</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel
					value="Cabelo"
					control={<Radio  color="default"/>}
					label="Cabelo"
				/>
				<FormControlLabel
					value="Barba"
					control={<Radio  color="default"/>}
					label="Barba"
				/>
                <FormControlLabel
					value="Hidratação"
					control={<Radio  color="default"/>}
					label="Hidratação"
				/>
                <FormControlLabel
					value="Limpeza de pele"
					control={<Radio  color="default"/>}
					label="Limpeza de pele"
				/>
                <FormControlLabel
					value="Depilação nariz orelha"
					control={<Radio  color="default"/>}
					label="Depilação nariz orelha"
				/>
                <FormControlLabel
					value="Desconto produtor e serviços"
					control={<Radio  color="default"/>}
					label="Desconto produtor e serviços"
				/>
			</RadioGroup>
		</FormControl>
	);
}
