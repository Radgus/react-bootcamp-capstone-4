import { useState, useEffect } from 'react';


export function useFetching(url, array = []) {
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  const pedirAlgo = async() => {
    // aqui hacer el fetch
    // const response = await fetch.....
    // return response
  }

  useEffect(() => {
    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({ data: {}, isLoading: true });

        const response = await fetch(url,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
      setFeaturedProducts(() => ({
        data: {},
        isLoading: true,
      }))
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url,...array]);

  return featuredProducts;
  // return pedirAlgo();
}
