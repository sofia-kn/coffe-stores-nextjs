import { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head'
import coffeeStoresData from '../../data/coffee-stores.json'; 

export function getStaticProps(staticProps){
  console.log(staticProps);
  const params = staticProps.params
  return{
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === params.id//dynamic id
      })
    }
  }
}

export function getStaticPaths(){
  const paths = coffeeStoresData.map((coffeeStore) => {
    return{
      params:{
        id: coffeeStore.id.toString()
      }
    }
  })
  return{
   paths,
    fallback:true,
  }
}

function coffeeStore(props) {
  const router = useRouter();
  console.log(router);

  if(router.isFallback){
    return <div>Loadding ...</div>
  }
  const { address, name, neighbourhood} = props.coffeeStore 
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">Back to home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
}

export default coffeeStore;
