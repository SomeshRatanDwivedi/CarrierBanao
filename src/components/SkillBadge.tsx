interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-sm hover:bg-white/20 transition-colors duration-300">
      {name}
    </span>
  );
};

export default SkillBadge;