import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import coffeeStoresData from "../../data/coffee-stores.json";

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
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loadding ...</div>;
  }

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

 const handleUpvoteButton =()=>{
  console.log('handle up vote');
 }

  return (
    <div className="layout">
      <Head>
        <title>{name}</title>
      </Head>
      <div className="container">
        <div className="col1">
          <div className="backtohomeLink">
            <Link href="/">Back to home</Link>
          </div>
          <div className="nameWrapper">
          <h1 className="name ">{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className="storeImg"
            alt={name}
          ></Image>
        </div>
        <div className="col2 glass">
          <div className="iconWrapper">
            <Image src='/static/icons/places.svg' width='24' height='24'/>
          <p className="text">{address}</p>
          </div>
          <div className="iconWrapper">
            <Image src='/static/icons/nearMe.svg' width='24' height='24'/>
          <p className="text">{neighbourhood}</p>
          </div>
          <div className="iconWrapper">
            <Image src='/static/icons/star.svg' width='24' height='24'/>
          <p className="text">1</p>
          </div>

          <button className="upvoteBtn" onClick={handleUpvoteButton}> Up vote</button>
        </div>
      </div>
    </div>
  );
}

export default coffeeStore;
