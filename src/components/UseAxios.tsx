import { useAxios } from "../hooks/useAxios.hook";

function UseAxios() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div>
      <div>{data && data.status}</div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error!"}</div>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxios;
