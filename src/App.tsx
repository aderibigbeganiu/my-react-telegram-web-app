import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                {WebApp.initDataUnsafe?.user ? (
                    <div>
                        <h1>Welcome {WebApp.initDataUnsafe?.user?.username}</h1>
                        User data:
                        <pre>
                            {JSON.stringify(
                                WebApp.initDataUnsafe?.user,
                                null,
                                2
                            )}
                        </pre>
                        Eniter Web App data:
                        <pre>{JSON.stringify(WebApp, null, 2)}</pre>
                    </div>
                ) : (
                    <div>Make sure web app is opened from telegram client</div>
                )}
            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {/* Here we add our button with alert callback */}
            <div className="card">
                <button
                    onClick={() =>
                        WebApp.showAlert(
                            `Hello World! Current count is ${count}`
                        )
                    }
                >
                    Show Alert
                </button>
            </div>
        </>
    );
}

export default App;
