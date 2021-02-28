import React from 'react';

const UserCard = (user) =>{
    return (
        <div>
            <li>
                {user.name}
            </li>
        </div>
    )
}

export default UserCard;