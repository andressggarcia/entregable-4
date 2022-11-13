import React from 'react';

const UserList = ({userList, selectedUser, deleteUser}) => {
    return (
        <ul>
            <h1 className='h1-userList'>Users</h1>
            {
                userList.map((user) => (
                    <li key={user.id}>
                        <h3 className='name-list'> {user.first_name} {user.last_name} </h3>
                        <div className='br'></div>
                        <div className='div-email__list'>
                            <p className='p-email__list'>EMAIL</p>
                            <p className='email-list'> {user.email} </p>
                        </div> 
                        <div className='div-birthday__list'>
                            <p className='p-birthday__list'>BIRTHDAY</p>
                            <p className='birthday-user'>{user.birthday} </p>
                        </div>
                        <div className='br'></div>
                        <div className='div-buttons__list'>
                            <button className='button-delete' onClick={()=> deleteUser(user.id)}><i class="fa-regular fa-trash-can"></i></button>
                            <button className='button-edit' onClick={()=> selectedUser(user)}><i class="fa-solid fa-pen"></i></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UserList;