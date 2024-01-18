import React, {useState} from "react";
import axios from "axios";

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const ChangePassword = () => {
        axios.put(
            "http://localhost:3001/auth/changepassword", 
            {
                oldPassword: oldPassword, 
                newPassword: newPassword,
            }, 
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }
        )
        .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            }
        });
    }
    return (
        <div>
            <h1>Cambie su contraseña</h1>
            <input 
                type='text' 
                placeholder='Antigua contraseña...' 
                onChange={(event) => {
                    setOldPassword(event.target.value);
                }} 
            />
            <br></br>
            <input 
                type='text' 
                placeholder='Nueva contraseña...' 
                onChange={(event) => {
                    setNewPassword(event.target.value);
                }} 
            />
            
            <button onClick={ChangePassword}> Guardar cambios </button>
        </div>
    )
}

export default ChangePassword