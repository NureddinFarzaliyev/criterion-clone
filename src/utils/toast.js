import { Slide, toast } from "react-toastify";


export const errorToast = (message) => {
    toast.error(message, {
        position: "bottom-right",
        theme: "dark",
        transition: Slide,
    });
}

export const successToast = (message) => {
    toast.success(message, {
        position: "bottom-right",
        theme: "dark",
        transition: Slide,
        className: "text-xl font-bold"
    });
}

export const infoToast = (message) => {
    toast.info(message, {
        position: "bottom-right",
        theme: "dark",
        transition: Slide,
    });
}