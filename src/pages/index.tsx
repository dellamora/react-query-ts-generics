import Grid from "../modules/hero/grid";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

export default function Home() {
  const {
    data: characters,
    isLoading,
    fetchNextPage,
  } = useRickAndMortyAPI("character");

  return (
    <div>
      <Grid
        rickandmortyAPI={characters}
        onLoadMore={() => {
          if (isLoading) return;
          fetchNextPage();
        }}
      />
    </div>
  );
}
