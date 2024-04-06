import { useContext, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useLocalStorage } from "@uidotdev/usehooks";
import { PreferenceContext } from './PreferenceContext';


function David() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [savedName, saveName] = useLocalStorage("name", '');
    console.log(name, 'name')
    console.log(savedName, 'savedName')
    const {prefs, setPrefs} = useContext(PreferenceContext);
    console.log(prefs, 'prefsDavid')
    console.log(prefs, 'prefs')

    function handleClickOpen() {
        setOpen(true);  
        setName('David')
    }

    useEffect(() => {
        if(name) { 
            saveName({name})
            setPrefs({...prefs,name})
        }
    }, [name])

    useEffect(() => {
        // const savedName = localStorage.getItem('name')
        if(savedName?.name) setName(savedName?.name)
    },[])

    return (
        <>
                <div>
                    <button onClick={handleClickOpen}>Dave
                    </button>
                </div>
                <Dialog
                open={open}
                // onClose={}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Hello"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    My name is David
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                {/* <Button onClick={()=>setOpen(true)}>Disagree</Button> */}
                <Button onClick={()=>setOpen(false)} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default David;