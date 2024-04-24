
import "./CSS.css";
function StyleLi({Title,Describe}){
  return <>
  <div className="container-sm">
      <li className="list-none w-[98%]"><span className="fw-bold">{Title}</span>
           {Describe}
      </li>
  </div>
  </>
}
function WhatsGrabFood({title,describe,describe2,title_more,describe_more,title_more1,describe_more1,title_more2,describe_more2}) {
  return (
    <>
      <div className="container-sm">
        <div className="">
        <div className="ml-8 w-[97.5%]">
        <h3 className="text-justify font-bold mb-4">{title}</h3>
        <p className="text-justify w-[98%]">{describe}</p>
        <p className="what-des2">{describe2}</p>
        <StyleLi  Title={title_more} Describe={describe_more} />
        <StyleLi  Title={title_more1} Describe={describe_more1} />
        <StyleLi  Title={title_more2} Describe={describe_more2} />
        <div class="border-bottom h-3 mb-5 w-[98%] "></div>
        </div>
        </div>
      </div>
    </>
  );
}
export default WhatsGrabFood;
