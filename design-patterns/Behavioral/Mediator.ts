interface IChatRoomMediator {
  showMessage(user: User, message: string): void;
}

export class ChatRoom implements IChatRoomMediator {
  showMessage(user: User, message: string) {
    const sender = user.getName();

    console.log(`${this.getTime()} [ ${sender} ] ${message}`);
  }
  getTime = () => {
    const time = new Date();
    const formattedTime = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
    return formattedTime;
  };
}

export class User {
  protected name;
  protected chatRoomMediator;
  constructor(name: string, chatRoomMediator: IChatRoomMediator) {
    this.name = name;
    this.chatRoomMediator = chatRoomMediator;
  }
  getName = () => this.name;
  send = (message: string) => this.chatRoomMediator.showMessage(this, message);
}
