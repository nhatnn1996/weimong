export default function PageTwo() {
  return (
    <div className="mt-20">
      <div className="2xl:flex w-full">
        <div className="2xl:w-[50%]">
          <div className="text-xl 2xl:text-4xl mb-4 mt-20" style={{ lineHeight: '1.6' }}>
            Survive and <br /> complete missions!{' '}
          </div>
          <p className="text-xs 2xl:text-base">
            In this mode, SillyMong can hide and receive special power-ups provided by the system when the player completes quests in the playroom.
            These power factors have certain benefits that allow SillyMong to protect himself against the Devil.
          </p>
        </div>
        <div className="xl:pl-20 mt-5">
          <img src="/images/sillymong2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
