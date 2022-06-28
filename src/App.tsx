import { FC } from "react";
import "./App.css";

import { PersonalCard } from "./PersonalCard";
import { usePersonalData } from "./containers";

const App: FC = () => {
    const { data, loading, fetchAPI } = usePersonalData();
    const handleAddCandidate = () => {
        fetchAPI();
    };
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleAddCandidate}>load</button>
            </header>
            {loading && <div>Loading...</div>}
            {!loading &&
                data.map((oneP) => (
                    <PersonalCard key={oneP.login.uuid} {...oneP} />
                ))}
        </div>
    );
};

export default App;
