import ReactMarkdown from "react-markdown";
import fileDownload from "../../lib/fileDownload";
import "moment/locale/ko";
import moment from "moment";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const NoticeViewComp = (noticeData) => {
  const noticeAttr = noticeData.data.attributes;
  const date = moment(noticeAttr.createdAt).format("YYYY-MM-DD");
  const files = noticeAttr.file.data;
  return (
    <>
      <strong>{noticeAttr.title}</strong> {/* 게시물 제목 */}
      {noticeAttr.writer && <p>{noticeAttr.writer}</p>} {/* 게시물 작성자 */}
      {/* 게시물 내용 */}
      {noticeAttr.content && (
        <div>
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  style={{ maxWidth: "100%" }}
                  {...props}
                  src={node.properties.src}
                />
              ),
              u: ({ node, ...props }) => (
                <span style={{ textDecoration: "underline" }} {...props} />
              ),
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {noticeAttr.content}
          </ReactMarkdown>
        </div>
      )}
      {/* 게시물 생성날짜 */}
      <p>{date}</p>
      {/* 게시물 첨부파일 */}
      <ul>
        {files &&
          files.map((fileList) => (
            <li key={fileList.id}>
              <button
                onClick={() =>
                  fileDownload(
                    fileList.attributes.url,
                    fileList.attributes.caption
                  )
                }
              >
                {fileList.attributes.name}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NoticeViewComp;
