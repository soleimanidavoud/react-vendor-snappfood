import { Link } from "react-router-dom";
import { memo } from "react";
import { speedBikeIcon, starIcon } from "../../styles/icons/icons";
import styles from "./VendorCard.module.scss";
import { toPersianDigits } from "../../utils/convertDigits";

const VendorCard = memo(({ data, index, style }) => {
  const { items } = data;
  const item = items[index];

  return (
    <div key={index} style={style}>
      <div className={styles["vendor"]}>
        <Link to='/linktorestaurant' className={styles["vendor__link"]}>
          <div className={styles["vendor__card"]}>
            <div className={styles["vendor__card--header"]}>
              <img
                src={item?.data?.backgroundImage}
                className={styles["vendor__card--header--image"]}
                alt={item?.data?.title}
              />
              <div className={styles["vendor__card--header--logo"]}>
                <img
                  src={item?.data?.defLogo}
                  className={styles["vendor__card--header--logo--image"]}
                  alt={item?.data?.title}
                />
              </div>
            </div>
            <div className={styles["vendor__card--content"]}>
              <div className={styles["vendor__card--content__head"]}>
                <h3 className={`${styles["vendor__card--content__head--title"]} font-14 color-text font-bold`}>
                  {item?.data?.title}
                </h3>
                <span className={`font-12 color-text-light`}>
                  ({toPersianDigits(item?.data?.commentCount?.toString())})
                </span>
                &nbsp;
                <div className={`${styles["vendor__card--content__head--star"]} font-12`}>
                  <span className='font-12 color-text'>{toPersianDigits(item?.data?.rate?.toString())}</span>
                  &nbsp;
                  {starIcon}
                </div>
              </div>
              <div className={`${styles["vendor__card--content__desc"]} font-12 color-text`}>
                {toPersianDigits(item?.data?.description?.toString()?.replaceAll(",", " "))}
              </div>
              <div className={styles["vendor__card--content__foot"]}>
                <div className={`${styles["vendor__card--content__foot--price"]} font-12`}>
                  <span className={`font-12 color-text-light`}>ارسال اکسپرس</span>
                  &nbsp;
                  <span className={`font-12 color-text`}>
                    {item?.data?.deliveryFee !== 0
                      ? toPersianDigits(item?.data?.deliveryFee?.toLocaleString())
                      : "رایگان"}{" "}
                    تومان
                  </span>
                </div>
                {item?.data?.max_eta !== -1 && (
                  <div className={`${styles["vendor__card--content__foot--delivery"]} font-12`}>
                    <span>تا {item?.data?.max_eta} دقیقه</span>
                    &nbsp;
                    {speedBikeIcon}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

export default VendorCard;
