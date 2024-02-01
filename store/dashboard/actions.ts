import axios from "../../shared/axios-utils"
import { AxiosResponse } from 'axios';
import { API_ROUTES } from "~/shared/constants/api_routes";
import { CustomError } from "../interfaces/error.interface";

export const getVideos = async ({ commit }: any) => {
  try {
    const data: AxiosResponse<any> = await axios.get(API_ROUTES.GET_VIDEOS)
    commit('setVideos', data.data.items)
  } catch (error) {
    const customError = error as CustomError;
    console.log('Error al realizar la solicitud:', customError.message);
  }
}