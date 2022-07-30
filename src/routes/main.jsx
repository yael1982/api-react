import React from "react"
import { ReactDOM } from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "../App"
import PaisTable from "../components/PaisTable"


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                   <Route path="tablas" element={<PaisTable/>}/>
                    <Route index element={
                        <main style={{ padding: "1rem" }}>
                            <p>Holi</p>
                        </main> }/>  
                    <Route path=":tablasId" element={<PaisTable/>}/>
            </Routes>


        </BrowserRouter>

    </React.StrictMode>

)


