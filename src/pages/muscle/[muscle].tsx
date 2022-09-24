import type { GetServerSideProps, GetServerSidePropsContext } from "next";

const MuscleInfo = () => {
  return (
    <>
      <h1>Esto es un ejemplo sin entars</h1>
    </>
  );
};

export const getServerSideProps = (context) => {
  const { muscle } = context.query;
  console.log("muscle es ", muscle);
  let hola;
  return {
    props: {
      hola: "sad",
    },
  };
};
export default MuscleInfo;
