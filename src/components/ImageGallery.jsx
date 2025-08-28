

import { Grid, Image, Modal, Stack, Text } from "@mantine/core";
import { axiosInstance } from "../util/axiosInstance";
import {useEffect, useState} from "react";
import ClickableImage from "./ClickableImage";
import { useDisclosure } from "@mantine/hooks";
import LargeImageWithComments from "./LargeImageWithComments";

export default function ImageGallery() {

    const [imgListState, setImgListState] = useState([])
    const [currentImgId, setCurrentImgId] = useState(null)
    
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        axiosInstance.get("images").then(res => setImgListState(res.data))
        }, [])



    return <Grid p={20}  type="container"
    breakpoints={{ xs: '300px', sm: '500px', md: '800px', lg: '1200px', xl: '1600px' }}>

        {imgListState.map(image => {
            return <Grid.Col key={image.id} span={{sm: 12, md: 6, lg: 4}}> 
                    <Stack align="center" justify="center" gap={3}>
                    <ClickableImage onClick={() => { setCurrentImgId(() => image.id); open()}} src={image?.image} />
                    <Text>id:{image.id}</Text>
                    </Stack> 
                </Grid.Col>
        })}

        <Modal size={1000} style={{width: "100vw", height: "100vh", overflow: "auto"}} transitionProps={{duration: 200}} opened={opened} onClose={close}> <LargeImageWithComments currentImgId={currentImgId}></LargeImageWithComments> </Modal>
    </Grid>

}