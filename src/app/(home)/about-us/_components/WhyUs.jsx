import { Card } from "@/components/ui/card";
import { Clock, Earth, Gem, MoveRight } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="mb-[100px]">
      <MobileWhyUs />
      <div
        className="hidden lg:block w-full aspect-video  overflow-hidden relative "
        data-aos="fade-right"
      >
        {/* <Card className="bg-gradient-to-r from-[#201612] from-10% via-amber-900 via-30% to-[#eef7ff] to-90% absolute xl:-top-[10%] -top-[13%]  lg:left-[-20%] left-0  lg:rounded-full rounded-none lg:w-[60%]  w-full aspect-square  mt-[50px]  flex justify-center items-center flex-row"> */}
        <Card className="bg-[#BA9C84] absolute xl:-top-[10%] -top-[13%]  lg:left-[-20%] left-0  lg:rounded-full rounded-none lg:w-[60%]  w-full aspect-square  mt-[50px]  flex justify-center items-center flex-row">
          <div className="grid lg:grid-cols-2  grid-cols-1  ">
            <div className="xl:w-[700px] lg:w-[500px] w-full xl:pl-80 lg:pl-60 pl-20 ">
              <MoveRight className="size-10 mb-5 text-[#122e4b]" />
              <h1 className="text-[#122e4b] font-bold  text-4xl mb-2">Why</h1>
              <h2 className="text-[#122e4b] text-3xl mb-5 "> Choose Us?</h2>
              <p className="text-slate-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                sapiente ullam rerum obcaecati eaque, adipisci animi, nobis
                delectus quod magni hic at cupiditate molestias quibusdam
                accusamus perspiciatis, optio iusto est.
              </p>
            </div>
            <div className=" grid grid-cols-1 justify-items-end  space-y-20  ">
              <div className=" w-[60px] h-[60px] rounded-full bg-amber-900 -mr-2  flex justify-center items-center  shadow-2xl shadow-black">
                <Gem className="size-9 text-white  " />
                <div className="absolute  -mr-[550px] flex items-center  pl-5">
                  <hr className="w-[100px] border-t-2 border-gray-200" />
                  <div className="flex flex-col pl-5">
                    <h1 className="text-gray-700 font-semibold text-xl  ">
                      Quality
                    </h1>
                    <p className="w-[350px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic alias incidunt vero aliquid modi beatae perspiciatis,
                      sapiente praesentium sequi delectus id deserunt
                     
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-[60px] h-[60px] rounded-full bg-amber-900 -mr-6  flex justify-center items-center  shadow-2xl shadow-black">
                <Clock className="size-9 text-white  " />
                <div className="absolute  -mr-[550px] flex items-center  pl-5">
                  <hr className="w-[100px] border-t-2 border-gray-200" />
                  <div className="flex flex-col pl-5">
                    <h1 className="text-gray-700 font-semibold text-xl  ">
                      Mission
                    </h1>
                    <p className="w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic alias incidunt vero aliquid modi beatae perspiciatis,
                      sapiente praesentium sequi delectus id deserunt
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[60px] h-[60px] rounded-full bg-amber-900 -mr-2  flex justify-center items-center  shadow-2xl shadow-black">
                <Earth className="size-9 text-white  " />
                <div className="absolute  -mr-[550px] flex items-center  pl-5">
                  <hr className="w-[100px] border-t-2 border-gray-200" />
                  <div className="flex flex-col pl-5">
                    <h1 className="text-gray-700 font-semibold text-xl  ">
                      Vision
                    </h1>
                    <p className="w-[350px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic alias incidunt vero aliquid modi beatae perspiciatis,
                      sapiente praesentium sequi delectus id deserunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
function MobileWhyUs() {
  return (
    <div className="lg:hidden">
      <div className="lg:hidden w-full h-[400px] bg-gradient-to-r from-green-400 from-10% via-emerald-300 via-30% to-green-100 to-90% ">
        <div className="w-full h-full flex flex-col justify-center pl-5">
          <MoveRight className="size-10 mb-5" />
          <h1 className="text-slate-900 font-bold  text-4xl mb-2">Why</h1>
          <h2 className="text-gray-700 text-3xl mb-5 "> Choose Us?</h2>
          <p className="">
            National Biomed bla bla bla good bla bla bla bla bla bla bla good
            bla bla bla bla bla bla bla good bla bla bla bla
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 mb-[50px] gap-3">
        <div className="flex flex-col items-center space-y-3 mt-3 ">
          <div className=" w-[60px] h-[60px] rounded-full bg-green-600 flex justify-center items-center  shadow-2xl shadow-black">
            <Gem className="size-9 text-white  " />
          </div>
          <div className="h-[50px] w-[2px] bg-gray-500 "></div>

          <h1 className="text-gray-700 font-semibold text-xl  ">Quality</h1>
          <p className="text-center">
            A conerstone of value. Innovation alone would not deliver real value
            without also delivering quality. These values are interwoven and
            interdependent.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 mt-3 ">
          <div className=" w-[60px] h-[60px] rounded-full bg-green-600 flex justify-center items-center  shadow-2xl shadow-black">
            <Gem className="size-9 text-white  " />
          </div>
          <div className="h-[50px] w-[2px] bg-gray-500 "></div>

          <h1 className="text-gray-700 font-semibold text-xl  ">Quality</h1>
          <p className="text-center">
            A conerstone of value. Innovation alone would not deliver real value
            without also delivering quality. These values are interwoven and
            interdependent.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3 mt-3 ">
          <div className=" w-[60px] h-[60px] rounded-full bg-green-600 flex justify-center items-center  shadow-2xl shadow-black">
            <Gem className="size-9 text-white  " />
          </div>
          <div className="h-[50px] w-[2px] bg-gray-500 "></div>

          <h1 className="text-gray-700 font-semibold text-xl  ">Quality</h1>
          <p className="text-center">
            A conerstone of value. Innovation alone would not deliver real value
            without also delivering quality. These values are interwoven and
            interdependent.
          </p>
        </div>
      </div>
    </div>
  );
}
