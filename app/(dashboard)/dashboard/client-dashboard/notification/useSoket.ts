import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from "react";

const useSocket = () => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketConnection = io(`${process.env.NEXT_PUBLIC_URL}/notification`);
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
