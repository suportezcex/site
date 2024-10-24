import CustomInfoParagraph from "@/components/CustomInfoParagraph";
import { CONTENT_INFO_BLOCK_1 } from "@constants";
import "./styles.css";
import { CONTENT_INFO_CARD_1 } from "@/constants";
import { v4 } from "uuid";

const Members = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_1;
  const items = CONTENT_INFO_CARD_1;
  const team = items.members;
  const idGenerator = v4;

  return (
    <div >
      <CustomInfoParagraph img={img} title={title} content={content} />
    </div>
  );
};
export default Members;
