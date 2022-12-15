import { FC } from "react";
import Layout from "@/components/molecules/Layout";
import Modal from "@/components/molecules/Modal";

const Home: FC = () => {
    return (
        <Layout.Box>
            <Modal>
                <Modal.Contents>
                    <Modal.Header>
                        Header
                    </Modal.Header>
                    <Modal.Body>
                        Body
                    </Modal.Body>
                    <Modal.Footer>
                        Footer
                    </Modal.Footer>
                </Modal.Contents>
            </Modal>
        </Layout.Box>
    );
}

export default Home;