import Link from "next/link";
import Image from "next/image";
import ProductDiscountLabel from "./ProductDiscountLabel";
import ActionButtons from "./ActionButtons";

const ProductThumbnail = (props) => {
	
  return (
      <div className="thumbnail">
        <Link href={`/products/${props.productThumb.id}`}>
          <Image
            src={
              props.attributeImg ? props.attributeImg : props.productThumb.thumbnail
            }
            width={props.width ?? 300}
            height={props.height ?? 300}
            alt={props.productThumb.title}
          />
          {props.productThumb.hoverThumbnail && props.isHoverThumbnail ? (
            <Image
              src={props.productThumb.hoverThumbnail}
              width={props.width ?? 300}
              height={props.height ?? 300}
              alt={props.productThumb.title}
              className="hover-img"
            />
          ) : (
            ""
          )}
        </Link>
        {props.productThumb.salePrice && props.discountLabel && (
          <ProductDiscountLabel discount={props.productThumb} />
        )}
		{props.hoverItems &&
		<div className="product-hover-action">
			<ActionButtons 
			productAction={props.productThumb}
			wishlistBtn={props.wishlistBtn}
			cartBtn = {props.cartBtn}
			quickViewBtn={props.quickViewBtn}
			/>
		</div>
		}
      </div>
  );
};

export default ProductThumbnail;
