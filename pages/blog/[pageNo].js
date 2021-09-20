import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNo = router.query.pageNo;
  return (
    <>
      <h1>{pageNo}</h1>
    </>
  );
};

export default pageNo;
