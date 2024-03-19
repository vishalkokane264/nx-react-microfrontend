interface INxWelcome {
  title: string;
}
export const NxWelcome = (props: INxWelcome) => {
  return (
    <div>
      <h1>Hello container</h1>
    </div>
  );
};

export default NxWelcome;
