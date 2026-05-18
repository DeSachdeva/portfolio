type DomainCardProps = {
  title: string;
  description: string;
};

export default function DomainCard({
  title,
  description,
}: DomainCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]">
      
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-zinc-400">
        {description}
      </p>

    </div>
  );
}