import { useQuery } from 'react-query';
import axios from 'axios';

const useFetch = (endpoint) => {
  const cancelTokenSource = axios.CancelToken.source();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${endpoint}api_key=${import.meta.env.VITE_REACT_APP_TMDB_API_KEY}`,
        { cancelToken: cancelTokenSource.token },
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request was cancelled.');
      } else {
        console.error('Error occurred during data fetching.', error);
        throw error;
      }
    }
  };

  const { data, error, isLoading, isError } = useQuery(endpoint, fetchData, {
    refetchOnWindowFocus: false,
    // The onCancel function is called when the query is cancelled
    onCancel: () =>
      cancelTokenSource.cancel('Query was cancelled by React Query.'),
  });

  return { data, isLoading, error, isError };
};

export default useFetch;
