

const Profile = () => {
    return (
        <div className="profile-conatiner">
            <h1>PERFIL</h1>
            <div className="profile">
                <img src="../../public/foto-perfil.png" className="imagenPerfil" />
                <div className="profileDet">
                    <span>maestro.splinter@gmail.com</span>
                    <button className="btnCloseSesion">Cerrar sesión</button>
                </div>
            </div>
        </div>
    )
}

export default Profile