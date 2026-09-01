function RecentUsers({ users }) {
    const recentUsers = users.slice(0, 5);

    return (
        <div className="recentSection">
            <div className="recentHeader">
                <h2>Recent Users</h2>
            </div>

            <div className="recentList">
                {recentUsers.map((user) => (
                    <div className="recentItem" key={user.id}>
                        <img
                            className="userImage"
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                        />

                        <div>
                            <p className="primaryText">
                                {user.firstName} {user.lastName}
                            </p>

                            <span>{user.email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentUsers;
