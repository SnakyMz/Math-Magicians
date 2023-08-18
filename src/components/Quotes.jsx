import { useEffect, useState } from 'react';

function Quotes() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState('');
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responce = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'JKZPHBt7RyLSIBui4mVJSQ==gv0jhhogQan4jcrl',
          },
        });
        const json = await responce.json();
        setData({
          quote: json[0].quote,
          author: json[0].author,
        });
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) return <div id="loading">Loading...</div>;
  if (hasError) return <div id="error">Something went wrong!</div>;

  return (
    <span className="quote">
      &quot;
      {data.quote}
      &quot;
      -
      &nbsp;
      {data.author}
    </span>
  );
}

export default Quotes;
