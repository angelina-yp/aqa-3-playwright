import { RequestApi } from "api/apiClients/request";
import { apiConfig } from "config/api-config";
import { ILoginResponse, IRequestOptions } from "types/api.types";
import { ISignIn } from "types/signIn.type";


export class SignInController {
  constructor(private request = new RequestApi()) {}

  async signIn(body: ISignIn) {
    const options: IRequestOptions = {
      url: apiConfig.BASE_URL + apiConfig.ENDPOINTS.LOGIN,
      method: "post",
      data: body,
      headers: {
        "content-type": "application/json",
       
      },
    };
    return await this.request.send<ILoginResponse>(options);
  }
}