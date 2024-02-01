import { environment } from "~/environments/environments";
import { VALUES } from "~/shared/constants/values";

export const API_ROUTES ={
    GET_VIDEOS:  `${environment.url}/search?part=snippet&type=video&key=${environment.key}&maxResults=${VALUES.MAX_VIDEOS}`,
    GET_VIDEO: `${environment.url}/videos?key=${environment.key}&part=snippet&id=`
}