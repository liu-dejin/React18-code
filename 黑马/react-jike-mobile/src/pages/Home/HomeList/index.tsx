import { Image, InfiniteScroll, List } from "antd-mobile";

import type { ListRes } from "@/apis/common";
import { useEffect, useState } from "react";
import { getListApi } from "@/apis/list";
import { useNavigate } from "react-router-dom";

interface HomeListProps {
  channelId: string;
}

const HomeList = ({ channelId }: HomeListProps) => {
  const [list, setList] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });
  useEffect(() => {
    const getList = async () => {
      const res = await getListApi({
        channel_id: channelId,
        timestamp: "" + new Date().getTime(),
      });
      setList({
        results: res.data.data.results,
        pre_timestamp: res.data.data.pre_timestamp,
      });
    };
    getList();
  }, [channelId]);
  // 开关，是否还有新数据
  const [hasMore, setHasMore] = useState(true);
  // 加载数据 1.hasMore=true 2.小于threshald
  const loadMore = async () => {
    console.log("上拉加载刷新了");
    const res = await getListApi({
      channel_id: channelId,
      timestamp: list.pre_timestamp,
    });
    // 拼接新老数据 设置下一次请求时间戳
    setList(() => ({
      results: [...list.results, ...res.data.data.results],
      pre_timestamp: res.data.data.pre_timestamp,
    }));
    if (res.data.data.results.length === 0) {
      setHasMore(false);
    }
    // setHasMore(false);
  };
  const navigate = useNavigate();
  const goDetail = (id: string) => {
    navigate(`/detail?id=${id}`);
  };
  return (
    <>
      <List>
        {list.results.map((item) => (
          <List.Item
            onClick={() => goDetail(item.art_id)}
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
    </>
  );
};

export default HomeList;
