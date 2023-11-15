import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://realist-bucket-123.s3.amazonaws.com/YxfcWchIbMHuB7AUIEAAC.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "https://realist-bucket-123.s3.amazonaws.com/9nO1wF5L9ZPwkOHpGXO9n.jpeg",
    width: 1,
    height: 1,
  },
];

export default function AdView() {
  // state
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
  // hooks
  const params = useParams();

  useEffect(() => {
    if (params?.slug) fetchAd();
  }, [params?.slug]);

  const fetchAd = async () => {
    try {
      const { data } = await axios.get(`/ad/${params.slug}`);
      setAd(data?.ad);
      setRelated(data?.related);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Gallery photos={photos} />;
      <pre>{JSON.stringify({ ad, related }, null, 4)}</pre>
    </>
  );
}
