import { FunctionComponent, useEffect, useState } from "react";

interface ImagesProps {}

const Images: FunctionComponent<ImagesProps> = () => {
  const [photos, setPhotos] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photos) => {
        setPhotos(photos);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="spinner-border text-warning" role="status"></div>
      )}
      {photos.map((p: any) => (
        <img src={p.thumbnailUrl} />
      ))}
    </>
  );
};

export default Images;
