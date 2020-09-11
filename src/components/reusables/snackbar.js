import React, {useState, useEffect} from 'react';

export const Snackbar = ({message}) => {
    const [view, setView] = useState(true);
    const [text, setText] = useState("");
    useEffect(() => {
        if(message) {
           setText(message.split("*")[0])
        }
        show();
        return () => {
        }
    }, [message]);

    const show = () => {
        setView(true);
        setTimeout(()=> {
            setView(false);
            setText("");
        }, 2000)
    }
    

    if(view) {
        return (
            <div style={styles.snackbarContainer}>
                {text}
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
        fontWeight: "500",
        position: "fixed",
        top: "1%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        animationDelay: "2s"
    }
}