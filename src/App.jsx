import {useState} from 'react';

const data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

];


function App(){

  const [sortedData,setSortedData] = useState(data);

  const handleDate = () => {
    let newData = [...data].sort((a,b) => new Date(b.date) - new Date(a.date));
    
    setSortedData(newData);
  }

  const handleViews = () => {
    let newData = [...data].sort((a,b) => b.views - a.views);
    
    setSortedData(newData);
  }
  return (
    <div>
      <h1>Date and Views Table</h1>

      <div>
        <button onClick={handleDate}>
          Sort by Date 
        </button>
        <button onClick={handleViews}>
          Sort by Views
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              Views
            </th>
            <th>
              Atricle
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((item,idx) => (
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;