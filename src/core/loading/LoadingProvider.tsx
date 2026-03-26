import { useIsMutating, useIsFetching } from "@tanstack/react-query";
import LoadingBar from "@ui/components/loading/Loading.tsx";

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  const isLoading = isMutating > 0 || isFetching > 0;

  return (
    <>
      {isLoading && <LoadingBar />}
      {children}
    </>
  );
};
