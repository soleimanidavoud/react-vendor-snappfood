import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../data/sagas/sagaActions";
import { selectVendors } from "../../data/slices/vendorsSlice";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import VendorCard from "../../components/vendorCard/VendorCard";
import memoize from "memoize-one";
import styles from "./Vendors.module.scss";

const createItemData = memoize((items) => ({
  items,
}));

const Vendors = (props) => {
  const vendorList = useSelector(selectVendors);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const itemData = createItemData(vendorList);

  useEffect(() => {
    dispatch({
      type: sagaActions.FETCH_VENDORS_SAGA,
      payload: { params: { filters: JSON.stringify({ superType: [1] }), lat: 35.6993, long: 51.3372, page: page } },
    });
  }, [page, dispatch]);

  const isItemLoaded = (index) => !!vendorList[index];

  const handleLoadMore = () => setPage((prevState) => prevState + 1);

  return (
    <div className={styles["wrapper"]}>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            threshold={5}
            minimumBatchSize={5}
            isItemLoaded={isItemLoaded}
            itemCount={50000}
            loadMoreItems={handleLoadMore}
          >
            {({ onItemsRendered, ref }) => (
              <List
                direction='rtl'
                height={height}
                itemCount={vendorList.length}
                itemSize={260}
                itemData={itemData}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}
              >
                {VendorCard}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

export default Vendors;
