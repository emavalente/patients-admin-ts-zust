export const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-center my-4 bg-red-600 text-white p-3 font-bold uppercase text-sm">
      {children}
    </p>
  );
};
