function RecentUsers({ users }) {
    const recentUsers = users.slice(0, 5);

    return (
        <div>
            <h2>Recent Users</h2>

            {recentUsers.map((user) => (
                <div key={user.id}>
                    <img
                        src={user.image}
                        alt={user.firstName}
                        width="40"
                    />

                    <span>
                        {user.firstName} {user.lastName}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default RecentUsers;
