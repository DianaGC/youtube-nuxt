import axios from "../../shared/axios-utils"
import { AxiosResponse } from 'axios';
import { API_ROUTES } from "~/shared/constants/api_routes";
import { CustomError } from "../interfaces/error.interface";

export const getVideo = async ({ commit }: any, video: string) => {
    try {
        const data: AxiosResponse<any> = await axios.get(API_ROUTES.GET_VIDEO + video)
        commit('setVideoInformation', data.data.items[0])
    } catch (error) {
        const customError = error as CustomError;
        console.error('Error al realizar la solicitud:', customError.message);
    }

}