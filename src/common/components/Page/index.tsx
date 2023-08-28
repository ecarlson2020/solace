import { ReactNode } from "react";
import Head from "next/head";
// mui
import { ThemeProvider } from "@mui/material/styles";
// theme
import { lightTheme, darkTheme } from "../../../theme";
// store
import { useRootStore, RootState } from "../../../store";
//components
import Header from '../../../common/components/Page/Header'

interface PageProps {
  children: ReactNode;
}

export default function Page(props: PageProps) {
  const { children } = props;
  const isLightMode = useRootStore((state: RootState) => state.isLightMode);

  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Header>
      </Header>
      {children}
    </ThemeProvider>
  );
}
