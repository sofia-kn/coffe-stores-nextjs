import React from "react";
import Link from "next/link";
import Image from "next/image";
function Card(props) {
  return (
    <Link href={props.href} className='m-auto rounded-xl shadow-xl'>
      <div className="rounded-xl pt-1 pb-1 pl-4 pr-4 glass">
        <div className="mt-3 mb-3">
          <h2
            className="
          text-xl
           font-extrabold 
           whitespace-nowrap
            w-64 overflow-hidden 
            text-ellipsis            
             "
          >
            {props.name}
          </h2>
        </div>
        <div className=" text-white-main">
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
