import { getLayout } from "@layouts/main";
import Head from "next/head";
import { getOrchestrators } from "@lib/utils";
import { Flex, Container, Heading, Box } from "@livepeer/design-system";
import OrchestratorList from "@components/OrchestratorList";

const OrchestratorsPage = ({ orchestrators }) => {
  return (
    <>
      <Head>
        <title>Livepeer Explorer - Orchestrators</title>
      </Head>
      <Container size="3" css={{ width: "100%" }}>
        <Flex
          css={{
            flexDirection: "column",
            mt: "$4",
            width: "100%",
          }}
        >
          <Heading
            size="2"
            as="h1"
            css={{
              mb: "$4",
              fontWeight: 600,
              "@bp2": {
                fontSize: 26,
              },
            }}
          >
            Orchestrators
          </Heading>
          <Box css={{ mb: "$5" }}>
            <OrchestratorList data={orchestrators} pageSize={20} />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const orchestrators = await getOrchestrators();

  return {
    props: {
      orchestrators: orchestrators.sort((a, b) =>
        +b.totalVolumeETH > +a.totalVolumeETH ? 1 : -1
      ),
    },
    revalidate: 1,
  };
}

OrchestratorsPage.getLayout = getLayout;

export default OrchestratorsPage;
