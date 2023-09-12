import React from "react";
import Link from "next/link";
import Image from "next/image";
function Card(props) {
  return (
    <Link href={props.href}>
      <div className=" bg-purple-main pt-1 pb-1 pl-4 pr-4 inline-block ">
        <div className="headerW mt-3 mb-3">
          <h2
            className="
          text-xl
           font-extrabold 
           whitespace-nowrap
            w-64 overflow-hidden 
            text-ellipsis
             bg-white-main
            
             "
          >
            {props.name}
          </h2>
        </div>
        <div className="imageW text-white-main">
          <Image
            className="rounded-xl"
            src={props.imgUrl}
            width={260}
            height={160}
          />
        </div>
      </div>
    </Link>
  );
}

export default Card;
