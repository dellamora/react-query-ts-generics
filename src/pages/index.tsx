import { motion } from "framer-motion";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { fetchAPI } from "../common/utils/fetch";
import { Character } from "../domain/interfaces";
import Footer from "../modules/footer";

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ characters }) => {
  return (
    <div>
      <motion.div id="grid" className="h-fit p-10">
        <div className="grid grid-cols-cards gap-6">
          {characters.map((character, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1, delay: 0.1 * i },
                }}
                className="relative h-24 w-24 overflow-hidden rounded-lg bg-TextWhite"
                key={`card-${i}`}
              >
                <Image alt="pp" src={character.image} fill />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
export default Home;

export const getServerSideProps = (async () => {
  const pages = [1, 2, 3, 4, 5];
  const results = pages.map(page =>
    fetchAPI({ endpoint: "character", pageParam: page }),
  );
  const awaitedResults = await Promise.all(results);
  const characters = awaitedResults.reduce((acc, curr) => {
    return [...acc, ...curr.data];
  }, [] as Character[]);
  return {
    props: {
      characters,
    },
  };
}) satisfies GetServerSideProps;
