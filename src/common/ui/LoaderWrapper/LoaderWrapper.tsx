interface LoaderWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  loader: React.ReactNode;
}

export const LoaderWrapper = ({ isLoading, loader, children }: LoaderWrapperProps) => {
  return <>{isLoading ? loader : children}</>;
};
