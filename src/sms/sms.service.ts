import { Injectable } from "@nestjs/common";
import axios from "axios";
import FormData from "form-data";

@Injectable()
export class SmsService {
  async sendOtp(phone_number:string) {
    let data = new FormData();
    data.append("mobile_phone", phone_number);
    data.append("message", "Bu Eskiz dan test");
    data.append("from", "4546");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://notify.eskiz.uz/api/message/sms/send",
      headers: {
        authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzAxOTA4MjIsImlhdCI6MTc2NzU5ODgyMiwicm9sZSI6InRlc3QiLCJzaWduIjoiNjZlODIyN2UxODBlNGEwMTY3NGEzZjQ4OWU0ZjAwYzA1OWU4YjY1ZjFhN2Q0MWRiMDc0ZGMxYmNlOGU0MTU2YSIsInN1YiI6IjEzOTE0In0.W4rQUH8MSctL5RwfxLEViD_sohrGq7eZFQz6CXDkO74"
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
