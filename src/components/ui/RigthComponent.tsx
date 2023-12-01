import { Routes, Route } from "react-router-dom";
import { MenuData } from "./MenuData";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function RigthComponent() {
  return (
    <div className="flex flex-col h-[74rem] w-[81.67%] pb-8">
      <Routes>
        {MenuData.map((e, index) => (
          <Route path={e.path} element={e.component} key={index} />
        ))}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
