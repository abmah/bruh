import React from "react";

export default function DeleteJwt() {
  React.useEffect(() => {
    localStorage.removeItem("DC_Token");
    window.location.href = "/";
  }, []);
  return <div>deleted!!</div>;
}
