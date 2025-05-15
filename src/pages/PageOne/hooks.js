import { useState, useEffect } from 'react';

function usePageOne() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/page-1.json')
    .then(response => response.json())
    .then(jsonData => setData(jsonData))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return { data };
}

export default usePageOne;