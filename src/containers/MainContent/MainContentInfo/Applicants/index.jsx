import { CONTENT_INFO_BLOCK_3 } from "@constants";
import ApplicantsCards from "@containers/MainContent/MainContentInfo/Applicants/ApplicantsCards";
import CustomInfoParagraph from "@/components/CustomInfoParagraph";

const Applicants = () => {
  const { img, title, content } = CONTENT_INFO_BLOCK_3;

  return (
    <div >
      <CustomInfoParagraph img={img} title={title} content={content} />
      {/* <ApplicantsCards /> */}
    </div>
  );
};
export default Applicants;
