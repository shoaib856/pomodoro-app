const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-center justify-between flex-wrap gap-6">
      {children}
    </section>
  );
};

const SectionHeader = ({ text }: { text: string }) => {
  return <h4 className="text-h4 uppercase text-mirage">{text}</h4>;
};

const SectionContent = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: boolean;
}) => (
  <div
    className={`flex justify-between items-center`}
    style={gap ? { gap: "22px" } : { width: "152px" }}
  >
    {children}
  </div>
);

Section.Header = SectionHeader;
Section.Content = SectionContent;

export default Section;
