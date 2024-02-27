import { useQuery } from 'react-query';
import axios from 'axios';

const useFetch = (endpoint) => {
  const fetchData = async () => {
    const response = await axios.get(
      `${endpoint}api_key=${import.meta.env.VITE_REACT_APP_TMDB_API_KEY}`,
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery(endpoint, fetchData);

  return { data, isLoading, error };
};

export default useFetch;
