import { FC } from "react";
import Layout from "@/components/molecules/Layout";
import Text from "@/components/molecules/Text";

const Home: FC = () => {
    return (

        <Layout.Flex className="flex-col bg-red-500 gap-20 max-w-xs">
            <Layout.Box>
                <Text.Primary className="text-blue-300" as="a" href="https://jumpit.co.kr" target="_blank">sad</Text.Primary>
            </Layout.Box>
            <Layout.Box>
                sasd
            </Layout.Box>
            <Text as="select">
                <Text as="option">dsad</Text>
                <Text as="option">dsad</Text>
            </Text>
            <Layout.List>
                <Layout.ListItem>dsad</Layout.ListItem>
                <Layout.ListItem>dsad</Layout.ListItem>
                <Layout.ListItem>dsad</Layout.ListItem>
                <Layout.ListItem>dsad</Layout.ListItem>
            </Layout.List>
        </Layout.Flex>
    );
}

export default Home;