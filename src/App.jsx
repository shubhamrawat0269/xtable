import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    let sortedDataBasedDate = data.sort(
      (b, a) => Date.parse(new Date(a.date)) - Date.parse(new Date(b.date))
    );
    console.log(sortedDataBasedDate);
    setData(() => [...sortedDataBasedDate]);
  };

  const handleSortByViews = () => {
    let sortedDataBasedViews = data.sort((b, a) => a.views - b.views);
    console.log(sortedDataBasedViews);
    setData(() => [...sortedDataBasedViews]);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div className="btns">
        <button className="date" onClick={handleSortByDate}>
          Sort by Date
        </button>
        <button className="views" onClick={handleSortByViews}>
          Sort by Views
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cur, id) => {
            return (
              <tr key={id}>
                <td>{cur.date}</td>
                <td>{cur.views}</td>
                <td>{cur.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
