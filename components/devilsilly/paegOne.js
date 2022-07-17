export default function PageOne() {
  return (
    <div className="mt-20">
      <div className="flex w-full">
        <div className="w-[50%]">
          <div className="text-4xl mb-4 mt-20" style={{ lineHeight: '1.6' }}>
            What happened to this land?
          </div>
          <p>
            In this mode, the player will discover the core formation of the SillyMong world and learn why it is called the Horror Lands. Players must
            solve the puzzles in this mode in turn. Rewards in this mode will be received when the player completes the puzzles and understands the
            meaning of Horror Lands.
          </p>
        </div>
        <div className="pl-20">
          <img src="/images/sillymong.png" alt="" />
        </div>
      </div>
    </div>
  );
}
