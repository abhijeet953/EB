import "./post.css";
import { Link } from "react-router-dom";

// import Avatar from "react-avatar";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

import Button from 'react-bootstrap/Button'
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Post({ post }) {
  const {user} =useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <MDBCard>
        {post.photo && (
          <MDBCardImage
            className="postImg"
            src={PF + post.photo}
            alt="EB"
            position="top"
          />
        )}
        <MDBCardBody className="postInfo">
          <MDBCardText className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <hr/>
            <p className="postDesc">{post.location} <label></label> {post.reward}</p>
            <hr/>
            <p className="postDesc">{post.desc}</p>
            <span className="postDate">
              {new Date(post.createdAt).toDateString()}
            </span>
            <hr/>
            
            {user.userCategory==="Organizer"?
              <Button variant="outline-dark">
              <Link to="/write">Contact</Link>
              </Button>:<Button >Register</Button>}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
