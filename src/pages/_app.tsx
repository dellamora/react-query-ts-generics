import { type AppType } from "next/dist/shared/lib/utils";

import "../common/styles/globals.css";
import BaseLayout from "../layouts/basedLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
     <Component {...pageProps} />;
    </BaseLayout>
  )
};

export default MyApp;
