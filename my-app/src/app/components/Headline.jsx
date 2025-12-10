import FooterBg from "@/assets/bg/footerbg.jpg";

const Headline = ({ title }) => {
    return (  
      <div className=" relative flex flex-col justify-center items-center  ">
      <div
          className="absolute inset-0 bg-cover bg-center filter brightness-15 min-h-[30%]"
          style={{ backgroundImage: `url(${FooterBg.src})` }}
        ></div>

              <div className="relative z-10">
          <h1 className="sm:m-2 lg:m-10">
          {title}
        </h1>
          </div>
          
          
        </div>
    );
}
 
export default Headline;
    