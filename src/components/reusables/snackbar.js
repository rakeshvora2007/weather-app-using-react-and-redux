import React, {useState} from 'react';

export const Snackbar = ({message}) => {
    const [view, setView] = useState(false);

    const show = () => {
        setView(true);
        setTimeout(()=> {
            setView(false);
        }, 3000)
    }
    

    if(view) {
        return (
            <div style={styles.snackbarContainer}>
                {message}
            </div>
        )
    } else {
        return null;
    }
}


const styles = {
    snackbarContainer : {
        display: "inline-block",
        padding: "10px",
        background: "#f44336",
        width: "200px",
        textAlign: "center",
        color: "white",
        fontWeight: "500"
    }
}