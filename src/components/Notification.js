import React from "react";

const Notification=({showNotification})=>{
    return(
        <div className={`${showNotification ? 'show' : ''} notification-container`} >
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification