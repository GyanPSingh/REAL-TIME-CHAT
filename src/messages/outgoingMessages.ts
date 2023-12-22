export enum SupportedMessage {
  AddChat = "ADD_CHAT",
  UpdateChat = "UpdateChat",
}

export type MessagePayload = {
  roomId: string;
  message: string;
  name: string;
  upvotes: number;
  chatId:string;
};

export type OutgoingMessage =
  | {
      type: SupportedMessage.AddChat;
      payload: MessagePayload;
    }
  | {
      type: SupportedMessage.UpdateChat;
      payload: Partial<MessagePayload>;
    };
