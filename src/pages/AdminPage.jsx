import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { apiUrl } from "../config/apiConfig";
import { UserContext } from "../context/User";

export default function AdminPage() {
  const { token } = useContext(UserContext);
  const [userId, setUSerId] = useState(null);
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState({ name: "", email: "", role: "" });

  const getAllUsers = async () => {
    const res = await axios.get(`${apiUrl}/users`);
    const data = res.data;
    setUsers(data.data);
  };
  const handleClickDelete = async (user) => {
    const deletedUser = await axios.delete(`${apiUrl}/users/${user._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const filterdUSers = users.filter((user) => {
      return user._id != deletedUser.data.data.data._id;
    });
    setUsers(filterdUSers);
  };
  const handleClickEdit = (user) => {
    setEditData({ name: user.name, email: user.email, role: user.role });
    setUSerId(user._id);
  };
  const handleClickUpdate = async (id) => {
    const updateUser = await axios.patch(`${apiUrl}/users/${id}`, editData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const updateUsers = users.map((user) => {
      if (user.id == updateUser.data.data.updatedUser._id) {
        return updateUser.data.data.updatedUser;
      }
      return user;
    });

    setUSerId(null);
    setEditData({ name: "", email: "", role: "" });

    setUsers(updateUsers);
  };
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                {user.id == userId ? (
                  <form>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                    ></input>
                  </form>
                ) : (
                  user.name
                )}
              </td>
              <td>
                {" "}
                {user.id == userId ? (
                  <form>
                    <input
                      type="text"
                      value={editData.email}
                      name="email"
                      onChange={handleChange}
                    ></input>
                  </form>
                ) : (
                  user.email
                )}
              </td>
              <td>
                {" "}
                {user.id == userId ? (
                  <form>
                    <input
                      type="text"
                      value={editData.role}
                      name="role"
                      onChange={handleChange}
                    ></input>
                  </form>
                ) : (
                  user.role
                )}
              </td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleClickEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={async () => handleClickDelete(user)}
                >
                  Delete
                </button>
                {user.id == userId ? (
                  <button
                    className="update-button"
                    onClick={() => handleClickUpdate(user.id)}
                  >
                    Update
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row gray full-width page-padding-top padding-bottom-50">
        <div className="row row-4-4">
          <div className="column column-1-4">
            <h6 className="box-header">About Us</h6>
            <p className="description t1">
              Founded by Kevin Smith back in 2000. Renovate has estabilished
              itself as one of the greatest and prestigious providers of
              construction focused interior renovation services and building.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a
                  target="_blank"
                  href="https://facebook.com/QuanticaLabs"
                  className="social-facebook"
                  title="facebook"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/QuanticaLabs"
                  className="social-twitter"
                  title="twitter"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://1.envato.market/quanticalabs-portfolio"
                  className="social-linkedin"
                  title="linkedin"
                />
              </li>
              <li>
                <a
                  href="https://pinterest.com/quanticalabs/"
                  className="social-pinterest"
                  title="pinterest"
                />
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Our Services</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">Interior Renovation</li>
              <li className="template-bullet">Design and Build</li>
              <li className="template-bullet">Tiling and Painting</li>
              <li className="template-bullet">Paver Walkways</li>
              <li className="template-bullet">Household Repairs</li>
              <li className="template-bullet">Solar Systems</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Categories</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="category.html" title="BUILD">
                  BUILD
                </a>
              </li>
              <li>
                <a href="category.html" title="DESIGN">
                  DESIGN
                </a>
              </li>
              <li>
                <a href="category.html" title="FLOORING">
                  FLOORING
                </a>
              </li>
              <li>
                <a href="category.html" title="PAINTING">
                  PAINTING
                </a>
              </li>
              <li>
                <a href="category.html" title="PAVERS">
                  PAVERS
                </a>
              </li>
              <li>
                <a href="category.html" title="PLUMBING">
                  PLUMBING
                </a>
              </li>
              <li>
                <a href="category.html" title="RENOVATION">
                  RENOVATION
                </a>
              </li>
              <li>
                <a href="category.html" title="REPAIRS">
                  REPAIRS
                </a>
              </li>
              <li>
                <a href="category.html" title="SOLAR SYSTEMS">
                  SOLAR SYSTEMS
                </a>
              </li>
              <li>
                <a href="category.html" title="TILING">
                  TILING
                </a>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Latest Posts</h6>
            <ul className="blog small margin-top-30">
              <li>
                <a
                  href="post.html"
                  title="What a Difference a Few Months Make"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_10.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="What a Difference a Few Months Make"
                  >
                    What a Difference a Few Months Make
                  </a>
                  <ul className="post-details">
                    <li className="date">April 25, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="post.html"
                  title="Kitchen and Living Room Renovation"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_07.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="Kitchen and Living Room Renovation"
                  >
                    Kitchen and Living Room Renovation
                  </a>
                  <ul className="post-details">
                    <li className="date">April 17, 2015</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
