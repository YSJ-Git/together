import Link from "next/link";

const NoticeList = ({ data }) => {
  return (
    <>
      <ul>
        {data.data.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          data.data.map((dataList) => (
            <li key={dataList.id}>
              <Link href={`/notice/view/${dataList.id}`}>
                <a>{dataList.attributes.title}</a>
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default NoticeList;
