
interface SectionDivProp {
  sectionName:string
}

const SectionDivider = ({sectionName}:SectionDivProp) => {

  return (
    <div className="w-[100%] h-[250px] relative">
      <div className="w-[2px] h-[100px] bg-gray-50/60 absolute top-0 left-[50%] translate-x-[-50%]"></div>
      <h2 className="text-white text-3xl text-center pt-[100px] pb-2">{sectionName}</h2>
      <div className="w-[2px] h-[50px] bg-gray-50/60 absolute left-[50%] translate-x-[-50%]"></div>
    </div>
  );
};

export default SectionDivider;
