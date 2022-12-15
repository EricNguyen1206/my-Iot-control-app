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
import { HOURS, MINUTES } from 'constant/Timer';
import React, { useState } from 'react';
import './TimerDialog.scss';

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
        <Dialog
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
            className='dialog'
        >
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
                <Box component='form' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor='hours'>Hours</InputLabel>
                        <Select
                            className='form__select'
                            labelId='hours'
                            id='hours'
                            value={hours}
                            onChange={handleChangeHours}
                            input={<OutlinedInput label='Hours' />}
                        >
                            {HOURS.map((hour) => (
                                <MenuItem value={hour}>{hour}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id='minutes'>Minutes</InputLabel>
                        <Select
                            className='form__select'
                            labelId='minutes'
                            id='minutes'
                            value={minutes}
                            onChange={handleChangeMinutes}
                            input={<OutlinedInput label='Minutes' />}
                        >
                            {MINUTES.map((minutes) => (
                                <MenuItem value={minutes}>{minutes}</MenuItem>
                            ))}
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
