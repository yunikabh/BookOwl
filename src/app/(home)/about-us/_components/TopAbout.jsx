import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

export default function TopAbout() {
  return (
    <div className="mx-[5%]">
      <h1 className="text-3xl text-amber-900 mt-[100px] font-bold mb-5">
        About us
      </h1>
      <div className="rounded-2xl grid grid-cols-2 gap-5 " >
        <div data-aos="fade-right">
        <p className="mt-5 mb-10" >
          Welcome to BookOwl, your ultimate destination for discovering and
          exploring the books that matter most to you. We believe that books
          have the power to inspire, educate, and entertain. That’s why we’ve
          created a platform that connects readers to their next favorite story
          while giving authors and publishers a place to showcase their
          creations. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis autem in debitis recusandae cumque porro nobis quae officiis!
          Temporibus quo eius ducimus quae. Ducimus, quidem quod sed cupiditate
          consequatur odio.
        </p>
        <Button>More <ChevronsRight /></Button>
        </div>
        <img src="/photos/us.jpg" className="rounded-xl" data-aos = "fade-left"></img>
      </div>
    </div>
  );
}
