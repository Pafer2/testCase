import { Group, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { axiosInstance } from "../util/axiosInstance";
import CommentForm from "./CommentForm";

export default function LargeImageWithComments({currentImgId}) {
    const [currentImgInfo, setCurrentImgInfo] = useState(null)

    useEffect(() => {axiosInstance.get(`image/${currentImgId}`).then(res => setCurrentImgInfo(res.data))}, [])

    console.log(currentImgInfo)

    return (<>
        {currentImgInfo && 
        <Stack h={"100%"}>

            {/* TODO: loader */}
            <Image src={currentImgInfo.largeImage}></Image>

            {currentImgInfo.comments.map(comment => {

                return <Group key={comment.id}> 
                <Text>{comment.author}:</Text>
                <Text>{comment.text}</Text>
                </Group> 
            })}

        <CommentForm imgId={currentImgId}/>


  
        </Stack>}
        </>)

}