// 定义泛型
export type ResType<T> = {
  data: T;
  msg: string;
};

// 频道接口类型
export type ChannelItem = {
  id: number;
  name: string;
};

export type ChannelRes = {
  channels: ChannelItem[];
};

export type Cover = {
  /**
   * 文章封面图片地址数组
   */
  images?: string[];
  /**
   * 文章封面类型，0是无封面, 1是1张封面, 3是3张封面
   */
  type: number;
};

export type ListItem = {
  /**
   * 文章id
   */
  art_id: string;
  /**
   * 文章作者id
   */
  aut_id: string;
  /**
   * 文章作者名字
   */
  aut_name: string;
  /**
   * 文章评论数量
   */
  comm_count: number;
  /**
   * 文章封面
   */
  cover: Cover;
  /**
   * 文章是否置顶，0未置顶1置顶
   */
  is_top: number;
  /**
   * 文章发布时间
   */
  pubdate: string;
  /**
   * 文章标题
   */
  title: string;
};

export type ListRes = {
  pre_timestamp: string;
  results: ListItem[];
};

export type ReqParams = {
  channel_id: string;
  timestamp: string;
};

export type DetailRes = {
  /**
   * 文章id
   */
  art_id: string;
  /**
   * 文章-是否被点赞，-1无态度, 0未点赞, 1点赞, 是当前登录用户对此文章的态度
   */
  attitude: number;
  /**
   * 文章作者id
   */
  aut_id: string;
  /**
   * 文章作者名
   */
  aut_name: string;
  /**
   * 文章作者头像，无头像, 默认为null
   */
  aut_photo: string;
  /**
   * 文章_评论总数
   */
  comm_count: number;
  /**
   * 文章内容
   */
  content: string;
  /**
   * 文章-是否被收藏，true(已收藏)false(未收藏)是登录的用户对此文章的收藏状态
   */
  is_collected: boolean;
  /**
   * 文章作者-是否被关注，true(关注)false(未关注), 说的是当前登录用户对这个文章作者的关注状态
   */
  is_followed: boolean;
  /**
   * 文章_点赞总数
   */
  like_count: number;
  /**
   * 文章发布时间
   */
  pubdate: string;
  /**
   * 文章_阅读总数
   */
  read_count: number;
  /**
   * 文章标题
   */
  title: string;
};
