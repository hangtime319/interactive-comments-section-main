import React from "react";
import "./App.css";
import CommentSection from "./components/comments/CommentSection";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <CommentSection />
    </UserProvider>
  );
};

export default App;
