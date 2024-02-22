// const ChatsPage = () =>{
//     return <>chats...</>
// }
// export default ChatsPage

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='7d37d8bc-d0ba-457d-85d4-0f532c0bf74e'
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;