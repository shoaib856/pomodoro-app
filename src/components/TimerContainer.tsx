const TimerContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[22px] rounded-full [background:_linear-gradient(315deg,_#2E325A_0%,_#0E112A_100%)] [box-shadow:_50px_50px_100px_0px_#121530,_-50px_-50px_100px_0px_#272C5A]">
      {children}
    </div>
  );
};

export default TimerContainer;
