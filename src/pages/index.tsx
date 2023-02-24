import Grid from "../modules/hero/grid";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const {
    data: characters,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useRickAndMortyAPI("character");
  const { ref, inView } = useInView({});

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (inView) fetchNextPage();
    }, 100);
    return () => clearTimeout(timeOut);
  }, [inView, isFetchingNextPage]);

  return (
    <div>
      <Grid rickandmortyAPI={characters} />
      {!isLoading && !isFetchingNextPage && hasNextPage ? (
        <div ref={ref} className="-mt-60 flex h-10 justify-center " />
      ) : null}
    </div>
  );
}
