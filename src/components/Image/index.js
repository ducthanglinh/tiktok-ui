import { forwardRef, useState } from "react";
import images from "~/assets/images";
console.log(images.noImage);
const Image = forwardRef(
  ({ failback: customFailback = images.noImage, src, alt, ...props }, ref) => {
    const [failback, setFailback] = useState("");
    const handleError = () => {
      setFailback(customFailback);
    };
    return (
      <img
        ref={ref}
        src={failback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
