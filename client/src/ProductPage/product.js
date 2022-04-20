import axioisClient from "../axios";
import { useEffect } from "react";

import { useParams, Link } from "react-router-dom";

export default function Children() {
  const { slug } = useParams();

  useEffect(() => {
    axioisClient.get(`/san-pham/${slug}`).then((res) => {
      console.log(res);
    });
  }, [slug]);
  return (
    <>
      <h1>{`Product : ${slug}`}</h1>
    </>
  );
}
