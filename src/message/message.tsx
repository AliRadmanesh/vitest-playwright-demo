import { getWelcomeMessage } from "./messageService";

export const Message = () => {
  return <div>{getWelcomeMessage()}</div>;
};
