import { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("Failed to fetch quote");

      const data = await res.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Stay calm. Something went wrong.");
      setAuthor("Anonymous");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="quotes">
      <span className="section-tag">DAILY INSPIRATION</span>
      <h2>Words of Hope</h2>

      <div className="quote-card">
        {loading ? (
          <p>Loading inspiration...</p>
        ) : (
          <div key={quote}>
            <p className="quote-text">“{quote}”</p>
            <span className="quote-author">— {author}</span>
            <button onClick={fetchQuote} disabled={loading}>
              🔄 New Quote
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quotes;