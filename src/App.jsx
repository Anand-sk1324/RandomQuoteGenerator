import { useEffect } from "react";
import { useState } from "react";
function App() {
    const [quote, setQuote] = useState("");
    const fetchQuote = async () => {
        let result = await fetch(
            "https://api.api-ninjas.com/v1/quotes?category=inspirational",
            {
                headers: {
                    "X-Api-Key": "Si6FlKID3ahFury5LlyY1Q==wxOLu9t25YOLCcRy",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => data[0].quote);
        setQuote(result);
    };
    useEffect(() => {
        fetchQuote();
    }, []);
    return (
        <div className="App">
            <h1>A Random Quote</h1>
            {quote}
            <br />
            <button onClick={fetchQuote}>Get Quote</button>
        </div>
    );
}

export default App;
