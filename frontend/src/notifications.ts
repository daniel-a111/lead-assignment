import { toast } from "vue3-toastify";

export const success = (message: string) => {
    toast(message, {
      type: 'success',
      autoClose: 1000,
    });
}

export const error = (message: string) => {
    toast(message, {
      type: 'error',
      autoClose: 1000,
    });
}
