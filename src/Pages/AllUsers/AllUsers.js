import React from "react";
import { useContext } from "react";
// import { Link } from "react-router-dom";
import { ApiContext } from "../../DataContext.js/DataContext";
import "./AllUsers.css";

const AllUsers = () => {
  const { allUsers } = useContext(ApiContext);
  // console.log(allUsers);
  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("are you sure?");
        }
        window.location.reload();
        // console.log(data);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Contact</th> */}
              <th>User Role</th>
              {/* <th>Delete User</th> */}
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.contact}</td> */}
                  <td>
                    {user?.role ? (
                      <button className="btn btn-primary disabled">
                        Admin
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleMakeAdmin(user._id)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  {/* <td>
                    <button className="btn btn-primary">Delete</button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
