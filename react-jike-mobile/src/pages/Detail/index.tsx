import type { DetailRes } from "@/apis/common";
import { getDetailApi } from "@/apis/list";
import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Detail() {
  const [detail, setDetail] = useState<DetailRes | null>(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    const getDetail = async () => {
      const res = await getDetailApi(id as string);
      setDetail(res.data.data);
    };
    getDetail();
  }, [id]);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  // 类型守卫+loading效果
  if (!detail) {
    return <div>加载中...</div>;
  }
  // 正式返回的数据
  return (
    <>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div
        dangerouslySetInnerHTML={{
          __html: detail?.content,
        }}
      ></div>
    </>
  );
}

export default Detail;
