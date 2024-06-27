import { useState } from "react";

// routers
import { Routes, Route } from "react-router-dom";
import routes from "./routes";





function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-white">
      <div className="fixed top-0 bg-primary w-full h-screen">
        <Routes>
          {routes.map((route) => {
            if (route.type === "single") {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            } else if (route.type === "multiple") {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                >
                  {route.list?.map((listroute) => {
                    return (
                      <Route
                        key={listroute.path}
                        path={listroute.path}
                        element={listroute.component}
                      />
                    );
                  })}
                </Route>
              );
            }
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
