import { BASE_URL } from "@/constants/api-constants";
import axios from "axios";

export enum TEvent {
  VIEWED = "product.viewed",
  SHARED = "product.shared",
}

async function notify(eventType: TEvent, body) {
  return await axios.post(
    `${BASE_URL}/api/v1/trigger?event=${eventType}`,
    body
  );
}

export default notify;
