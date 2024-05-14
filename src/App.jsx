import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atom";

function App() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [noitiCountChange, setNotiCountChange] =
    useRecoilState(notificationAtom);
  return (
    <>
      <div>
        <button>
          My network ({networkCount >= 100 ? "99+" : networkCount})
        </button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagingCount})</button>
        <button>
          Notification ({notificationCount >= 100 ? "99+" : notificationCount})
        </button>

        <button onClick={() => setNotiCountChange(noitiCountChange + 1)}>
          Me
        </button>
      </div>
    </>
  );
}

export default App;
