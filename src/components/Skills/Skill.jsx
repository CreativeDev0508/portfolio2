import { StyledSkillItem } from '../../styles/Skills/Skill/StyledSkillItem';
import { childTechnologyVariants } from '../../utils/animations';

const Skill = ({ skill }) => {
  return (
    <StyledSkillItem variants={childTechnologyVariants}>
      {skill.technology}
    </StyledSkillItem>
  );
};

export default Skill;
