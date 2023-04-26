import { Link } from "react-router-dom";
import { memo } from "react";
import { speedBikeIcon, starIcon } from "../../styles/icons/icons";
import styles from "./VendorCard.module.scss";

const VendorCard = memo(({ data, index, style }) => {
  const { items } = data;
  const item = items[index];

  return (
    <div key={index} style={style}>
      <div className={`${styles["vendor"]}`}>
        <Link to='/linktorestaurant' className={`${styles["vendor__link"]}`}>
          <div className={`${styles["vendor__card"]}`}>
            <div className={`${styles["vendor__card--header"]}`}>
              <img
                src={item?.data?.backgroundImage}
                className={`${styles["vendor__card--header--image"]}`}
                alt={item?.data?.title}
              />
            </div>
            <div className={`${styles["vendor__card--content"]}`}>
              <div className={`${styles["vendor__card--content__head"]}`}>
                <h3 className={`${styles["vendor__card--content__head--title"]} font-14 color-text font-bold`}>
                  {item?.data?.title}
                </h3>
                <span className={`font-12 color-text-light`}>
                  ({item?.data?.commentCount?.toString()?.toPersianDigits()})
                </span>
                &nbsp;
                <div className={`${styles["vendor__card--content__head--star"]} font-12`}>
                  <span className='font-12 color-text'>{item?.data?.rate?.toString()?.toPersianDigits()}</span>
                  &nbsp;
                  {starIcon}
                </div>
              </div>
              <div className={`${styles["vendor__card--content__desc"]} font-12 color-text`}>
                {item?.data?.description?.toString()?.toPersianDigits()?.replaceAll(",", " ")}
              </div>
              <div className={`${styles["vendor__card--content__foot"]}`}>
                <div className={`${styles["vendor__card--content__foot--price"]} font-12`}>
                  <span>۲۲۹۲۹ </span>
                  &nbsp;
                  <span>ارسال اکسپرس</span>
                </div>
                <div>
                  تا سلام دقیقه<span>{speedBikeIcon}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

export default VendorCard;
