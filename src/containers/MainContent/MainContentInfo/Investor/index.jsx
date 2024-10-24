import { CONTENT_INFO_BLOCK_2, CONTENT_INFO_CARD_2 } from "@constants";
import "./styles.css";
// import CustomButton from "@/components/CustomButton";
import CustomInfoParagraph from "@/components/CustomInfoParagraph";

const Investor = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_2;
  
  return (
    <div >
      <CustomInfoParagraph img={img} title={title} content={content} />
    </div>
  );
};
export default Investor;
