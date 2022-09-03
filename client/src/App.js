import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
// import ChatroomPage from "../../unusedfiles/ChatroomPage";
import io from "socket.io-client";
// import makeToast from "./Toaster";
import React from "react";
import DeleteJwt from "./pages/DeleteJwt";
function App() {
  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("DC_Token");
    const URL = "https://dizcorddds.herokuapp.com";
    if (token && !socket) {
      const newSocket = io(`${URL}`, {
        query: {
          token,
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
      });

      newSocket.on("connect", () => {});

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  const LoginPageWrapper = () => {
    return <LoginPage setupSocket={setupSocket} />;
  };
  const DashboardPageWrapper = () => {
    return <DashboardPage socket={socket} />;
  };
  // const ChatroomPageWrapper = () => {
  //   return <ChatroomPage socket={socket} />;
  // };
  // const TestPageWrapper = () => {
  //   return <TestPage socket={socket} />;
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} exact />
        <Route path="/login" element={<LoginPageWrapper />} exact />
        <Route path="/dashboard" element={<DashboardPageWrapper />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/reset" element={<DeleteJwt />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*


























*/
// import { AppContextProvider } from "./components/context/AppContext";
// import Dizcord from "./components/Dizcord";
// function App() {
//   return (
//     <div className="components-body">
//       <AppContextProvider>
//         <Dizcord />
//       </AppContextProvider>
//     </div>
//   );
// }

// export default App;
