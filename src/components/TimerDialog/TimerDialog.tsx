import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimerDialog = ({ open, setOpen }: Props) => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const handleChangeHours = (event: SelectChangeEvent<typeof hours>) => {
        setHours(Number(event.target.value));
    };

    const handleChangeMinutes = (event: SelectChangeEvent<typeof minutes>) => {
        setMinutes(Number(event.target.value));
    };

    const handleClose = (
        event: React.SyntheticEvent<unknown>,
        reason?: string
    ) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    return (
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
                <Box component='form' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor='demo-dialog-native'>
                            Hours
                        </InputLabel>
                        <Select
                            labelId='demo-dialog-select-label'
                            id='demo-dialog-select'
                            value={hours}
                            onChange={handleChangeHours}
                            input={<OutlinedInput label='Hours' />}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id='demo-dialog-select-label'>
                            Minutes
                        </InputLabel>
                        <Select
                            labelId='demo-dialog-select-label'
                            id='demo-dialog-select'
                            value={minutes}
                            onChange={handleChangeMinutes}
                            input={<OutlinedInput label='Minutes' />}
                        >
                            <MenuItem value={0}>0</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TimerDialog;
