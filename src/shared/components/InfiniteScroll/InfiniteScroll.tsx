import { FC, useEffect, useRef } from 'react';

import { Loader } from 'src/shared/components';

import styles from './InfiniteScroll.module.scss';

interface IInfiniteScrollProps {
  loadMore: () => void;
  isLoading: boolean;
  needLoadMore: boolean;
}

const InfiniteScroll: FC<IInfiniteScrollProps> = ({
  loadMore,
  isLoading,
  needLoadMore,
}) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!needLoadMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: '50px',
      },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
      observer.disconnect();
    };
  }, [needLoadMore, loadMore]);

  return (
    <div ref={loaderRef} className={styles.infiniteScroll}>
      {isLoading ? <Loader size='small' /> : null}
    </div>
  );
};

export default InfiniteScroll;
