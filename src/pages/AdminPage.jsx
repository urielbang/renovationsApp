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
            <th>שם</th>
            <th>אימייל</th>
            <th>תפקיד</th>
            <th>פעולות</th>
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
                  ערוך
                </button>
                <button
                  className="delete-button"
                  onClick={async () => handleClickDelete(user)}
                >
                  מחק
                </button>
                {user.id == userId ? (
                  <button
                    className="update-button"
                    onClick={() => handleClickUpdate(user.id)}
                  >
                    עדכן
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
            <h6 className="box-header">אודותינו</h6>
            <p className="description t1">
              נוסדה על ידי קווין סמית בשנת 2000. Renovate יצרה את עצמה כאחת
              מהספקים הגדולים והיוקרתיים ביותר של שירותי שיפוץ פנים ממוקדי
              בנייה.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a
                  target="_blank"
                  href="https://facebook.com/QuanticaLabs"
                  className="social-facebook"
                  title="פייסבוק"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/QuanticaLabs"
                  className="social-twitter"
                  title="טוויטר"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://1.envato.market/quanticalabs-portfolio"
                  className="social-linkedin"
                  title="לינקדאין"
                />
              </li>
              <li>
                <a
                  href="https://pinterest.com/quanticalabs/"
                  className="social-pinterest"
                  title="פינטרסט"
                />
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">השירותים שלנו</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">שיפוץ פנים</li>
              <li className="template-bullet">תכנון ובנייה</li>
              <li className="template-bullet">ריצוף וצביעה</li>
              <li className="template-bullet">שבילי ריצוף</li>
              <li className="template-bullet">תיקונים ביתיים</li>
              <li className="template-bullet">מערכות סולאריות</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">קטגוריות</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="category.html" title="בנייה">
                  בנייה
                </a>
              </li>
              <li>
                <a href="category.html" title="עיצוב">
                  עיצוב
                </a>
              </li>
              <li>
                <a href="category.html" title="ריצוף">
                  ריצוף
                </a>
              </li>
              <li>
                <a href="category.html" title="צביעה">
                  צביעה
                </a>
              </li>
              <li>
                <a href="category.html" title="שבילי ריצוף">
                  שבילי ריצוף
                </a>
              </li>
              <li>
                <a href="category.html" title="אינסטלציה">
                  אינסטלציה
                </a>
              </li>
              <li>
                <a href="category.html" title="שיפוץ">
                  שיפוץ
                </a>
              </li>
              <li>
                <a href="category.html" title="תיקונים">
                  תיקונים
                </a>
              </li>
              <li>
                <a href="category.html" title="מערכות סולאריות">
                  מערכות סולאריות
                </a>
              </li>
              <li>
                <a href="category.html" title="ריצוף">
                  ריצוף
                </a>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">פוסטים אחרונים</h6>
            <ul className="blog small margin-top-30">
              <li>
                <a
                  href="post.html"
                  title="איזה שינוי יכולים לעשות כמה חודשים"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_10.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="איזה שינוי יכולים לעשות כמה חודשים"
                  >
                    איזה שינוי יכולים לעשות כמה חודשים
                  </a>
                  <ul className="post-details">
                    <li className="date">25 אפריל, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="post.html"
                  title="שיפוץ מטבח וסלון"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_07.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="post.html" title="שיפוץ מטבח וסלון">
                    שיפוץ מטבח וסלון
                  </a>
                  <ul className="post-details">
                    <li className="date">17 אפריל, 2015</li>
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
