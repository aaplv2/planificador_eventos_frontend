// import React, { useEffect, useState } from "react";
// import { useProfileStore } from "../../stores/profileStore";
// import { getUser } from "../../utils/auth";


// function Profile() {
//   const [email, setEmail] = useState();

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//       getUser(token).then(({data}) => {
//         setEmail(data.email);
//       });
//     }
//   }, []);

//   return (
//     <div className="profile">
//       <h2 className="profile-mail">{email}</h2>
//     </div>
//   );
// }

// export default Profile;
