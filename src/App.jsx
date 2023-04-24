// Borrar carpeta "views"
// Borrar las Routes
// Borrar los links

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./views/Contacts";
import Chat from "./views/Chat";
import Settings from "./views/Settings";

function App() {
  return (
    <>
      <header>
        <h1>Proyecto Gamma</h1>
      </header>
      <main>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
