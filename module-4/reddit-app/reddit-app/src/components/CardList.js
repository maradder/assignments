// import React, { useContext, createContext, useState, useEffect } from "react";
// import { Context } from "../context/Context";
// // import {otherRequester} from '../context/UserContext'
// import { PostCard } from "./PostCard";
// import snoowrap from "snoowrap";
// import { secrets } from "../.secrets.js";
// import styled from "styled-components";

// const Card = styled.div`
//   background-color: yellow;
// `;

// const ua = navigator.userAgent;

// // const handleClick = () => getInitial()
// export const otherRequester = new snoowrap({
//   userAgent: ua,
//   clientId: secrets.clientId,
//   clientSecret: secrets.clientSecret,
//   username: secrets.username,
//   password: secrets.password,
// });

// const CardList = (props) => {
//   const [sport, setSports] = useState(["hello"]);
//   const checkForImageInUrl = (url) =>
//     url.substring(url.lastIndexOf(".") + 1) === "jpg";

//   useEffect(() => {
//     otherRequester
//       .getSubreddit("OldSchoolCool")
//       .getHot()
//       .then((Listing) =>
//         Listing.map((Submission) => {
//           console.log(Submission);
//           setSports((prevState) => [...prevState, Submission]);
//         })
//       );
//     return () => {
//       sport.map((post) => {
//         return (
//           <Card
//             style={{
//               border: "1px solid #ffffff",
//               borderRadius: "8px",
//               maxWidth: "450px",
//               margin: "150px auto",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "16px",
//                 fontWeight: "300",
//                 textAlign: "center",
//                 maxWidth: "90%",
//                 overflow: "hidden",
//               }}
//             >
//               {post.title}
//             </h3>
//             <a href={post.url}>
//               <img
//                 src={
//                   checkForImageInUrl(post.url) === true
//                     ? post.url
//                     : post.thumbnail
//                 }
//                 alt={"Reddit Post"}
//                 style={{ width: "100%" }}
//               />
//             </a>
//             <div
//               className="InfoBar"
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <p className="UpVote">
//                   <i className="far fa-thumbs-up"></i>
//                   {post.ups}
//                 </p>
//                 <p className="DownVote">
//                   <i className="far fa-thumbs-down"></i>
//                   {post.downs}
//                 </p>
//               </div>
//               {/* <p>{post.oc}</p>
//                         <p className="Saved" favorited={post.saved} /> */}
//               <button onClick={() => console.log(checkForImageInUrl(post.url))}>
//                 check
//               </button>
//             </div>
//           </Card>
//         );
//       });
//     };
//   }, []);
// };

// export { CardList };
