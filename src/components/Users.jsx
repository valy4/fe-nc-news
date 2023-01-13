import { Link } from "react-router-dom";

export const Users = ({ usersList, setSingleUser, setUserLogged }) => {
  return (
    <div>
      <ul className="Users_list">
        {usersList.map((user) => {
          return (
            <li key={user.username} className="User_card">
              <img className="User_img" src={user.avatar_url} />
              <p>{user.name}</p>
              <p>{user.username}</p>
              <Link to="/">
                <button
                  onClick={() => {
                    setUserLogged(true);
                    setSingleUser(user);
                  }}
                >
                  Log in as...
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
