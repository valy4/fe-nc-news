

export const Users = ({usersList}) => {
  
    return <div>
      <ul className="Users_list">
            {usersList.map((user) => {
    return <li className="User_card">
                <img className="User_img" src={user.avatar_url}/>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <button>Log in as...</button>

                </li>

            })}
        </ul>
    </div>
}