// Borrar carpeta "views"
// Borrar las Routes
// Borrar los links

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Contacts from "./views/Contacts";
import Chat from "./views/Chat";
import Settings from "./views/Settings";

function App() {
  return (
    <>
      <body className="app">
        <header>
          <h1>My first Chat App with React</h1>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Contacts />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </body>
    </>
  );
}

export default App;
