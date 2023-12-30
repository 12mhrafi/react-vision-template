import React from "react";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";

const Products = () => {
  return (
    <Container>
      <div className="mt-64 md:mt-0">
        <div className="md:w-[586px] h-auto m-auto text-center">
          <Title>
            <h2 >Products breakdown</h2>
          </Title>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Aliquam velit nisl lectus
            arcu. At odio convallis lobortis at duis ullamcorper vitae risus mi.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <div className=" border rounded-3xl pt-[32px] pr-[24px] pb-[38px] pl-[24px]">
                <div className="flex flex-col items-center gap-[16px] text-center self-stretch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="40" fill="#FDC053" />
                  <rect
                    x="27"
                    y="26"
                    width="10"
                    height="13"
                    rx="1"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="53"
                    y="54"
                    width="10"
                    height="13"
                    rx="1"
                    transform="rotate(180 53 54)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="43"
                    y="26"
                    width="10"
                    height="9"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="37"
                    y="54"
                    width="10"
                    height="9"
                    rx="1"
                    transform="rotate(180 37 54)"
                    fill="white"
                  />
                </svg>
                <h2 className="text-[24px] font-[800] text-[#FFF]">Live aboard Promethei Terra</h2>
                <p>All hands on deck! Prepare to live inside Promethei Terra! Made on the Saturn Docks, it is a unified achievement by the Solar Planetary Alliance Forces (SPAF) in an effort to establish order in the Solar System.</p>
                </div>
                <div className="py-5 flex items-center justify-center">
                <button className="btn-gradient">Build in Progress</button>
                </div>
              </div>
            </div>
            <div>
              <div className=" rounded-3xl  border pt-[32px] pr-[24px] pb-[38px] pl-[24px]">
                <div className="flex flex-col items-center gap-[16px] text-center self-stretch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="40" fill="#FDC053" />
                  <rect
                    x="27"
                    y="26"
                    width="10"
                    height="13"
                    rx="1"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="53"
                    y="54"
                    width="10"
                    height="13"
                    rx="1"
                    transform="rotate(180 53 54)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="43"
                    y="26"
                    width="10"
                    height="9"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="37"
                    y="54"
                    width="10"
                    height="9"
                    rx="1"
                    transform="rotate(180 37 54)"
                    fill="white"
                  />
                </svg>
                <h2 className="text-[24px] font-[800] text-[#FFF]">Live aboard Promethei Terra</h2>
                <p>All hands on deck! Prepare to live inside Promethei Terra! Made on the Saturn Docks, it is a unified achievement by the Solar Planetary Alliance Forces (SPAF) in an effort to establish order in the Solar System.</p>
                </div>
                <div className="py-5 flex items-center justify-center">
                <button className="btn-gradient">Build in Progress</button>
                </div>
              </div>
            </div>
            <div>
              <div className=" border rounded-3xl  pt-[32px] pr-[24px] pb-[38px] pl-[24px]">
                <div className="flex flex-col items-center gap-[16px] text-center self-stretch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="40" fill="#FDC053" />
                  <rect
                    x="27"
                    y="26"
                    width="10"
                    height="13"
                    rx="1"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="53"
                    y="54"
                    width="10"
                    height="13"
                    rx="1"
                    transform="rotate(180 53 54)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <rect
                    x="43"
                    y="26"
                    width="10"
                    height="9"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="37"
                    y="54"
                    width="10"
                    height="9"
                    rx="1"
                    transform="rotate(180 37 54)"
                    fill="white"
                  />
                </svg>
                <h2 className="text-[24px] font-[800] text-[#FFF]">Live aboard Promethei Terra</h2>
                <p>All hands on deck! Prepare to live inside Promethei Terra! Made on the Saturn Docks, it is a unified achievement by the Solar Planetary Alliance Forces (SPAF) in an effort to establish order in the Solar System.</p>
                </div>
                <div className="py-5 flex items-center justify-center">
                <button className="btn-gradient">Build in Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
