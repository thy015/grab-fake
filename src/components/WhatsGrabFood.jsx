
import "./CSS.css";
function StyleLi({Title,Describe}){
  return <>
  <div className="container-sm">
      <div className="container-title">
      <li className="li-more"><span className="fw-bold">{Title}</span>
           {Describe}
      </li>
  </div>
  </div>
  </>
}
function WhatsGrabFood({title,describe,describe2,title_more,describe_more,title_more1,describe_more1,title_more2,describe_more2}) {
  return (
    <>
      <div className="container-sm">
        <div className="container-words">
        <div className="container-title">
        <h3 className="what-title">{title}</h3>
        <p className="what-des">{describe}</p>
        <p className="what-des2">{describe2}</p>
        <StyleLi  Title={title_more} Describe={describe_more} />
        <StyleLi  Title={title_more1} Describe={describe_more1} />
        <StyleLi  Title={title_more2} Describe={describe_more2} />
        <div class="border-bottom border-what"></div>
        </div>
        </div>
      </div>
    </>
  );
}
export default WhatsGrabFood;
