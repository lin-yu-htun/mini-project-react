const ProfileCart = (props ) => {
    const {number, name, color, role, emoji,  hobby} = props
    return (
        <div className="profile-card" style={{ backgroundColor: color }}>
            <p className="profile-number">No. {number}</p>
            <div className="avatar">{emoji}</div>
            <h2>{name}</h2>
            <p className="role">{role}</p>
            <div className="hobby">
                <span>My Thing</span>
                <p>{hobby}</p>
            </div>
        </div>
    )
}

export default ProfileCart; 