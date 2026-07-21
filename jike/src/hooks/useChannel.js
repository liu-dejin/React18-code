import { getChannelsApi } from "@/apis/article"
import { useEffect, useState } from "react"

export const useChannel = () => {
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    const getChannelsList = async () => {
      const res = await getChannelsApi()
      setChannelList(res.data.channels)
    }
    getChannelsList()
  }, [])
  return {
    channelList
  }
}

