import { Image } from "@mantine/core";
import { memo } from 'react';

const ClickableImage =  memo(function  ClickableImage({src, onClick}) {

    return <Image src={src} onClick={onClick} style={{cursor: "pointer", borderRadius: "5px"}}/> 

})

export default ClickableImage;