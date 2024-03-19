interface INxWelcome {
  title: string;
}
export const NxWelcome = (props: INxWelcome) => {
  return (
    <div>
      <h1>Hello child</h1>
    </div>
  );
};

export default NxWelcome;
