import { Button, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useDisclosure } from "@mantine/hooks"
import { axiosInstance } from "../util/axiosInstance"

export default function CommentForm({imgId}) {

    const [sending, {open, close}] = useDisclosure()


    console.log("imgId", imgId)
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
        comment: ""
    }})
    return <form onSubmit={form.onSubmit(values => {
       open()
        axiosInstance.post(`/image/${imgId}/comments`, values).then(res => {
            if (res.status === 204) {
                alert("Commented")
                form.reset();
                close();
            } else {
                alert("Что-то пошло не так")
            }
        }).catch(() => close())
    
    })}>

    <TextInput styles={{input: {border: "1px grey solid"}}} label={"Ваш комментарий"} {...form.getInputProps("comment")} key={form.key("comment")}></TextInput>
    <Button loading={sending} type="submit">Send</Button>
    </form>
}