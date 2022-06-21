const NoticeList = ({ data }) => {
  return (
    <>
      <ul>
        {data.data.length === 0 ? (
          <div>데이터가 없습니다.</div>
        ) : (
          data.data.map((dataList) => (
            <li key={dataList.id}>{dataList.attributes.title}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default NoticeList;
