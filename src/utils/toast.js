import { Slide, toast } from "react-toastify";


export const errorToast = (message) => {
    toast.error(message, {
        position: "bottom-right",
        theme: "colored",
        transition: Slide,
    });
}