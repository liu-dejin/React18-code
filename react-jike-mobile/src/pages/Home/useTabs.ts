import type { ChannelItem } from "@/apis/common";
import { getChannelsApi } from "@/apis/list";
import { useEffect, useState } from "react";

export const useTabs = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await getChannelsApi();
        setChannels(res.data.data.channels);
      } catch (error) {
        console.log(error);
      }
    };
    getChannels();
  }, []);
  return { channels };
};
