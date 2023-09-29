import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeeStoresData from "../../data/coffee-stores.json";
import CoffeeInfo from "../../components/CoffeeInfo";

export function getStaticProps(staticProps) {
  console.log(staticProps);
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

function coffeeStore(props) {
  // const Router = useRouter();

  // if (Router.isFallback) {
  //   return <div>Loadding ...</div>;
  // }

  const {imgUrl, name, address,neighbourhood } = props.coffeeStore || {}


  const handleUpvoteButton = () => {
    console.log("handle up vote");
  };

  return (
    <div className="sm:pl-4 sm:pr-4  lg:pl-10 lg:pr-10 h-full">
      {console.log(imgUrl)}
      <Head>
        <title>{name}</title>
      </Head>
      <div className="grid p-7 sm:w-full  lg:grid-cols-2">
        <div className=" place-self-center">
          <div className=" mt-24 text-lg mb-2 font-bold">
            <Link href="/">Back to home</Link>
          </div>
          <div className=" mb-4 mt-4">
            <h1 className=" text-white-main text-4xl whitespace-normal overflow-hidden text-ellipsis">
              {name}
            </h1>
          </div>
          <div className="pt-4 pb-4">
            <Image
              src={imgUrl}
              width={600}
              height={360}
              className=" shadow-2xl rounded-xl max-w-full h-auto border-none align-middle"
              alt={name}
            ></Image>
          </div>
        </div>
        <div className="col2 glass rounded-2xl p-4 flex flex-col ml-2 self-center mt-16 text-dark-text lg:w-3/4">
          <CoffeeInfo address={address} neighbourhood={neighbourhood}/>
          

          <button className="upvoteBtn w-fit text-white-main  mt-4 mb-4 p-2 bg-purple-dark outline-0 text-base hover:bg-purple-main" onClick={handleUpvoteButton}>
            {" "}
            Up vote
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default coffeeStore;
