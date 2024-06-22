/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/App";
import Footer from "@/components/blocks/footer";
import ProductGallery from "@/components/blocks/product-gallery";
import TopSection from "@/components/blocks/top-section";
import ErrorOccured from "@/components/error";
import SpinnerLoader from "@/components/loaders/spinner-loader";
import ModalManager from "@/components/modal-manager";
import NoProducts from "@/components/no-products";
import { useGetStore } from "@/hooks/api/use-store";
import { isNull, isUndefined } from "lodash";
import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomeNew = () => {
  const { storeName, productId } = useParams();
  const navigate = useNavigate();
  const shouldOpenModal = !!productId;

  // store storeName in local storage
  useEffect(() => {
    if (!storeName) {
      return;
    }
    localStorage.setItem("store_name", storeName);
  }, [storeName]);

  const {
    data: store,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetStore(storeName);

  const memoizedProductGallery = useMemo(() => {
    if (!store?.products) return null;
    return store.products.length === 0 ? (
      <NoProducts />
    ) : (
      <ProductGallery products={store.products} categories={store.categories} />
    );
  }, [store?.products, store?.categories]);

  // if (error) return <ErrorDisplay error={error} />;
  if (isError) {
    return <ErrorOccured error={error} onRetry={refetch} />;
  }
  if (isLoading) {
    return <SpinnerLoader delay={50} timeout={15000} />;
  }

  return (
    <div>
      {shouldOpenModal && <ModalManager shouldOpen={shouldOpenModal} />}
      <Container>
        <TopSection store={store} />
      </Container>
      {memoizedProductGallery}
      <Footer />
    </div>
  );
};

export default HomeNew;
