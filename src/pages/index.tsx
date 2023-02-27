import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const {
    data: characters,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useRickAndMortyAPI("character");
  const { ref, inView } = useInView({});
  const [animationIndex, setAnimationIndex] = useState(0);

  const onAnimationComplete = () => {
    setAnimationIndex(animationIndex + 1);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (inView) fetchNextPage();
    }, 100);
    return () => clearTimeout(timeOut);
  }, [characters]);

  return (
    <div>
      <motion.div id="grid" className="h-fit p-10">
        <div className="grid grid-cols-cards gap-10">
          {characters.map((character, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                onAnimationComplete={onAnimationComplete}
                animate={{
                  opacity: 1,
                  transition: { delay: (i - animationIndex) * 0.1 },
                }}
                className="relative h-20 w-20 overflow-hidden rounded-lg bg-TextWhite"
                key={`card-${i}`}
              >
                <Image alt="pp" src={character.image} fill />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      {!isLoading && !isFetchingNextPage && hasNextPage ? (
        <div ref={ref} className="-mt-32 flex h-10 justify-center " />
      ) : null}
    </div>
  );
}
