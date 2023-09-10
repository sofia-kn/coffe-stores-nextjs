import { useRouter } from "next/router";
import Link from "next/link";
function coffeeStore() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      coffee-store {router.query.id}
      <Link href="/">Back to home</Link>
    </div>
  );
}

export default coffeeStore;
