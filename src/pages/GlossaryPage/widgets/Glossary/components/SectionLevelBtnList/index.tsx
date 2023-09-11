import SectionLevelBtn from "../../../../../../shared/components/SectionLevelBtn";

const SectionLevelBtnList = ({btnsData, currentSection, sectionDispatch}) => {
  return (
    <>
        {btnsData.map((btnData, index) => (
            <SectionLevelBtn
            key={index}
            setBookSection={sectionDispatch}
            section={btnData.section}
            isCurrentSection={btnData.section === currentSection}
            title={btnData.title}
            amount={btnData.amount}
            level={btnData.level}
            ></SectionLevelBtn>
        ))}
    </>
    )
}

export default SectionLevelBtnList;