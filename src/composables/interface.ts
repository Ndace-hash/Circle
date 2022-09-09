export interface Message {
  id?: string | number;
  sender_id?: string | number;
  receiver_id?: string | number;
  time: string;
  content: string;
}
