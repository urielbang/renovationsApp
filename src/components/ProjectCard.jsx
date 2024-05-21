import React from "react";
import { Link } from "react-router-dom";
import img11 from "../assets/images/samples/270x180/image_01.jpg";
import { MdDeleteForever } from "react-icons/md";

export default function ProjectCard({ project }) {
  return (
    <li className="renovation">
      <Link to={`/oneProject/${project._id}`} title="Interior Renovation">
        <img src={img11} alt="" />
      </Link>
      <div className="view align-center">
        <div className="vertical-align-table">
          <div className="vertical-align-cell">
            <p className="description">Interior Renovation</p>

            <Link className="more simple" to={`/oneProject/${project._id}`}>
              VIEW PROJECT
            </Link>
            <div className="containerDelete">
              <MdDeleteForever />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
