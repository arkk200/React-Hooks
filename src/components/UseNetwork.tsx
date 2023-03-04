import { useNetwork } from "../hooks/useNetwork.hook";

function UseNetwork() {
  const handleNetworkChange = (online: boolean) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return <div>{onLine ? "Online" : "Offline"}</div>;
}

export default UseNetwork;
