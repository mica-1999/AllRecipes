import { toast, ToastOptions } from "react-toastify";

export function showToast(type: "success" | "error" | "info", message: string, theme: string) {
    const options: ToastOptions = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme.toLowerCase() === "dark" ? "dark" : "light"
    };

    if(type === "success") {
        toast.success(message, options);
    }
    else if(type === "error") {
        toast.error(message, options);
    }
    else if(type === "info"){
        toast.info(message, options);
    }
}